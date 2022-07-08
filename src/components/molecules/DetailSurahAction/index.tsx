import Button from 'components/atoms/Button';
import React from 'react'
import { AiOutlineShareAlt } from 'react-icons/ai';
import { BsPlay } from 'react-icons/bs';
import { HiOutlineSave } from 'react-icons/hi';

const DetailSurahAction = () => {
  return (
    <div className='detail-surah-action__container'>
        <div className='numbering-border'>
            <p>1</p>
        </div>
        <div className='detail-surah-action__menu'>
            <Button type={"icon"} onClick={()=>console.log("share")}>
                <AiOutlineShareAlt/>
            </Button>
            <Button type={"icon"} onClick={()=>console.log("play")}>
                <BsPlay/>
            </Button>
            <Button type={"icon"} onClick={()=>console.log("save")}>
                <HiOutlineSave/>
            </Button>
        </div>
    </div>
  )
}

export default DetailSurahAction