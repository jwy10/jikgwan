import React from 'react';
import Header from '../components/Header';
import MainSection from '../components/MainSection';

export default function Home() {
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
      <Header domColor="#000000" overColor="#000000" />
      <MainSection field="K리그1" teamNames={kleague} />
      <MainSection field="프리미어리그" teamNames={pl} />
    </div>
  );
}
