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
  const [selectedTeamIndex, setSelectedTeamIndex] = useState<number>(0);
  const [matches, setMatches] = useState<Match[]>([]);
  const [clickedMatchIndex, setClickedMatchIndex] = useState<number>(-1);
  const [placeholder, setPlaceholder] =
    useState<string>('원하는 팀을 입력해주세요.');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 391) {
        setPlaceholder('팀 검색');
      } else {
        setPlaceholder('원하는 팀을 입력해주세요.');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMatchBox = () => {
    setShowMatchBox(!showMatchBox);
    setShowSearchBox(!showSearchBox);
  };

  const toggleSelection = (teamName: string, index: number) => {
    setSelectedTeamIndex(index);
  };

  const fetchData = async () => {
    try {
      const response = await axios.post('http://localhost:8000/plData', {
        teamName: teamNames[selectedTeamIndex].sendData,
      });
      setMatches(response.data);
    } catch (error) {
      console.error('데이터를 불러오는 중 에러 발생:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedTeamIndex, teamNames]);

  const handleLinkButtonClick = (index: number) => {
    setClickedMatchIndex(index === clickedMatchIndex ? -1 : index);
  };

  return (
    <>
      <div className="fieldBox">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: fieldColor,
            borderRadius: '10px 10px 0px 0px',
          }}
        >
          <h2 style={{ margin: '15px', fontSize: '24px', color: 'white' }}>
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
                placeholder={placeholder}
                className="teamInput"
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
