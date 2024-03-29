import React from 'react';
import '../CSS/App.css';

interface Props {
  domColor: string;
  overColor: string;
}

export default function Header({ domColor, overColor }: Props) {
  return (
    <>
      <div className="header">
        <div className="headerMenu">
          <p style={{ fontSize: '40px' }}>JikGwan</p>
          <h3 style={{ color: domColor }}>국내</h3>
          <h3 style={{ color: overColor }}>해외</h3>
        </div>
        <div className="headerInfo">
          <div className="userConnect">
            <h3 style={{ marginRight: '6px' }}>로그인</h3>
            <h3>회원가입</h3>
          </div>
          <div className="mypageSec">
            <div className="myImg"></div>
            <p style={{ fontSize: '20px' }}>마이페이지</p>
          </div>
        </div>
      </div>
      <style>
        {`
          .myImg {
            width: 30px;
            height: 30px;
            background-image: url('myimg.png');
            background-size: cover;
          }
        `}
      </style>
    </>
  );
}
