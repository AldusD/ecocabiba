import { Container } from "./styles";

export default function QuizFeedback() {
    return (
      <Container>
        <h2 style={{ color: enums.COLORS.PRIMARY_TEXT }}>Fim do Quiz!</h2>
        <p style={{ color: enums.COLORS.PRIMARY_TEXT }}>
          Você acertou {correctCount} de {quizData.questions.length} perguntas.
        </p>
      </Container>
    );
}