import React from 'react';
import Header from '../components/Header';
import MainSection from '../components/MainSection';

export default function Domestic() {
  return (
    <div>
      <Header domColor="#000000" overColor="#b1b1b1" />
      <MainSection field="야구" />
      <MainSection field="축구" />
      <MainSection field="농구" />
      <MainSection field="E스포츠" />
      <MainSection field="배구" />
    </div>
  );
}
