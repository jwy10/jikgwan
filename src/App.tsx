import React from 'react';
import './CSS/App.css';
// import './CSS/Reset.css'
import IntroHeader from './components/IntroHeader';

function App() {
  return (
    <div className="App">
      <div><h1 style={{zIndex:10}}>JikGwan</h1></div>
      <div className='Intro'>
        <IntroHeader name="국내"/>
        <IntroHeader name="해외"/>
      </div>
      
    </div>
  );
}

export default App;
