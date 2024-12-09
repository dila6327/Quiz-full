import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Data } from "./data";
import './styles/Quiz.css';

interface Suggestion {
  answer: string;
  checked: boolean;
}

interface QuizData {
  id: number;
  question: string;
  suggestions: Suggestion[];
  clicked: boolean;
}

interface QuizProps {
  correct: number;
  setCorrect: React.Dispatch<React.SetStateAction<number>>;
}

function Quiz({ correct, setCorrect }: QuizProps): JSX.Element {
  const navigate = useNavigate();
  const [data, setData] = useState<QuizData[]>(Data);

  const handleClick = (idd: any, click: boolean) => {
    setData((prevData) =>
      prevData.map((elem) =>
        elem.id === Number(idd) ? { ...elem, clicked: false } : elem
      )
    );

    setData((prevData) =>
      prevData.map((elem) =>
        elem.id === Number(idd) + 1 ? { ...elem, clicked: true } : elem
      )
    );

    if (click) {
      setCorrect((prev) => prev + 1);
    }
    if (idd == 1) {
      setCorrect(0);
    }
    if (idd == 15) {
      navigate('/score');
      localStorage.setItem('data', JSON.stringify(data));
      localStorage.setItem('correct', JSON.stringify(correct));
    }
  };

  return (
    <div>
      {data
        .filter((item) => item.clicked === true)
        .map((item, index) => (
          <div key={item.id + index} className="contain">
            <div className="quest">{item.question}</div>
            <div>
              {item.suggestions.map((suggestion, idx) => (
                <button
                  key={`${item.id}-${idx}`}
                  id={item.id.toString()}
                  onClick={(e) => handleClick((e.target as HTMLButtonElement).id, suggestion.checked)}
                >
                  {suggestion.answer}
                </button>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}

export default Quiz;
