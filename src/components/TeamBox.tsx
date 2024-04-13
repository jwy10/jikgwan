// TeamBox.tsx

import React from 'react';
import '../CSS/Components.css';

interface Props {
  teamName: string;
  isSelected: boolean;
  onClick: () => void;
  fieldColor: string;
}

const TeamBox: React.FC<Props> = ({
  teamName,
  isSelected,
  onClick,
  fieldColor,
}) => {
  return (
    <div
      className={`teamBox ${isSelected ? 'selected' : ''}`}
      style={{ backgroundColor: isSelected ? fieldColor : '' }}
      onClick={onClick}
    >
      {teamName}
    </div>
  );
};

export default TeamBox;
