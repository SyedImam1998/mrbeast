import React, { useState } from 'react';

function Count({ progress,count }) {
  const [strokeDasharray, setStrokeDasharray] = useState(0);
  const circumference = 2 * Math.PI * 100;
  var time=count;
  var p=parseInt((count/30)*100);

  React.useEffect(() => {
    setStrokeDasharray(circumference * (1 - p / 100));
    
  }, [p]);

  return (
    <svg viewBox="0 0 200 200">
      <circle cx="100" cy="100" r="90" fill="transparent" stroke="#ccc" strokeWidth="20" />
      <circle cx="100" cy="100" r="90" fill="transparent" stroke="#4CAF50" strokeWidth="20" 
      strokeDasharray={circumference} strokeDashoffset={strokeDasharray} />
      <text x="100" y="100" textAnchor="middle" alignmentBaseline="middle" fontSize="60" fill="white">{time}</text>
    </svg>
  );
}

export default Count;
