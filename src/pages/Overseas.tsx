import React from 'react';
import Header from '../components/Header';
import MainSection from '../components/MainSection';

export default function Overseas() {
  const pl = [
    '토트넘',
    '맨유',
    '첼시',
    '리버풀',
    '아스날',
    '맨시티',
    '울버햄튼',
    '아스톤빌라',
    '웨스트햄',
    '브라이튼',
  ];
  return (
    <div>
      <Header domColor="#b1b1b1" overColor="#000000" />
      <MainSection field="프리미어리그" teamNames={pl} />
    </div>
  );
}
