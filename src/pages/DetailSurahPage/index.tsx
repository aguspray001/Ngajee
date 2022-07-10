import { instance } from 'api/instance'
import AyahContent from 'components/molecules/AyahContent'
import DetailSurahAction from 'components/molecules/DetailSurahAction'
import DetailSurahCard from 'components/molecules/DetailSurahCard'
import Pagging from 'components/molecules/Pagging'
import { AUDIO_URL, BASE_API_URL } from 'constant'
import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

interface Verses {
    id: Number,
    juz_number: Number,
    page_number: Number,
    verse_number: Number,
    words: String[],
}

interface Pagination{
    current_page: Number,
    next_page: Number,
    per_page: Number,
    total_pages: Number,
    total_records: Number,
}

const DetailSurahPage = () => {
    const [dataVerses, setDataVerses] = useState<{verses:Verses[], pagging: Pagination} | null>(null);
    const [playAyah, setPlayAyah] = useState<{ayahId: Number | null, playState: Boolean}>({ayahId: null, playState: false});
    const [page, setPage] = useState(1)
    const { id } = useParams();

    const fetchDataVerses = async (page:Number) => {
        try {
            const verses = await instance.get(BASE_API_URL + `/verses/by_chapter/${id}?language=en&words=true&page=${page}&per_page=10`);
            const ayah = await instance.get(BASE_API_URL + `/quran/verses/uthmani?chapter_number=${id}`);
            console.log(verses)
            const fixedAyah = ayah.data.verses.filter((verse: any, i: any) => {
                return verse.id >= verses.data.verses[0].id //get data >= verse id
            }).map((verse: any) => {
                return {
                    id: verse.id,
                    verseKey: verse.verse_key,
                    textUtsmani: verse.text_uthmani,
                }
            })

            const fixedVerses = verses.data.verses.map((verse: any, i: any) => {
                return {
                    id: verse.id,
                    juzNumber: verse.juz_number,
                    pageNumber: verse.page_number,
                    verseNumber: verse.verse_number,
                    // words: verse.words,
                    text: fixedAyah[i].textUtsmani,
                    verseKey: fixedAyah[i].verse_key
                }
            })
            // console.log(fixedVerses)
            setDataVerses({verses: fixedVerses, pagging: verses.data.pagination});
        } catch (e) {
            console.log(e)
        }
    }

    const playAudioByAyahId = async (id:Number) => {
        setPlayAyah({ayahId:id, playState: !playAyah.playState});
    }

    useEffect(() => {
        if(playAyah.ayahId !== null){
            instance.get(BASE_API_URL + `/recitations/3/by_ayah/${playAyah.ayahId}`).then(res=>{
                const audio = new Audio(AUDIO_URL + res.data.audio_files[0].url);
                if(playAyah.playState === true){
                    audio.play();
                }else{
                    audio.pause();
                }
            })
        }
    }, [playAyah])

    const fetchDataverseCallback = useCallback(
      () => {
        fetchDataVerses(page);
      },
      [page],
    )
    
    useEffect(() => {
        fetchDataverseCallback();
    }, [page])
    


    return (
        <div className='container'>
            <div className="detail-surah-page__content">
                <div className='card'>
                    <DetailSurahCard title={"Al-Fatihah"} meaning={"The Opening"} from={"MECCAN"} totalAyah={7} />
                </div>
                <div className='pagging'>
                    <Pagging 
                        totalPage={dataVerses?.pagging.total_pages || 0} 
                        page={dataVerses?.pagging.current_page || 0}
                        onNext={()=> {
                            if(page === dataVerses?.pagging.total_pages){
                                setPage(page);
                            }else{
                                setPage(page+ 1)
                            }
                        }}
                        onPrev={()=>{
                            if(page <= 0){
                                setPage(1);
                            }else{
                                setPage(page - 1)
                            }
                        }}
                    />
                </div>
                {dataVerses &&
                    dataVerses.verses.map((verse: any, key) => {
                        return (
                            <React.Fragment key={key}>
                                <DetailSurahAction number={verse.verseNumber} playState={(verse.id === playAyah.ayahId) && playAyah.playState} onPlay={()=>playAudioByAyahId(verse.id)}/>
                                <AyahContent ayah={verse.text} meaning={""} />
                            </React.Fragment>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default DetailSurahPage