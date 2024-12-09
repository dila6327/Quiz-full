import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Score.css';

interface ScoreProps {
  correct: number;
  setCorrect: React.Dispatch<React.SetStateAction<number>>;
}

const Score: React.FC<ScoreProps> = ({ correct, setCorrect }) => {
  const Manage = () => {
    setCorrect(0);
  };

  return (
    <div className='again-cont'>
      <Link to='/' className='again'>
        <button onClick={Manage}>Play again</button>
      </Link>
      <div className='correct-contain'>
        <div className='result'>
          Your result {correct} out of {JSON.parse(localStorage.getItem('data') || '[]').length}
        </div>
      </div>
    </div>
  );
};

export default Score;
