// MainSection 컴포넌트

import React, { useState, useEffect } from 'react';
import '../CSS/Components.css';
import TeamBox from './TeamBox';
import DateSearch from './DateSearch';
import axios from 'axios';
import { convertEnglishToKorean } from './convertEnglishToKorean';

interface Props {
  field: string;
  teamNames: { appearData: string; sendData: string }[];
  fieldColor: string;
}

interface Match {
  month: string;
  day: string;
  title: string;
  time: string;
  link: string;
}

export default function MainSection({ field, teamNames, fieldColor }: Props) {
  const [showMatchBox, setShowMatchBox] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(true);
  const [selectedTeamIndex, setSelectedTeamIndex] = useState<number>(0); // 초기 선택된 팀의 인덱스를 0으로 설정

  const toggleMatchBox = () => {
    setShowMatchBox(!showMatchBox);
    setShowSearchBox(!showSearchBox);
  };

  const toggleSelection = (teamName: string, index: number) => {
    setSelectedTeamIndex(index); // 팀을 선택할 때마다 선택된 팀의 인덱스 업데이트
  };

  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:8000/plData', {
          teamName: teamNames[selectedTeamIndex].sendData, // 선택된 팀의 sendData 사용
        });
        setMatches(response.data);
      } catch (error) {
        console.error('데이터를 불러오는 중 에러 발생:', error);
      }
    };

    fetchData(); // 컴포넌트가 마운트될 때 초기 데이터 가져오기
  }, [selectedTeamIndex, teamNames]);

  const [clickedMatchIndex, setClickedMatchIndex] = useState<number>(-1);

  const handleLinkButtonClick = (index: number) => {
    setClickedMatchIndex(index === clickedMatchIndex ? -1 : index);
  };

  return (
    <>
      <div
        style={{
          margin: '20px 16%',
          border: 'solid 1px',
          borderRadius: '10px',
          backgroundColor: fieldColor,
        }}
      >
        <div className="fieldBoxHeader">
          <h2 style={{ margin: '5px', fontSize: '28px', color: 'white' }}>
            {' '}
            {field}{' '}
          </h2>
          <button onClick={toggleMatchBox} className="toggleBtn">
            {showMatchBox ? '▲' : '▼'}
          </button>
        </div>

        {showSearchBox && (
          <div className="matchSearch">
            <div className="teamSearch">
              <div className="soccerIcon">
                <img
                  src="/soccerball.png"
                  alt=""
                  style={{ width: '30px', height: '30px' }}
                />
              </div>
              <input
                type="text"
                placeholder="원하는 팀을 입력해주세요."
                style={{
                  fontSize: '18px',
                  height: '30px',
                  justifyContent: 'center',
                  textAlign: 'start',
                  borderStyle: 'none',
                  marginLeft: '3px',
                }}
              />
            </div>
            <DateSearch />
            <button type="button" className="searchBtn">
              <img
                src="/search.png"
                alt=""
                style={{ width: '30px', height: '30px' }}
              />
            </button>
          </div>
        )}

        {showMatchBox && (
          <>
            <div className="teamList">
              {teamNames.map((team, index) => (
                <TeamBox
                  key={index}
                  teamName={team.appearData}
                  isSelected={selectedTeamIndex === index}
                  onClick={() => toggleSelection(team.sendData, index)}
                  fieldColor={fieldColor}
                />
              ))}
            </div>

            {matches.map((match, index) => (
              <div className="matchBox" key={index}>
                <div
                  style={{
                    backgroundColor: fieldColor,
                    fontSize: '16px',
                    borderRadius: '5px 5px 0px 0px',
                    color: 'white',
                  }}
                >
                  <p style={{ margin: '10px 25px' }}>
                    {convertEnglishToKorean(match.month)} {match.day}일
                  </p>
                </div>
                <div className="matchInfo">
                  <p style={{ marginLeft: '18px' }}>{match.time}</p>
                  <p
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <p
                      style={{
                        color: 'red',
                        marginRight: '5px',
                        fontWeight: 'bold',
                        fontSize: '12px',
                      }}
                    >
                      H
                    </p>
                    {match.title.split(' v ')[0] && (
                      <p style={{ marginRight: '10px', fontSize: '16px' }}>
                        {convertEnglishToKorean(
                          match.title.split(' v ')[0].trim()
                        )}
                      </p>
                    )}
                    vs
                    {match.title.split(' v ')[1] && (
                      <p style={{ marginLeft: '10px', fontSize: '16px' }}>
                        {convertEnglishToKorean(
                          match.title.split(' v ')[1].trim()
                        )}
                      </p>
                    )}
                  </p>
                  <a
                    className={`linkBtn ${
                      clickedMatchIndex === index ? 'clicked' : ''
                    }`}
                    href={match.link}
                    onClick={() => handleLinkButtonClick(index)}
                  >
                    예매
                  </a>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
}
