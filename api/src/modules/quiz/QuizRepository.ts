import { QuizAttempt } from "./models/QuizAttempt.js";


export class QuizRepository {
    getLastAttempt (userId: string) : QuizAttempt | undefined {
        return new QuizAttempt('teste', 'teste', 1, new Date());
    }

    saveAttempt (quizAttemptData: QuizAttempt) : QuizAttempt | undefined {
        return new QuizAttempt('teste', 'teste', 1, new Date());
    }
}