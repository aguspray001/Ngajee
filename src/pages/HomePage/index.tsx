import {instance} from 'api/instance'
import axios from 'axios'
import SurahCard from 'components/molecules/SurahCard'
import SurahList from 'components/molecules/SurahList'
import { BASE_API_URL } from 'constant'
import React, { useEffect, useState } from 'react'

interface Chapter{
    simpleName: String,
    arabianName: String,
    number: Number,
    totalAyah: Number,
    id: Number,
    from: String
}

const HomePage = () => {
    const [dataChapters, setDataChapters] = useState<Chapter[] | null>(null);

    const fetchDataChapter = async () => {
        try{
            const chapters = await instance.get(BASE_API_URL+'/chapters?language=id');
            const fixDataChapters = chapters.data.chapters.map((chapter:any)=>{
             return ({
                 simpleName: chapter.name_simple,
                 arabianName: chapter.name_arabic,
                 number: chapter.id,
                 totalAyah: chapter.verses_count,
                 id: chapter.id,
                 from: chapter.revelation_place
             })
            })
            setDataChapters(fixDataChapters);
        }catch(e){
            console.log(e)
        }
    }
    useEffect(() => {
         fetchDataChapter();
    }, [])
    
    return (
        <article className='container'>
            <div className='home__content'>
                <p className='home__greeting'>Assalamu'alaikum</p>
                <p className='home__username'>Yuk, Baca Qur'an</p>
                <SurahCard surahTitle={"List Surah"} ayahNumber={7} />
                <div className='home-list__content'>
                    {
                        dataChapters &&
                        dataChapters.map((dataChapter, key)=>{
                            return(
                                <SurahList
                                key={key}
                                latinTitle={dataChapter.simpleName} //name_simple
                                arabianTitle={dataChapter.arabianName} //name_arabic
                                number={dataChapter.id} //id
                                from={dataChapter.from || "Mekkah"} //relevation_place
                                totalAyah={dataChapter.totalAyah} //verses_count
                                href={`/detail/${dataChapter.id}`} //id
                            />
                            )
                        })
                    }
                </div>
            </div>
        </article>
    )
}

export default HomePage