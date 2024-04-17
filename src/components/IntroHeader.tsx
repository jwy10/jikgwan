import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface Props {
  name: string;
  imgUrl: string;
  fontColor: string;
  expandSize: string;
  link: string;
}

export default function IntroHeader({
  name,
  imgUrl,
  fontColor,
  expandSize,
  link,
}: Props) {
  const IntroBtn = styled.div`
    display: flex;
    background-image: url('${imgUrl}');
    width: 45%;
    height: 500px;
    background-size: cover;
    background-position: center;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin: 10px;
    color: ${fontColor};
    font-size: 40px;
    font-weight: bold;

    &:hover {
      background-size: ${expandSize};
      transition: transform 0.5s ease;
    }

    @media screen and (max-width: 768px) {
      width: 90%;
    }
  `;
  return (
    <>
      <IntroBtn className="IntroBtn">
        <Link to={link}>{name}직관</Link>
      </IntroBtn>
    </>
  );
}
