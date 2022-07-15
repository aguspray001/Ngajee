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

interface LastRead{
    chapterName: String, 
    chapterFrom: String, 
    verseCount: Number, 
    ayahId: Number
}

const HomePage = () => {
    const [dataChapters, setDataChapters] = useState<Chapter[] | null>(null);
    const [lastRead, setLastRead] = useState<LastRead>({chapterName: "", chapterFrom: "", verseCount: 0, ayahId: 0})
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
         if(typeof window !== "undefined"){
            if(localStorage.lastRead){
                setLastRead(JSON.parse(localStorage["lastRead"]));
            }
         }
    }, [])
    
    return (
        <article className='container'>
            <div className='home__content'>
                <p className='home__greeting'>Assalamu'alaikum</p>
                <p className='home__username'>Let's, Read and Listening to Qur'an</p>
                <SurahCard surahTitle={lastRead.chapterName} ayahNumber={lastRead.ayahId} />
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