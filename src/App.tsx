import React from 'react';
import './CSS/App.css';
// import './CSS/Reset.css'
import IntroHeader from './components/IntroHeader';

function App() {
  const imgDome = '/domestic.png'
  const imgOver = '/overseas.png'
  return (
    <div className="App">
      <div><h1>JikGwan</h1></div>
      <div className='Intro'>
        <IntroHeader name="국내" imgUrl={imgDome} fontColor='white' expandSize='200%'/>
        <IntroHeader name="해외"  imgUrl={imgOver} fontColor='black' expandSize='300%'/>
      </div>
      
    </div>
  );
}

export default App;
