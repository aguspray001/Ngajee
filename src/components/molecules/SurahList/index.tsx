import React from 'react'
import numberingBorder from "assets/images/numbering-border.png";
import { Link } from 'react-router-dom';

interface surahListProps {
    number: Number;
    latinTitle: String;
    arabianTitle: String;
    from: String;
    totalAyah: Number;
    href: string;
}

const SurahList = ({ latinTitle, arabianTitle, number, from, totalAyah, href }: surahListProps): JSX.Element => {
    return (
        <Link to={href} className='surah-list__container'>
            <div className="surah-list__content">
                <div className='numbering__container'>
                    <img className='numbering__border' src={numberingBorder} alt="numbering-border" />
                    <p className='numbering__item'>{number.toString()}</p>
                </div>
                <div className="description">
                    <p>{latinTitle}</p>
                    <p>{from.toLocaleUpperCase()} - {totalAyah.toString()} VERSES</p>
                </div>
            </div>
            <p className='surah-list__title'>{arabianTitle}</p>
        </Link>
    )
}

export default SurahList