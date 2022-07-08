import Button from 'components/atoms/Button'
import cardBackground from "assets/images/card-splash-bg.jpg"
import quranIcon from "assets/images/quran-icon.png"

const SplashCard = () => {
  return (
    <div className='card__container shadow'>
        <div className="card__content">
            <img className='img__icon' src={quranIcon} alt='quran-icon'/>
            <img className='img-cover' src={cardBackground} alt='card-background'/>
        </div>
        <div className='card__button'>
            <Button className={["secondary", "borderless"]} type="internal-link" href={"/home"}>Getting Started</Button>
        </div>
    </div>
  )
}

export default SplashCard