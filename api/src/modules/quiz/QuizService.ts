import { MessagesEnum } from "../shared/enums/messagesEnum.js";
import { QuizAttemptStatusEnum } from "../shared/enums/quizAttemptStatus.js";
import { QuizAttempt } from "./models/QuizAttempt.js";
import { QuizRepository } from "./QuizRepository.js";

export class QuizService {
    private quizRepository = new QuizRepository();
    public static MINIMMUM_CORRECT_APPROVED = 3;

    public handleAttempt (userId: string, quizId: string, correctCount: number): void {
        this.verifyAttemptLimit(userId);
        const status = (correctCount >= QuizService.MINIMMUM_CORRECT_APPROVED) ? QuizAttemptStatusEnum.PASSED : QuizAttemptStatusEnum.FAILED;
        const attempt = new QuizAttempt(quizId, userId, status);
        this.quizRepository.saveAttempt(attempt);
        return;
    }

    private getExactDay(date: Date): string {
        return date.toISOString().split('T')[0] || '';
    }

    private verifyAttemptLimit(userId: string) {
        const lastAttempt = this.quizRepository.getLastAttempt(userId);
        if (!lastAttempt) return;
        const lastDate = lastAttempt.getCreatedAt();
        if (this.getExactDay(lastDate) == this.getExactDay(new Date())) throw MessagesEnum.ERROR_QUIZ_LIMIT_EXCEED;
    }
}