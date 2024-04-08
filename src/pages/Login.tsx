import React, { useState } from 'react';
import '../CSS/Login.css';
import { Link } from 'react-router-dom';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false); // 비밀번호 가시성 상태 추가

  // 비밀번호 보이기/숨기기 토글 함수
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="Login">
        <div className="loginBox">
          <Link to={'/home'}>
            <p style={{ fontSize: '36px', margin: '30px 0px' }}>JikGwan</p>
          </Link>
          <h2 style={{ fontSize: '28px', marginBottom: '15px' }}>로그인</h2>
          <div className="noneSignUp">
            <h5 style={{ marginBottom: '15px', marginRight: '5px' }}>
              계정이 없으신가요?
            </h5>
            <Link to={'/signup'}>
              <h5 style={{ color: 'blue' }}> 회원가입</h5>
            </Link>
          </div>
          <div className="loginInfo">
            <div className="loginEmail">
              <input
                className="loginInput"
                type="email"
                placeholder="email"
                style={{ marginLeft: '10px' }}
              />
              <button className="emailBtn">x</button>
            </div>
            <div className="loginPassword">
              <input
                className="loginInput"
                type={showPassword ? 'text' : 'password'} // 비밀번호 가시성에 따라 type 변경
                placeholder="password"
                style={{ marginLeft: '10px' }}
              />
              <button
                className="passwordBtn"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? 'Hide' : 'Show'} {/* 버튼 텍스트 변경 */}
              </button>
            </div>
            <input
              type="checkbox"
              name="remember"
              id=""
              style={{ width: '30px', height: '30px' }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
