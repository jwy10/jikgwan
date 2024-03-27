import React from 'react'
import '../CSS/Intro.css'

interface Props {
  name: string
  // bgimage: string
}


export default function IntroHeader({name}: Props) {
  return (
    <span className='introBox'>
      {name} 직관
    </span>
  )
}
