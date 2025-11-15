import { useEffect, useState } from "react";
import enums from "../../../../../enums/index";
import { Options, QuizStyles, Option, Filter } from "./styles";
import quizMock from "./mock";
import Timer from "./Timer";
import DEFAULT_IMAGE from "../../../../../assets/nature.png";

export default function Quiz() {
  const TIME_TO_NEXT_QUESTION = 1500;
  const TIME_TO_ANSWER = 3; // todo roque 30
  const WRONG_FEEDBACK = "❌ Resposta incorreta!";
  const CORRECT_FEEDBACK = "🎉 Parabéns! Resposta correta!";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [imageStr, setImageStr] = useState();
  const [timeout, setTimeout] = useState(false);

  const [quizData, setQuizData] = useState(quizMock);

  const currentQuestion = quizData.questions[currentIndex];
  const isLastQuestion = currentIndex === quizData.questions.length - 1;

  function choiceImage() {
    // todo handle image per type
    setImageStr(DEFAULT_IMAGE);
  }

  function getNextQuestion() {
      setTimeout(() => {
      setSelected(null);
      setFeedback("");
      if (!isLastQuestion) {
        setCurrentIndex(currentIndex + 1);
      }
    }, TIME_TO_NEXT_QUESTION);
  }

  function handleAnswer(option) {
    if (selected !== null) return; // evita clicar duas vezes

    setSelected(option);

    if (option.isCorrect) {
      setCorrectCount(correctCount + 1);
      setFeedback(CORRECT_FEEDBACK);
    } else {
      setFeedback(WRONG_FEEDBACK);
    }

    getNextQuestion();
  }

  function handleOptionClass() {
    if (!select) return "";
    if (option.isCorrect) return "correct-highlighting";
    if (option == selected) return "wrong-highlighting";
  }

  useEffect(() => {
      choiceImage();
    }, [])

  useEffect(() => {
    if (timeout) {
      setSelected(-1);
      setFeedback(WRONG_FEEDBACK);
      setTimeout(false);
      getNextQuestion();
    }
  }, [timeout])
  
  function renderSC() {
    if (!currentQuestion) {
    return (
      <QuizStyles>
        <h2 style={{ color: enums.COLORS.PRIMARY_TEXT }}>Fim do Quiz!</h2>
        <p style={{ color: enums.COLORS.PRIMARY_TEXT }}>
          Você acertou {correctCount} de {quizData.questions.length} perguntas.
        </p>
      </QuizStyles>
    );
    }

    return (
      <QuizStyles>
        <div className="title">
          <h2>{quizData.type}</h2>
          <Timer triggerTimeout={() => setTimeout(true)} startTime={TIME_TO_ANSWER} />
        </div>
        <img src={imageStr} alt="type_img" />
        <Options>
          <p>{currentQuestion.title}</p>
          {currentQuestion.questions.map((option, i) => {
            return(
            <Option
              key={i}
              onClick={() => handleAnswer(option)}
              disabled={selected !== null}
            >
              {option.text}
            </Option>)
          })}
        </Options>

        {feedback && (
          <div className="feedback">
            <strong>{feedback}</strong>
          </div>
        )}

        <div className="progress">
          Pergunta {currentIndex + 1} / {quizData.questions.length}
        </div>
      </QuizStyles>
  );
  }

  return (
    <Filter>
      {
        renderSC()
      }
    </Filter>
    
  )
}