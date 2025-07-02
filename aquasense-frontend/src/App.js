import React from 'react';
import UsageDashboard from './components/UsageDashboard';
import PredictionAlert from './components/PredictionAlert';
import SustainabilityScore from './components/SustainabilityScore';

function App() {
  const mockAlert = "Your water usage is 30% higher than average. Consider reducing bathroom water use.";
  const mockScore = 78;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-center text-indigo-700">💧 AQUASENSE Dashboard</h1>
        <UsageDashboard />
        <PredictionAlert alert={mockAlert} />
        <SustainabilityScore score={mockScore} />
      </div>
    </div>
  );
}

export default App;
