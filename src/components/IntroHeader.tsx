import React from 'react'
import '../CSS/Intro.css'
import styled from 'styled-components'

interface Props {
  name: string
  imgUrl: string
  fontColor: string
  expandSize: string
}


export default function IntroHeader({name, imgUrl, fontColor, expandSize}: Props) {
  const MyDiv = styled.div`
  display: flex;
  background-image: url('${imgUrl}');
  width: 45%;
  height: 500px;
  background-size: cover;
  background-position: center;
  align-items : center;
  text-align: center;
  justify-content: center;
  margin: 10px;
  color: ${fontColor};
  font-size: 28px;
  font-weight: bold;
  transition: background-size 1s ease;

  &:hover{
    background-size: ${expandSize} ;
  }
  `
  return (
    <>
    <MyDiv>{name}직관</MyDiv>
    </>
  )
}
