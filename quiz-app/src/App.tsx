import React, {useState} from 'react';
import { QuestionCard } from './components/QuestionCard';
import { fetchQuestions, Difficulty, QuestionState} from './API';

//importing styled components
import { GlobalStyle, Wrapper } from './App.styles'

const TOTAL_QUESTIONS = 10;

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string; 
}

function App() {

  //for loading stage, loading...

  const [loading, setLoading] = useState(false);

  //for question data

  const [questions, setQuestions] = useState<QuestionState[]>([]);

  //for question number

  const [number, setNumber] = useState(0);//as initially 0 question

  //for answer

  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);

  //for score

  const [score, setScore] = useState(0);

  //for app to know whether game is over or not

  const [gameOver, setGameOver] = useState(true)//as for now, game is over, whenuser starts, then gameover changes to false which means game is in progress

  console.log(questions);

  //functions

  const startQuiz = async() => {

    setLoading(true);//initially loading
    setGameOver(false);//as by clicking on the begin quiz, quiz has started 

    const newQuestions = await fetchQuestions(TOTAL_QUESTIONS, Difficulty.EASY);//fetching new questions from the api
    setQuestions(newQuestions);//update questions
    
    setScore(0);//again setscore 0 removing prevously played score
    setUserAnswers([]);//store user answer

    setNumber(0);//again setting number 0 from previeously played quiz
    setLoading(false);//as questions has been fetchd, so setLoading to false

  };
  
  const nextQuestion = async() => {
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS){
      setGameOver(true);
    }
    else{
      setNumber(nextQuestion);
    }
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>)=> {
    if (!gameOver){
      const answer = e.currentTarget.value;

      const correct = questions[number].correct_answer === answer;
      
      if (correct) setScore(prev => prev + 1)

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer
       }

      setUserAnswers(prev => [...prev, answerObject])
    }
  }; 


  return (
    <>
    <GlobalStyle />
    <Wrapper>
      <h1>Quiz App</h1>

      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <button className='start' onClick={startQuiz}>
        Begin Quiz
        </button>) : null}
      
      {!gameOver ? (
      <p className='score'>
        Score: {score}
        </p>): null}

      {loading? (
      <p>
        Loading
        </p>): null}

      {!loading && !gameOver ? (
      <QuestionCard 
        questionNum={number + 1}
        totalQuestions = {TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      />): null}

      {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
      <button className='next' onClick={nextQuestion}>
        Next
      </button>): null}

    </Wrapper>
    </>
  );
}

export default App;
