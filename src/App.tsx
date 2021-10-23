import React, { useEffect, useState } from 'react';
import { ProgressBar } from './ProgressBar';

const App: React.FC = () => {
  const [completed, setCompleted] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      fetch('https://uragen.000webhostapp.com/reacttest/test')
      .then(response => response.json())
      .then(data => setCompleted(data.stopValue))
    }, 1000);
  }, []);

  /* fetch('data/progressData.json')
  .then(response => response.json())
  .then(data => console.log(data)); */


  return (
    <div>
      <ProgressBar topImg='#6a1b9a' barImg='#e0e0de' stopValue={completed} processingTime='2' />
    </div>
  )
}

export default App;
