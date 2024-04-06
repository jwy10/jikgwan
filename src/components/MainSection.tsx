import React, { useState, useEffect } from 'react';
import '../CSS/Components.css';
import TeamBox from './TeamBox';
import DateSearch from './DateSearch';
import axios from 'axios';

interface Props {
  field: string;
  teamNames: string[];
}
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
  const getHTML = async (keyword: string) => {
    try {
      return await axios.get(
        'https://www.stubhub.ie/premier-league-tickets/grouping/154987/'
      );
    } catch (err) {
      console.log(err);
    }
  };

  const parsing = async (keyword: string) => {
    const html = await getHTML(keyword);
    console.log(html);
    // const $ = cheerio.load(html?.data as string);
    // const $matchList = $('.Panel Panel-Border EventItem');
    // let matchInfo: { date: string; title: string; link: string }[] = [];
    // $matchList.each((idx: number, node: cheerio.Element) => {
    //   const title = $(node).find('.EventItem__Title > a > div').text();
    //   matchInfo.push({
    //     date: $(node).find('.EventItem__Title > a > div').text(),
    //     title: $(node).find('.DateStamp__MonthDateYear > span').text(),
    //     link: $(node).find('.EventItem__Title > a').attr('href') || '', // href가 없을 경우 빈 문자열 반환
    //   });
    // });
    // console.log(matchInfo);
  };

  parsing('Liverpool FC');

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
