import React from 'react';

export function convertEnglishToKorean(english: string): string {
  const Map: { [key: string]: string } = {
    Jan: '1월',
    Feb: '2월',
    Mar: '3월',
    Apr: '4월',
    May: '5월',
    Jun: '6월',
    Jul: '7월',
    Aug: '8월',
    Sep: '9월',
    Oct: '10월',
    Nov: '11월',
    Dec: '12월',

    ' v ': 'vs',
    //프리미어리그
    Liverpool: '리버풀',
    'Manchester United': '맨체스터 유나이티드',
    'Tottenham Hotspur': '토트넘',
    Arsenal: '아스날',
    Chelsea: '첼시',
    Everton: '에버튼',
    'Aston Villa': '아스톤빌라',
    'Nottingham Forest': '노팅엄',
    'Brighton & Hove Albion': '브라이튼',
    Fulham: '풀럼',
    'West Ham United': '웨스트햄',
    'Manchester City': '맨시티',
    'Wolverhampton Wanderers': '울버햄튼',
    'Luton Town': '루턴 타운',
    Bournemouth: '본머스',
    'Newcastle United': '뉴캐슬',
    'Sheffield United': '셰필드',
    Brentford: '브렌트퍼드',
    'Crystal Palace': '크리스탈 팰리스',
    Burnley: '번리',

    // 타리그
    'Coventry City': '코벤트리 시티',
    Atalanta: '아탈란타',
    Lille: '릴',
    'Bayern Munich': '바이에른 뮌헨',
    'Bayer Leverkusen': '레버쿠젠',
    'Real Madrid': '레알 마드리드',
    'FC Barcelona': '바르셀로나',
    'Paris Saint-Germain': '파리 생제르망',
    'Borussia Dortmund  ': '도르트문트',
    'Atletico Madrid': '아틀레티코 마드리드',
    'Olympique De Marseille': '마르세유',
    Benfica: '벤피카',
    'AS Roma': 'AS 로마',
    'AC Milan': 'AC 밀란',
    Fiorentina: '피오렌티나',
    'Viktoria Plzen': '빅토리아 플젠',
  };

  return Map[english];
}
