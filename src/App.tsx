
import { useState } from "react";
import Score from "./components/Score";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [correct,setCorrect]=useState(0);
  const[stepQuestion,setStepQuestion] = useState(0)
  const [data, setData] = useState(
   [
      {
        question: "What is the capital city of Azerbaijan?",
        suggestions: [
          { answer: "A) Baku", checked: true },
          { answer: "B) Paris", checked: false },
          { answer: "C) Moscow", checked: false },
          { answer: "D) Ankara", checked: false }
        ],
        id: 1,
        clicked: true
      },
      {
        question: "Which of the following is the largest ocean on Earth?",
        suggestions: [
          { answer: "A) Atlantic Ocean", checked: false },
          { answer: "B) Indian Ocean", checked: false },
          { answer: "C) Pacific Ocean", checked: true },
          { answer: "D) Arctic Ocean", checked: false }
        ],
        id: 2,
        clicked: false
      },
      {
        question: "Who developed the theory of relativity?",
        suggestions: [
          { answer: "A) Isaac Newton", checked: false },
          { answer: "B) Galileo Galilei", checked: false },
          { answer: "C) Albert Einstein", checked: true },
          { answer: "D) Nikola Tesla", checked: false }
        ],
        id: 3,
        clicked: false
      },
      {
        question: "Which planet is known as the Red Planet?",
        suggestions: [
          { answer: "A) Mars", checked: true },
          { answer: "B) Jupiter", checked: false },
          { answer: "C) Saturn", checked: false },
          { answer: "D) Venus", checked: false }
        ],
        id: 4,
        clicked: false
      },
      {
        question: "What is the largest mammal on Earth?",
        suggestions: [
          { answer: "A) Elephant", checked: false },
          { answer: "B) Blue Whale", checked: true },
          { answer: "C) Giraffe", checked: false },
          { answer: "D) Hippopotamus", checked: false }
        ],
        id: 5,
        clicked: false
      },
      {
        question: "What is the chemical symbol for water?",
        suggestions: [
          { answer: "A) H2O", checked: true },
          { answer: "B) O2", checked: false },
          { answer: "C) CO2", checked: false },
          { answer: "D) H2", checked: false }
        ],
        id: 6,
        clicked: false
      },
      {
        question: "Who wrote 'Romeo and Juliet'?",
        suggestions: [
          { answer: "A) William Shakespeare", checked: true },
          { answer: "B) Charles Dickens", checked: false },
          { answer: "C) Jane Austen", checked: false },
          { answer: "D) Leo Tolstoy", checked: false }
        ],
        id: 7,
        clicked: false
      },
      {
        question: "What is the smallest prime number?",
        suggestions: [
          { answer: "A) 0", checked: false },
          { answer: "B) 1", checked: false },
          { answer: "C) 2", checked: true },
          { answer: "D) 3", checked: false }
        ],
        id: 8,
        clicked: false
      },
      {
        question: "Which country is known as the Land of the Rising Sun?",
        suggestions: [
          { answer: "A) China", checked: false },
          { answer: "B) Japan", checked: true },
          { answer: "C) South Korea", checked: false },
          { answer: "D) Thailand", checked: false }
        ],
        id: 9,
        clicked: false
      },
      {
        question: "What is the main ingredient in guacamole?",
        suggestions: [
          { answer: "A) Avocado", checked: true },
          { answer: "B) Tomato", checked: false },
          { answer: "C) Onion", checked: false },
          { answer: "D) Garlic", checked: false }
        ],
        id: 10,
        clicked: false
      },
      {
        question: "Which gas do plants primarily use for photosynthesis?",
        suggestions: [
          { answer: "A) Oxygen", checked: false },
          { answer: "B) Carbon Dioxide", checked: true },
          { answer: "C) Nitrogen", checked: false },
          { answer: "D) Hydrogen", checked: false }
        ],
        id: 11,
        clicked: false
      },
      {
        question: "Which continent is the Sahara Desert located on?",
        suggestions: [
          { answer: "A) Asia", checked: false },
          { answer: "B) Africa", checked: true },
          { answer: "C) Australia", checked: false },
          { answer: "D) Europe", checked: false }
        ],
        id: 12,
        clicked: false
      },
      {
        question: "What is the primary language spoken in Brazil?",
        suggestions: [
          { answer: "A) Spanish", checked: false },
          { answer: "B) English", checked: false },
          { answer: "C) Portuguese", checked: true },
          { answer: "D) French", checked: false }
        ],
        id: 13,
        clicked: false
      },
      {
        question: "What is the boiling point of water at sea level?",
        suggestions: [
          { answer: "A) 90°C", checked: false },
          { answer: "B) 100°C", checked: true },
          { answer: "C) 110°C", checked: false },
          { answer: "D) 120°C", checked: false }
        ],
        id: 14,
        clicked: false
      },
      {
        question: "Who painted the Mona Lisa?",
        suggestions: [
          { answer: "A) Vincent van Gogh", checked: false },
          { answer: "B) Pablo Picasso", checked: false },
          { answer: "C) Leonardo da Vinci", checked: true },
          { answer: "D) Michelangelo", checked: false }
        ],
        id: 15,
        clicked: false
      }
    ]
  );

  const handleClick = (idd:any,click:any) => {
    setData((prevData) =>
      prevData.map((elem) =>
        elem.id === Number(idd)
          ? { ...elem, clicked: false } 
          : elem
      )
    );

    setData((prevData) =>
      prevData.map((elem) =>
        elem.id === Number(idd)+1
          ? { ...elem, clicked: true} 
          : elem
      )
    );
    setStepQuestion(prev=>prev+1)
    if(click)
    {
      setCorrect((prev)=>prev+1)
      console.log('correct',correct)
      console.log('check',click)
     if(idd==15){
       <Score/>
     }
      if(idd==15)
      {
        alert(correct)
      }
    }
   
  };

  return (
    <div>

      {data[stepQuestion]}
      {data
        .filter((item) => item.clicked === true)
        .map((item, index) => (
          <div key={item.id + index}>
            <div>{item.question}</div>
            <div>
              {item.suggestions.map((suggestion, idx) => (
                <button
                  key={`${item.id}-${idx}`} 
                  id={item.id.toString()}
                  
                  onClick={(e) => handleClick(e.target.id,suggestion.checked)}
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

export default App;
