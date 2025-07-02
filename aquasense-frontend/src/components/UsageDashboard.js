import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UsageDashboard = () => {
  const [usage, setUsage] = useState([]);

 useEffect(() => {
  axios.get('http://localhost:5000/api/usage/user123')
    .then(res => setUsage(res.data))
    .catch(err => console.error(err));
}, []);


  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Water Usage This Week</h2>
      <ul className="space-y-2">
        {usage.map((u, i) => (
          <li key={i} className="flex justify-between">
            <span>{u.date}</span>
            <span className="font-semibold">{u.amount} L</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsageDashboard;
