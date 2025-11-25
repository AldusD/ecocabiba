import { MessagesEnum } from "../shared/enums/messagesEnum.js";
import { QuizAttemptStatusEnum } from "../shared/enums/quizAttemptStatus.js";
import { QuizAttempt } from "./models/QuizAttempt.js";
import { QuizRepository } from "./QuizRepository.js";
export class QuizService {
    quizRepository = new QuizRepository();
    static MINIMMUM_CORRECT_APPROVED = 3;
    handleAttempt(userId, quizId, correctCount) {
        this.verifyAttemptLimit(userId);
        const status = (correctCount >= QuizService.MINIMMUM_CORRECT_APPROVED) ? QuizAttemptStatusEnum.PASSED : QuizAttemptStatusEnum.FAILED;
        const attempt = new QuizAttempt(quizId, userId, status);
        this.quizRepository.saveAttempt(attempt);
        return;
    }
    getExactDay(date) {
        return date.toISOString().split('T')[0] || '';
    }
    verifyAttemptLimit(userId) {
        const lastAttempt = this.quizRepository.getLastAttempt(userId);
        if (!lastAttempt)
            return;
        const lastDate = lastAttempt.getCreatedAt();
        if (this.getExactDay(lastDate) == this.getExactDay(new Date()))
            throw MessagesEnum.ERROR_QUIZ_LIMIT_EXCEED;
    }
}
//# sourceMappingURL=QuizService.js.map