import Button from 'components/atoms/Button'
import React from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

interface PaggingProps{
    totalPage:Number, 
    page:Number, 
    perPage?:Number,
    onNext: ()=> void,
    onPrev: ()=> void,
};

const Pagging = ({totalPage, page, perPage, onNext, onPrev}:PaggingProps) => {
  return (
    <div className='pagging__container'>
        <p>{page.toString()} of <span>{totalPage.toString()}</span></p>
        <div className="pagging__menu">
            <Button type={"icon"} onClick={onPrev}>
                <AiOutlineArrowLeft/>
            </Button>
            <Button type={"icon"} onClick={onNext}>
                <AiOutlineArrowRight/>
            </Button>
        </div>
    </div>
  )
}

export default Pagging