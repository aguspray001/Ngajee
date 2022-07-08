import React from 'react'

interface AyahContentProps { ayah: String; meaning: string; };

const AyahContent = ({ ayah, meaning }:AyahContentProps) => {
    return (
        <div className='ayah-content__container'>
            <p className='ayah'>{ayah}</p>
            <p className='meaning'>{meaning}</p>
        </div>
    )
}

export default AyahContent