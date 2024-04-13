import React from 'react';
import Header from '../components/Header';
import MainSection from '../components/MainSection';

export default function Overseas() {
  const korean = [
    { appearData: '토트넘', sendData: 'Tottenham' },
    { appearData: '바이에른 뮌헨', sendData: 'Bayern Munich' },
    { appearData: '파리 생제르망', sendData: 'Paris Saint-Germain' },
    { appearData: '울버햄튼', sendData: 'Wolverhampton' },
    { appearData: '브렌트퍼드', sendData: 'Brentford' },
  ];
  const pl = [
    { appearData: '토트넘', sendData: 'Tottenham' },
    { appearData: '맨유', sendData: 'Manchester United' },
    { appearData: '첼시', sendData: 'Chelsea' },
    { appearData: '리버풀', sendData: 'Liverpool' },
    { appearData: '아스날', sendData: 'Arsenal' },
    { appearData: '맨시티', sendData: 'Manchester City' },
    { appearData: '울버햄튼', sendData: 'Wolverhampton' },
    { appearData: '브렌트퍼드', sendData: 'Brentford' },
    { appearData: '아스톤빌라', sendData: 'Aston Villa' },
    { appearData: '웨스트햄', sendData: 'West Ham United' },
    { appearData: '브라이튼', sendData: 'Brighton & Hove Albion' },
    { appearData: '뉴캐슬', sendData: 'Newcastle United' },
    { appearData: '본머스', sendData: 'Bournemouth' },
    { appearData: '풀럼', sendData: 'Fulham' },
    { appearData: '크리스탈 팰리스', sendData: 'Crystal Palace' },
    { appearData: '에버튼', sendData: 'Everton' },
    { appearData: '노팅엄', sendData: 'Nottingham Forest' },
    { appearData: '번리', sendData: 'Burnley' },
    { appearData: '셰필드', sendData: 'Sheffield United' },
    { appearData: '루턴 타운', sendData: 'Luton Town' },
  ];

  return (
    <div>
      <Header domColor="#b1b1b1" overColor="#000000" />
      <MainSection field="코리안리거" teamNames={korean} fieldColor="#ff1e00" />
      <MainSection field="프리미어리그" teamNames={pl} fieldColor="#001957" />
    </div>
  );
}
