// TeamBox.tsx

import React from 'react';
import '../CSS/Components.css';

interface Props {
  teamName: string;
  isSelected: boolean;
  onClick: () => void;
}

const TeamBox: React.FC<Props> = ({ teamName, isSelected, onClick }) => {
  return (
    <div
      className={`teamBox ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      {teamName}
    </div>
  );
};

export default TeamBox;
