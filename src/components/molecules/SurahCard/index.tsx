import React from 'react'
import quranIcon from "assets/images/quran-icon.png"

interface surahCardProps{
    surahTitle: String;
    ayahNumber: Number;
}

const SurahCard= ({surahTitle, ayahNumber} : surahCardProps): JSX.Element  => {
  return (
    <div className='surah__container'>
        <div className='surah__content'>
          {
            surahTitle !== "" ?
            <React.Fragment>
              <p>Last listening surah :</p>
              <p>{surahTitle}</p>
              <p>Ayah No. {ayahNumber.toString()}</p>
            </React.Fragment> : <p>No history read Qur'an, let's read Qur'an ✨</p>
          }
        </div>
        <img width={100} height={100} className='' src={quranIcon} alt='card-background'/>
    </div>
  )
}

export default SurahCard