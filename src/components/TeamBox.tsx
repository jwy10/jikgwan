import React from 'react';
import '../CSS/Components.css';

interface Props {
  teamName: string;
}

export default function TeamBox({ teamName }: Props) {
  return (
    <>
      <div className="teamBox">{teamName}</div>
    </>
  );
}
