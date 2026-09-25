import React from 'react';
import { whyChooseUsFeatures } from '../services/mockData';

export default function WhyChooseUs() {
  return (
    <div className="feature-strip">
      {whyChooseUsFeatures.map((feature, index) => (
        <div className="feature" key={index}>
          <div className="icon">{feature.icon}</div>
          <h4>{feature.title}</h4>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
