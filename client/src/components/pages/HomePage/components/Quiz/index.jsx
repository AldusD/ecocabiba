import { useState } from "react";
import enums from "../../../../../enums/index";
import styles from "./styles";
import quizMock from "./mock";

export default function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [feedback, setFeedback] = useState("");

  const [quizData, setQuizData] = useState(quizMock);

  const currentQuestion = quizData.questions[currentIndex];
  const isLastQuestion = currentIndex === quizData.questions.length - 1;

  function handleAnswer(option) {
    if (selected !== null) return; // evita clicar duas vezes

    setSelected(option);

    if (option.isCorrect) {
      setCorrectCount(correctCount + 1);
      setFeedback("🎉 Parabéns! Resposta correta!");
    } else {
      setFeedback("❌ Resposta incorreta!");
    }

    // avança após 1.5s
    setTimeout(() => {
      setSelected(null);
      setFeedback("");
      if (!isLastQuestion) {
        setCurrentIndex(currentIndex + 1);
      }
    }, 1500);
  }

  function render() {
    if (!currentQuestion) {
    return (
      <div style={styles.container}>
        <h2 style={{ color: enums.COLORS.PRIMARY_TEXT }}>Fim do Quiz!</h2>
        <p style={{ color: enums.COLORS.PRIMARY_TEXT }}>
          Você acertou {correctCount} de {quizData.questions.length} perguntas.
        </p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2 style={{ color: enums.COLORS.PRIMARY_TEXT }}>
        {currentQuestion.title}
      </h2>

      <div style={styles.optionsContainer}>
        {currentQuestion.questions.map((opt, idx) => {
          let bg = enums.COLORS.CARD_BG;

          if (selected) {
            if (opt === selected && opt.isCorrect) bg = enums.COLORS.LIGHT_ACTION;
            else if (opt === selected && !opt.isCorrect) bg = "#E57373"; // vermelho
            else if (opt.isCorrect) bg = enums.COLORS.LIGHT_ACTION;
          }

          return (
            <button
              key={idx}
              style={{
                ...styles.optionButton,
                backgroundColor: bg,
                color: enums.COLORS.PRIMARY_TEXT,
              }}
              onClick={() => handleAnswer(opt)}
              disabled={selected !== null}
            >
              {opt.text}
            </button>
          );
        })}
      </div>

      {feedback && (
        <div style={styles.feedback}>
          <strong>{feedback}</strong>
        </div>
      )}

      <div style={styles.progress}>
        Pergunta {currentIndex + 1} / {quizData.questions.length}
      </div>
    </div>
  );
  }

  return (
    <div style={styles.overlay} >
      {
        render()
      }
    </div>
    
  )
}