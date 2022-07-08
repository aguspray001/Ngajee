import AyahContent from 'components/molecules/AyahContent'
import DetailSurahAction from 'components/molecules/DetailSurahAction'
import DetailSurahCard from 'components/molecules/DetailSurahCard'
import React from 'react'

const DetailSurahPage = () => {
    return (
        <div className='container'>
            <div className="detail-surah-page__content">
                <div className='card'>
                    <DetailSurahCard title={"Al-Fatihah"} meaning={"The Opening"} from={"MECCAN"} totalAyah={7} />
                </div>
                <>
                <DetailSurahAction />
                <AyahContent ayah={"ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ"} meaning={"All praise is for Allah—Lord of all worlds,"}/>
                </>
                <>
                <DetailSurahAction />
                <AyahContent ayah={"ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ"} meaning={"All praise is for Allah—Lord of all worlds,"}/>
                </>
                <>
                <DetailSurahAction />
                <AyahContent ayah={"ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ"} meaning={"All praise is for Allah—Lord of all worlds,"}/>
                </>
            </div>
        </div>
    )
}

export default DetailSurahPage