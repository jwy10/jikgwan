import React from 'react';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import TeamBox from '../components/TeamBox';

export default function Domestic() {
  const kleague = [
    '서울',
    '인천',
    '포항',
    '전북',
    '울산',
    '수원',
    '광주',
    '제주',
    '강원',
    '김천',
    '대구',
    '대전',
  ];
  return (
    <div>
      <Header domColor="#000000" overColor="#b1b1b1" />
      <MainSection field="K리그1" teamNames={kleague} />
    </div>
  );
}
