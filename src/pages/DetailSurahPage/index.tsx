import AyahContent from 'components/molecules/AyahContent'
// import ChildrenComponent from 'components/molecules/ChildrenComponent'
import DetailSurahAction from 'components/molecules/DetailSurahAction'
import DetailSurahCard from 'components/molecules/DetailSurahCard'
import NavBar from 'components/molecules/NavBar'
import Pagging from 'components/molecules/Pagging'
import { AUDIO_URL } from 'constant'
import { getQuranData } from 'context/action'
import { useAppContext } from 'context/store'
import React, { useEffect, useRef, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const DetailSurahPage = () => {
    const [playAyah, setPlayAyah] = useState<{ ayahId: Number | null, playState: Boolean }>({ ayahId: null, playState: false });
    const [ayahURL, setAyahURL] = useState("");
    const [page, setPage] = useState(1)
    const audioRef = useRef<HTMLAudioElement>(null);
    const context = useAppContext();
    const { id } = useParams();
    const navigate = useNavigate();

    const onChangeAudio = (ayahId: Number, ayahURL: any) => {
        setPlayAyah({ ayahId: ayahId, playState: !playAyah.playState });
        setAyahURL(ayahURL);
    }

    const playAudio = async () => {
        if (playAyah.ayahId !== null) {
            if (playAyah.playState) {
                audioRef?.current?.play();
            } else {
                audioRef?.current?.pause();
            }
        }
    }

    const onLastRecitation = (ayahId: Number, chapterName: String, verseCount: Number, chapterFrom: String) => {
        localStorage.setItem("lastRead", JSON.stringify({ ayahId, verseCount, chapterName, chapterFrom }));
    }

    useEffect(() => {
        playAudio();
    }, [playAyah]);

    useEffect(() => {
        getQuranData(context, page, id);
    }, [page]);

    return (
        <div className='container'>
            <NavBar onBack={()=>navigate("/home")}/>
            <div className="detail-surah-page__content">
                <div className='card'>
                    <DetailSurahCard title={"Al-Fatihah"} meaning={"The Opening"} from={"MECCAN"} totalAyah={7} />
                </div>
                <div className='pagging'>
                    <Pagging
                        totalPage={context?.state.pagging.total_pages || 0}
                        page={context?.state.pagging.current_page || 0}
                        onNext={() => {
                            if (page === context?.state.pagging.total_pages) {
                                setPage(page);
                            } else {
                                setPage(page + 1)
                            }
                        }}
                        onPrev={() => {
                            if (page <= 0) {
                                setPage(1);
                            } else {
                                setPage(page - 1)
                            }
                        }}
                    />
                </div>
                {context?.state &&
                    context.state.verses.map((verse: any, key) => {
                        return (
                            <React.Fragment key={key}>
                                <audio
                                    ref={audioRef}
                                    src={AUDIO_URL + ayahURL}
                                />
                                <DetailSurahAction
                                    number={verse.verseNumber}
                                    playState={(verse.id === playAyah.ayahId) && playAyah.playState}
                                    onPlay={() => {
                                        onChangeAudio(verse.id, verse.audioFiles)
                                        
                                        onLastRecitation(verse.verseNumber, verse.chapterName, verse.verseCount, verse.chapterFrom)
                                    }}
                                />
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