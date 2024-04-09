import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../CSS/Member.css';
import { text } from 'stream/consumers';

export default function SignUp(): JSX.Element {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [clicked, setClicked] = useState<boolean>(false); // 클릭 상태를 추적하는 상태 추가
  const togglePasswordVisibility = (): void => {
    setShowPassword(!showPassword);
  };

  const hide: string = '/hide.png';
  const show: string = '/show.png';

  const handleClearFirstName = (): void => {
    setFirstName('');
  };

  const handleClearLastName = (): void => {
    setLastName('');
  };

  const handleClearEmail = (): void => {
    setEmail('');
  };

  const handleClearPassword = (): void => {
    setPassword('');
  };

  const handleClearPhoneNumber = (): void => {
    setPhoneNumber('');
  };

  const formatPhoneNumber = (input: string): string => {
    const cleaned = ('' + input).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{0,3})(\d{0,4})(\d{0,4})$/);
    if (match) {
      return (
        match[1] +
        (match[2] ? '-' + match[2] : '') +
        (match[3] ? '-' + match[3] : '')
      );
    }
    return input;
  };

  const handleClick = (): void => {
    setClicked(true);
  };

  const handlePhoneNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhoneNumber(formatted);
  };

  return (
    <>
      <div className="Login">
        <div className="signupBox">
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
          <div className="signUpInfo">
            <div className="nameSec">
              <div className="firstName">
                <input
                  className="firstNameInput"
                  type="text"
                  placeholder="성"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  style={{ marginLeft: '10px' }}
                />
                <button className="fnameBtn" onClick={handleClearFirstName}>
                  <p style={{ fontSize: '20px' }}>x</p>
                </button>
              </div>
              <div className="lastName">
                <input
                  className="lastNameInput"
                  type="text"
                  placeholder="이름"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  style={{ marginLeft: '10px' }}
                />
                <button className="emailBtn" onClick={handleClearLastName}>
                  <p style={{ fontSize: '20px' }}>x</p>
                </button>
              </div>
            </div>

            <div className="loginEmail">
              <input
                className="loginInput"
                type="email"
                placeholder="이메일"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ marginLeft: '10px' }}
              />
              <button className="emailBtn" onClick={handleClearEmail}>
                <p style={{ fontSize: '20px' }}>x</p>
              </button>
            </div>
            <div className="loginPassword">
              <input
                className="loginInput"
                type={showPassword ? 'text' : 'password'}
                placeholder="비밀번호"
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
            <div className="signUpNumber">
              <input
                className="numberInput"
                type="text"
                placeholder="전화번호"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                style={{ marginLeft: '10px' }}
              />
              <button className="numBtn" onClick={handleClearPhoneNumber}>
                <p style={{ fontSize: '20px' }}>x</p>
              </button>
            </div>
            <button
              className="signUpBtn"
              onClick={handleClick}
              style={{
                backgroundColor: clicked ? 'gray' : 'rgb(0, 132, 255)',
                color: 'white',
              }}
            >
              회원가입
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
