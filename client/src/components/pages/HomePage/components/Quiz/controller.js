import DEFAULT_IMAGE from "../../../../../assets/nature.png";

export const ANSWER_BENCHMARK = 3;
export const TIME_TO_ANSWER = 30;
export const CAPIBAS_PER_QUIZ = 20;
export const XP_PER_QUIZ = 250;

const TIME_TO_NEXT_QUESTION = 1500;
const WRONG_FEEDBACK = "❌ Resposta incorreta!";
const CORRECT_FEEDBACK = "🎉 Parabéns! Resposta correta!";

export default function controller({
    selected, setSelected, 
    feedback, setFeedback,
    currentIndex, setCurrentIndex,
    imageStr, setImageStr,
    correctCount, setCorrectCount,
    timeEnded, setTimeEnded,
    isLastQuestion}
) {
    function getNextQuestion() {
      setTimeout(() => {
        setSelected(null);
        setFeedback("");
        if (!isLastQuestion()) {
          setCurrentIndex(currentIndex + 1);
        }
    }, TIME_TO_NEXT_QUESTION);
    }

    function sendQuizAttempt() {
        console.log('cabouse') // todo roque, substituir por chamada na api
    }

    function choiceImage() {
        // todo handle image per type
        setImageStr(DEFAULT_IMAGE);
    }

    function handleAnswer(option) {
      if (selected !== null) return; // blocks double clicks
      setSelected(option);
  
      if (option.isCorrect) {
        setCorrectCount(correctCount + 1);
        setFeedback(CORRECT_FEEDBACK);
      } else {
        setFeedback(WRONG_FEEDBACK);
      }
  
      getNextQuestion();
    }

    function randomizeQuiz(quizData) {
        quizData.questions.sort(() => Math.random() - 0.5);
        quizData.questions.forEach(question => {
            question.options.sort(() => Math.random() - 0.5);
        });
        return quizData;
    }

    function handleOptionClass(option) {
        if (!selected) return "";
        if (option.isCorrect) return "correct-highlighting";
        if (option == selected) return "wrong-highlighting";
    }

    function handleTimeEnded() {
        if (timeEnded) {
            setSelected(-1);
            setFeedback(WRONG_FEEDBACK);
            setTimeEnded(false);
            getNextQuestion();
        }
    }
  
  return {
    choiceImage,
    handleAnswer,
    randomizeQuiz,
    handleOptionClass,
    handleTimeEnded,
    sendQuizAttempt
  }
}
