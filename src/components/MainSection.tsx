import React, { useState, useEffect } from 'react';
import '../CSS/Components.css';
import TeamBox from './TeamBox';
import DateSearch from './DateSearch';
import axios from 'axios';

interface Props {
  field: string;
  teamNames: { appearData: string; sendData: string }[];
}

interface Match {
  month: string;
  day: string;
  title: string;
  link: string;
}

export default function MainSection({ field, teamNames }: Props) {
  const [showMatchBox, setShowMatchBox] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(true);
  const [selectedTeam, setSelectedTeam] = useState<string>('');
  const [selectedTeamIndex, setSelectedTeamIndex] = useState<number>(-1); // Add state to keep track of selected team index

  const toggleMatchBox = () => {
    setShowMatchBox(!showMatchBox);
    setShowSearchBox(!showSearchBox);
  };

  const toggleSelection = (teamName: string, index: number) => {
    // Modify toggleSelection to receive the index
    setSelectedTeam(teamName);
    setSelectedTeamIndex(index); // Update selected team index
  };

  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:8000/matches', {
          teamName: selectedTeam,
        });
        setMatches(response.data);
      } catch (error) {
        console.error('데이터를 불러오는 중 에러 발생:', error);
      }
    };

    if (selectedTeam) {
      fetchData();
    }
  }, [selectedTeam]);

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
              {teamNames.map((team, index) => (
                <TeamBox
                  key={index}
                  teamName={team.appearData}
                  isSelected={selectedTeamIndex === index} // Check if the index matches selectedTeamIndex
                  onClick={() => toggleSelection(team.sendData, index)} // Pass the index to toggleSelection
                />
              ))}
            </div>

            {matches.map((match, index) => (
              <div className="matchBox" key={index}>
                <p>
                  {match.month} {match.day}
                </p>
                <p>{match.title}</p>
                <p>
                  <a href={match.link}>구매</a>
                </p>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
}
