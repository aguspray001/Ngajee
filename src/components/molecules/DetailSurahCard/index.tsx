import React from 'react'
import quranIcon from "assets/images/quran-icon.png"

interface DetailSurahCardProps{
    title:String;
    meaning:String;
    from: String;
    totalAyah: Number;
}

const DetailSurahCard = ({title, meaning, from, totalAyah}:DetailSurahCardProps) => {
  return (
    <div className='detail-surah-card__container shadow'>
        <img className='img__icon' src={quranIcon} alt='quran-icon'/>
        <div className='detail-surah-card__title'>
            <h4>{title}</h4>
            <p>{meaning}</p>
        </div>
        <p>{from.toUpperCase()} - {totalAyah.toString()} VERSES</p>
        <h2>بِسْمِ اللهِ الرَّحْمَٰنِ الرَّحِيمِ</h2>
    </div>
  )
}

export default DetailSurahCard