import React from 'react';
import '../CSS/App.css';
import { Link } from 'react-router-dom';

interface Props {
  domColor: string;
  overColor: string;
}

export default function Header({ domColor, overColor }: Props) {
  return (
    <>
      <div className="header">
        <div className="headerMenu">
          <p style={{ fontSize: '40px', marginRight: '5px' }}>JikGwan</p>
          <h3 style={{ color: domColor, marginRight: '5px' }}>
            <Link to={'/domestic'}>국내</Link>
          </h3>
          <h3 style={{ color: overColor, marginRight: '5px' }}>
            <Link to={'/overseas'}>해외</Link>
          </h3>
        </div>
        <div className="headerInfo">
          <div className="userConnect">
            <h4 style={{ marginRight: '6px' }}>로그인</h4>
            <h4>회원가입</h4>
          </div>
          <div className="mypageSec">
            <div className="myImg"></div>
            <p style={{ fontSize: '16px', margin: '5px 10px' }}>마이페이지</p>
          </div>
        </div>
      </div>
      <hr />
      <style>
        {`
          .myImg {
            width: 40px;
            height: 40px;
            background-image: url('myimg.png');
            background-size: cover;
          }
        `}
      </style>
    </>
  );
}
