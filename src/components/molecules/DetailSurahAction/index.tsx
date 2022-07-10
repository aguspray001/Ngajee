import Button from 'components/atoms/Button';
import React from 'react'
import { AiOutlineShareAlt } from 'react-icons/ai';
import { BsPause, BsPlay } from 'react-icons/bs';
import { HiOutlineSave } from 'react-icons/hi';

interface DetailSurahActionProps{
    onShare?: ()=> void,
    onPlay?: ()=> void,
    onSave?: ()=> void,
    playState: Boolean,
    number: Number,
}

const DetailSurahAction = ({onShare, onPlay, onSave, playState, number}:DetailSurahActionProps): JSX.Element => {
  return (
    <div className='detail-surah-action__container'>
        <div className='numbering-border'>
            <p>{number.toString()}</p>
        </div>
        <div className='detail-surah-action__menu'>
            <Button type={"icon"} onClick={onShare}>
                <AiOutlineShareAlt/>
            </Button>
            <Button type={"icon"} onClick={onPlay}>
                {playState? <BsPause/> : <BsPlay/>}
            </Button>
            <Button type={"icon"} onClick={onSave}>
                <HiOutlineSave/>
            </Button>
        </div>
    </div>
  )
}

export default DetailSurahAction