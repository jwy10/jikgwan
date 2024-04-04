import React, { useState } from 'react';
import '../CSS/Components.css';
import TeamBox from './TeamBox';
import DateSearch from './DateSearch';

interface Props {
  field: string;
  teamNames: string[];
}

export default function MainSection({ field, teamNames }: Props) {
  const [showMatchBox, setShowMatchBox] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(true);
  const [selectedTeams, setSelectedTeams] = useState<string[]>([]);
  const toggleMatchBox = () => {
    setShowMatchBox(!showMatchBox);
    setShowSearchBox(!showSearchBox);
  };

  const toggleSelection = (teamName: string) => {
    if (selectedTeams.includes(teamName)) {
      setSelectedTeams(selectedTeams.filter((name) => name !== teamName));
    } else {
      setSelectedTeams([...selectedTeams, teamName]);
    }
  };

  const currentDate = new Date().toISOString().split('T')[0];

  return (
    <>
      <div className="fieldBox">
        <div className="fieldBoxHeader">
          <h2 style={{ margin: '5px', fontSize: '28px' }}> {field} </h2>
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
              {teamNames.map((teamName, index) => (
                <TeamBox
                  key={index}
                  teamName={teamName}
                  isSelected={selectedTeams.includes(teamName)}
                  onClick={() => toggleSelection(teamName)}
                />
              ))}
            </div>
            <div className="matchBox">
              <p>날짜</p>
              <p>해당 경기</p>
              <p>구매</p>
            </div>
            <div className="matchBox">
              <p>날짜</p>
              <p>해당 경기</p>
              <p>구매</p>
            </div>
            <div className="matchBox">
              <p>날짜</p>
              <p>해당 경기</p>
              <p>구매</p>
            </div>
          </>
        )}
      </div>
    </>
  );
}
