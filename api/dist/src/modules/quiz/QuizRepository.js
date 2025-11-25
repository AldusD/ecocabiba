import { QuizAttempt } from "./models/QuizAttempt.js";
export class QuizRepository {
    getLastAttempt(userId) {
        return new QuizAttempt('teste', 'teste', 1, new Date(-1));
    }
    saveAttempt(quizAttemptData) {
        return new QuizAttempt('teste', 'teste', 1, new Date());
    }
}
//# sourceMappingURL=QuizRepository.js.map