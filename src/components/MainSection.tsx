import React from 'react';
import '../CSS/Components.css';

interface Props {
  field: string;
}

export default function MainSection({ field }: Props) {
  return (
    <>
      <div className="fieldBox">
        <h2> {field} </h2>
        <div>
          <p>해당 경기</p>
          <p>팀 선택</p>
          <p>날짜 선택</p>
        </div>
      </div>
    </>
  );
}
