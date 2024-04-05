import React, { useState, useEffect } from 'react';
import '../CSS/Components.css';
import TeamBox from './TeamBox';
import DateSearch from './DateSearch';
import { data } from 'cheerio/lib/api/attributes';

interface Props {
  field: string;
  teamNames: string[];
}

const axios = require('axios');
const cheerio = require('cheerio');

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

  const [parsedData, setParsedData] = useState<string[]>([]);

  useEffect(() => {
    fetchDataAndParse();
  }, []);

  const fetchDataAndParse = async () => {
    try {
      const response = await axios.get(
        'https://www.stubhub.ie/premier-league-tickets/grouping/154987/'
      );
      const html = response.data;
      const $ = cheerio.load(html);

      // Cheerio를 사용하여 데이터를 파싱하고 배열에 저장
      const parsedResults: string[] = [];
      $('.EventItem__Title').each((index: number, element: Element) => {
        parsedResults.push($(element).text());
      });

      // 파싱된 데이터를 React 상태에 저장
      setParsedData(parsedResults);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

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
            {parsedData.map((item, index) => (
              <div className="matchBox" key={index}>
                <p>날짜</p>
                <p>{item}</p> {/* parsedData를 표시 */}
                <p>구매</p>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
}
