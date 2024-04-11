import React from 'react';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import TeamBox from '../components/TeamBox';

export default function Domestic() {
  const kleague = [
    { appearData: '울산', sendData: '서울' },
    { appearData: '포항', sendData: '포항' },
    { appearData: '광주', sendData: '광주' },
    { appearData: '전북', sendData: '전북' },
    { appearData: '인천', sendData: '인천' },
    { appearData: '대구', sendData: '대구' },
    { appearData: '서울', sendData: '서울' },
    { appearData: '대전', sendData: '대전' },
    { appearData: '강원', sendData: '강원' },
    { appearData: '수원', sendData: '수원' },
    { appearData: '김천', sendData: '김천' },
  ];
  return (
    <div>
      <Header domColor="#000000" overColor="#b1b1b1" />
      <MainSection field="K리그1" teamNames={kleague} />
    </div>
  );
}
