import React from 'react';
import '../CSS/Login.css';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <>
      <div className="Login">
        <div className="loginBox">
          <Link to={'/home'}>
            <p style={{ fontSize: '36px', margin: '30px 0px' }}>JikGwan</p>
          </Link>
          <h2 style={{ fontSize: '28px', marginBottom: '15px' }}>회원가입</h2>
          <div className="noneSignUp">
            <h6 style={{ marginBottom: '15px' }}>이미 계정이 있으신가요?</h6>
            <Link to={'/login'}>
              <h6 style={{ color: 'blue' }}>로그인</h6>
            </Link>
          </div>
          <div className="loginInfo">
            <div className="loginEmail">
              <input
                className="loginInput"
                type="text"
                placeholder="email"
                style={{ marginLeft: '10px' }}
              />
              <button className="emailBtn">x</button>
            </div>
            <div className="loginPassword">
              <input
                className="loginInput"
                type="text"
                placeholder="password"
                style={{ marginLeft: '10px' }}
              />
              <button className="passwordBtn">x</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
