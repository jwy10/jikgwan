import React from 'react';
import Header from '../components/Header';
import MainSection from '../components/MainSection';

export default function Overseas() {
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
      <Header domColor="#b1b1b1" overColor="#000000" />
      <MainSection field="프리미어리그" teamNames={pl} />
    </div>
  );
}
