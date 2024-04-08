import React from 'react';
import IntroHeader from '../components/IntroHeader';

export default function Intro() {
  const imgDome = '/domestic.png';
  const imgOver = '/overseas.png';

  return (
    <>
      <div>
        <p style={{ fontSize: '40px', margin: '40px', textAlign: 'center' }}>
          JikGwan
        </p>
      </div>
      <div className="Intro">
        <IntroHeader
          name="국내"
          imgUrl={imgDome}
          fontColor="white"
          expandSize="200%"
          link="/domestic"
        />
        <IntroHeader
          name="해외"
          imgUrl={imgOver}
          fontColor="black"
          expandSize="250%"
          link="/overseas"
        />
      </div>
    </>
  );
}
