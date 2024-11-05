import React, { useState } from 'react';
import quizQuestions from '../../data/quizQuestions.json';
import './Quiz.css';

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleAnswerSelect = (option) => {
    setSelectedAnswer(option);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === currentQuestion.answer) {
      setScore(score + 1);
    }
    setSelectedAnswer('');
    if (currentQuestionIndex + 1 < quizQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResults(false);
    setSelectedAnswer('');
  };

  return (
    <div className="quiz-container">
      {!showResults ? (
        <div>
          <h2>Birthday Quiz</h2>
          <p>{currentQuestion.question}</p>
          <div className="options">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(option)}
                className={`option-button ${selectedAnswer === option ? 'selected' : ''}`}
              >
                {option}
              </button>
            ))}
          </div>
          <button onClick={handleSubmitAnswer} disabled={!selectedAnswer}>
            Submit Answer
          </button>
        </div>
      ) : (
        <div className="results">
          <h2>Quiz Completed!</h2>
          <p>Your Score: {score} / {quizQuestions.length}</p>
          <button onClick={handleRestartQuiz}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
