import React from 'react'
import {BiArrowBack} from 'react-icons/bi';

interface NavBarProps{
  onBack: () => void
}

const NavBar = ({onBack}:NavBarProps) => {
  return (
    <div className='navbar__container'>
      <div className='back' onClick={onBack}>
        <BiArrowBack/>
        <p>Back</p>
      </div>
    </div>
  )
}

export default NavBar