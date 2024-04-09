import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../CSS/Member.css';

export default function FindPassword(): JSX.Element {
  // const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [clicked, setClicked] = useState<boolean>(false);

  // const togglePasswordVisibility = (): void => {
  //   setShowPassword(!showPassword);
  // };

  const hide: string = '/hide.png';
  const show: string = '/show.png';

  const handleEmailClear = (): void => {
    setEmail('');
  };

  const handleClick = (): void => {
    setClicked(true);
  };

  return (
    <>
      <div className="Login">
        <div className="findPasswordBox">
          <Link to={'/home'}>
            <p style={{ fontSize: '36px', margin: '30px 0px' }}>JikGwan</p>
          </Link>
          <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>
            비밀번호를 잊으셨습니까?
          </h2>
          <div className="noneSignUp">
            <div className="pwNotice">
              <h5 style={{ marginRight: '5px' }}>
                귀하의 계정과 연결된 이메일 주소를 입력하시면
              </h5>
              <h5 style={{ marginBottom: '20px', marginRight: '5px' }}>
                비밀번호를 재설정할 수 있는 링크를 보내드립니다.
              </h5>
            </div>
          </div>
          <div className="findInfo">
            <div className="findEmail">
              <input
                className="findInput"
                type="email"
                placeholder="이메일"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ marginLeft: '10px' }}
              />
              <button className="emailBtn" onClick={handleEmailClear}>
                <p style={{ fontSize: '20px' }}>x</p>
              </button>
            </div>
            <button
              className="sendEmailBtn"
              onClick={handleClick}
              style={{
                backgroundColor: clicked ? 'gray' : 'rgb(0, 132, 255)',
                color: 'white',
              }}
            >
              이메일 보내기
            </button>
          </div>
          <Link to={'/login'}>
            <h5 style={{ color: 'blue', marginBottom: '30px' }}>
              {' '}
              로그인으로 돌아가기
            </h5>
          </Link>
        </div>
      </div>
    </>
  );
}
