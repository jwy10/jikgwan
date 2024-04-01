import React, { useState } from 'react';
import '../CSS/Components.css';
import TeamBox from './TeamBox';

interface Props {
  field: string;
  // teamName: string;
}

export default function MainSection({ field }: Props) {
  const [showMatchBox, setShowMatchBox] = useState(false);
  const toggleMatchBox = () => {
    setShowMatchBox(!showMatchBox);
  };

  return (
    <>
      <div className="fieldBox">
        <div className="fieldBoxHeader">
          <h2> {field} </h2>
          <button onClick={toggleMatchBox}>{showMatchBox ? '▲' : '▼'}</button>
        </div>
        <div className="teamList">
          <TeamBox teamName="삼성" />
          {/* <div className="teamBox">{teamName}</div> */}
        </div>
        {showMatchBox && (
          <>
            <div className="matchBox">
              <p>날짜</p>
              <p>해당 경기</p>
              <p>구매</p>
            </div>
            <div className="matchBox">
              <p>날짜</p>
              <p>해당 경기</p>
              <p>구매</p>
            </div>
            <div className="matchBox">
              <p>날짜</p>
              <p>해당 경기</p>
              <p>구매</p>
            </div>
          </>
        )}
      </div>
    </>
  );
}
