import PrismaService from "../../db/PrismaService.js";
import { QuizAttempt } from "./models/QuizAttempt.js";
export class QuizRepository {
    static dbClient = PrismaService.getClient();
    async getLastAttempt(userId) {
        const attempt = await QuizRepository.dbClient.quizAttempt.findFirst({
            where: { userId }
        });
        if (!attempt)
            return undefined;
        const quizAttempt = new QuizAttempt(attempt.quizId, attempt.userId, attempt.status, attempt.createdAt);
        if (attempt.id)
            quizAttempt.setId(attempt.id);
        return quizAttempt;
    }
    async saveAttempt(quizAttemptData) {
        const created = await QuizRepository.dbClient.quizAttempt.create({
            data: {
                userId: quizAttemptData.getUserId(),
                quizId: quizAttemptData.getQuizId(),
                status: quizAttemptData.getStatus(),
            }
        });
        const quizAttempt = new QuizAttempt(created.quizId, created.userId, created.status, created.createdAt);
        if (created.id)
            quizAttempt.setId(created.id);
        return quizAttempt;
    }
}
//# sourceMappingURL=QuizRepository.js.map