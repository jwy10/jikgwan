import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../CSS/Member.css';

export default function SignUp(): JSX.Element {
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
          <h2 style={{ fontSize: '28px', marginBottom: '15px' }}>회원가입</h2>
          <div className="noneSignUp">
            <h5 style={{ marginBottom: '15px', marginRight: '5px' }}>
              이미 가입되어 있으신가요?
            </h5>
            <Link to={'/login'}>
              <h5 style={{ color: 'blue' }}> 로그인</h5>
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
          </div>
        </div>
      </div>
    </>
  );
}
