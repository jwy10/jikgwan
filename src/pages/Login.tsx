import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../CSS/Member.css';

export default function Login(): JSX.Element {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [clicked, setClicked] = useState<boolean>(false); // 클릭 상태를 추적하는 상태 추가

  const togglePasswordVisibility = (): void => {
    setShowPassword(!showPassword);
  };

  const hide: string = '/hide.png';
  const show: string = '/show.png';

  const handleEmailClear = (): void => {
    setEmail('');
  };

  const handleClick = (): void => {
    setClicked(true); // 클릭되었음을 표시
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ marginLeft: '10px' }}
              />
              <button className="emailBtn" onClick={handleEmailClear}>
                <p style={{ fontSize: '20px' }}>x</p>
              </button>
            </div>
            <div className="loginPassword">
              <input
                className="loginInput"
                type={showPassword ? 'text' : 'password'}
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ marginLeft: '10px' }}
              />
              <button
                className="passwordBtn"
                onClick={togglePasswordVisibility}
              >
                <img
                  src={showPassword ? hide : show}
                  alt="password visibility"
                  style={{ width: '20px', height: '20px' }}
                />
              </button>
            </div>
            <div className="rememberId">
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <input
                  type="checkbox"
                  name="remember"
                  id=""
                  style={{ width: '20px', height: '20px', marginRight: '10px' }}
                />
                <p style={{ fontSize: '14px' }}>자동 로그인 저장</p>
              </div>
              <Link to={'/findPassword'}>
                {' '}
                <p
                  style={{
                    color: 'blue',
                    fontSize: '14px',
                    fontWeight: 'bold',
                  }}
                >
                  비밀번호 찾기
                </p>
              </Link>
            </div>

            <button
              className="loginBtn"
              onClick={handleClick}
              style={{
                backgroundColor: clicked ? 'gray' : 'rgb(0, 132, 255)',
                color: 'white',
              }}
            >
              로그인
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
