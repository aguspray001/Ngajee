import SplashCard from 'components/molecules/SplashCard'
import React from 'react'

const SplashPage = () => {
  return (
    <article className='container'>
        <div className='splash__content'>
            <h1>Quran App</h1>
            <p>Learn quran and <br/> recite once everyday</p>
            <SplashCard/>
        </div>
    </article>
  )
}

export default SplashPage