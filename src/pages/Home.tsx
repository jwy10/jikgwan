import React from 'react';
import Header from '../components/Header';
import MainSection from '../components/MainSection';

export default function Home() {
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
  const pl = [
    { appearData: '맨유', sendData: 'Manchester United' },
    { appearData: '토트넘', sendData: 'Tottenham' },
    { appearData: '첼시', sendData: 'Chelsea' },
    { appearData: '리버풀', sendData: 'Liverpool' },
    { appearData: '아스날', sendData: 'Arsenal' },
    { appearData: '맨시티', sendData: 'Manchester City' },
    { appearData: '울버햄튼', sendData: 'Wolverhampton' },
    { appearData: '아스톤빌라', sendData: 'Aston Villa' },
    { appearData: '웨스트햄', sendData: 'West Ham United' },
    { appearData: '브라이튼', sendData: 'Brighton & Hove Albion' },
  ];
  return (
    <div>
      <Header domColor="#000000" overColor="#000000" />
      <MainSection field="K리그1" teamNames={kleague} />
      <MainSection field="프리미어리그" teamNames={pl} />
    </div>
  );
}
