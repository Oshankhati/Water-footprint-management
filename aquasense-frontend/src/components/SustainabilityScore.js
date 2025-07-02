import React from 'react';

const SustainabilityScore = ({ score }) => {
  return (
    <div className="bg-green-100 p-4 rounded-xl mt-6">
      <h3 className="text-lg font-bold">🌱 Sustainability Score</h3>
      <p className="text-3xl font-extrabold">{score}/100</p>
      <p className="text-sm text-gray-600">Keep conserving water to boost your score!</p>
    </div>
  );
};

export default SustainabilityScore;
