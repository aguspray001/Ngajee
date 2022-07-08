import SurahCard from 'components/molecules/SurahCard'
import SurahList from 'components/molecules/SurahList'
import React from 'react'

const HomePage = () => {
    return (
        <article className='container'>
            <div className='home__content'>
                <p className='home__greeting'>Assalamu'alaikum</p>
                <p className='home__username'>Agus Prayudi</p>
                <SurahCard surahTitle={"Al-Fatihah"} ayahNumber={7} />
                <div className='home-list__content'>
                    <SurahList
                        latinTitle={"Al-Fatihah"}
                        arabianTitle={"الفاتحة"}
                        number={1}
                        from={"Meccan"}
                        totalAyah={224}
                        href={"/detail"}
                    />
                    <SurahList
                        latinTitle={"Al-Fatihah"}
                        arabianTitle={"الفاتحة"}
                        number={1}
                        from={"Meccan"}
                        totalAyah={224}
                        href={"/"}
                    />
                    <SurahList
                        latinTitle={"Al-Fatihah"}
                        arabianTitle={"الفاتحة"}
                        number={1}
                        from={"Meccan"}
                        totalAyah={224}
                        href={"/"}
                    />
                    <SurahList
                        latinTitle={"Al-Fatihah"}
                        arabianTitle={"الفاتحة"}
                        number={1}
                        from={"Meccan"}
                        totalAyah={224}
                        href={"/"}
                    />
                    <SurahList
                        latinTitle={"Al-Fatihah"}
                        arabianTitle={"الفاتحة"}
                        number={1}
                        from={"Meccan"}
                        totalAyah={224}
                        href={"/"}
                    />
                </div>
            </div>
        </article>
    )
}

export default HomePage