import React from 'react';

const PredictionAlert = ({ alert }) => {
  if (!alert) return null;

  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-6">
      <strong className="font-bold">⚠ Alert: </strong>
      <span>{alert}</span>
    </div>
  );
};

export default PredictionAlert;
