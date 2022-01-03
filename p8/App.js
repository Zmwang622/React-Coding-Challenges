import React, { useState } from "react";

const QUESTIONS = [
  {
    question: "What is 2*(4+4)?",
    answers: ["2", "4", "8", "16"],
    correct: 3
  },
  {
    question: "What is 9*9?",
    answers: ["18", "81", "80", "79"],
    correct: 1
  },
  {
    question: "Who was the first president of the United States?",
    answers: [
      "George Washington",
      "John Adams",
      "John Quincy Adams",
      "Thomas Jefferson"
    ],
    correct: 0
  },
  {
    question: "What state is Philadelphia in?",
    answers: [
      "Commonwealth of Pennsylvania",
      "New Jersey",
      "New York",
      "Massachusetts"
    ],
    correct: 0
  },
  {
    question: "What are the two major political parties in the United States?",
    answers: [
      "Democratic Party & Republican Party",
      "Green Party & Red Party",
      "Bull Party & Moose Party",
      "Hamilton Party & Burr Party"
    ],
    correct: 0
  }
];

function App() {
  return <Quiz questions={QUESTIONS} />;
}

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [finishedQuiz, setFinishedQuiz] = useState(false);
  const numQuestions = questions.length;
  const handleAnswer = (e) => {
    let cq = questions[currentQuestion];
    if (e.target.firstChild.data === cq.answers[cq.correct]) {
      setTotalCorrect(totalCorrect + 1);
    }
    if (currentQuestion + 1 < numQuestions) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinishedQuiz(true);
    }
  };
  return (
    <>
      {!finishedQuiz &&
        questions.map((question, i) => {
          return (
            i === currentQuestion && (
              <div>
                <h2>{question.question}</h2>
                {question.answers.map((ans) => {
                  return <p onClick={handleAnswer}>{ans}</p>;
                })}
              </div>
            )
          );
        })}
      {finishedQuiz && (
        <>
          <h2>Your Score</h2>
          <p> {`${(totalCorrect / numQuestions) * 100}%`} </p>
        </>
      )}
    </>
  );
};

export default App;
