import React from 'react';
import { statisticsData } from '../services/mockData';

export default function Statistics() {
  return (
    <div className="stats">
      {statisticsData.map((stat, index) => (
        <div className="stat" key={index}>
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
