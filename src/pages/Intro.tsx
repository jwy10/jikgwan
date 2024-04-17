import React from 'react';
import IntroHeader from '../components/IntroHeader';
import { Link } from 'react-router-dom';

export default function Intro() {
  const imgDome = '/domestic.png';
  const imgOver = '/overseas.png';

  return (
    <>
      <div>
        <Link to={'/home'}>
          <p style={{ fontSize: '40px', margin: '40px', textAlign: 'center' }}>
            JikGwan
          </p>
        </Link>
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
          fontColor="#03008d"
          expandSize="250%"
          link="/overseas"
        />
      </div>
    </>
  );
}
