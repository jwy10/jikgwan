import React, { useState, ChangeEvent } from 'react';

const currentDate = new Date().toISOString().split('T')[0]; // 오늘 날짜를 YYYY-MM-DD 형식으로 가져옵니다.

const DateSearch: React.FC = () => {
  const [startDate, setStartDate] = useState(currentDate);
  const [endDate, setEndDate] = useState(currentDate);

  const handleStartDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedStartDate = event.target.value;
    if (selectedStartDate <= endDate) {
      setStartDate(selectedStartDate);
    }
  };

  const handleEndDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedEndDate = event.target.value;
    if (selectedEndDate >= startDate) {
      setEndDate(selectedEndDate);
    }
  };

  return (
    <div className="dateSearch">
      <input
        type="date"
        name="startDate"
        value={startDate}
        onChange={handleStartDateChange}
        style={{
          fontSize: '18px',
          height: '30px',
          justifyContent: 'center',
          textAlign: 'start',
          borderStyle: 'none',
          marginLeft: '3px',
          margin: '0px 5px',
          appearance: 'none',
        }}
      />
      |
      <input
        type="date"
        name="endDate"
        value={endDate}
        onChange={handleEndDateChange}
        style={{
          fontSize: '18px',
          height: '30px',
          justifyContent: 'center',
          textAlign: 'start',
          borderStyle: 'none',
          marginLeft: '3px',
          margin: '0px 5px',
        }}
      />
    </div>
  );
};

export default DateSearch;
