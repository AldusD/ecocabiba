import type { QuizAttemptStatusEnum } from "../../shared/enums/quizAttemptStatus.js";
import type { QuizAttemptSchema } from "./QuizAttemptSchema.js";

export class QuizAttempt {
    private id?: string;
    private quizId!: string;
    private userId!: string;
    private createdAt!: Date;
    private status!: QuizAttemptStatusEnum;

    constructor(quizId: string, userId: string, status: QuizAttemptStatusEnum, createdAt: Date = new Date()) {
        this.quizId = quizId;
        this.userId = userId;
        this.createdAt = createdAt;
        this.status = status;
    }

   static ofDbQuestionAttempt (dbQuizAttempt: QuizAttemptSchema): QuizAttempt {
        const quizAttempt =  new QuizAttempt(dbQuizAttempt.getQuizId(), dbQuizAttempt.getUserId(), dbQuizAttempt.getStatus(), dbQuizAttempt.getCreatedAt());
        quizAttempt.setId(dbQuizAttempt.getId()); 
        return quizAttempt;
    }

    getId (): string | undefined { return this.id }
    getUserId (): string { return this.userId }
    getQuizId (): string { return this.quizId }
    getCreatedAt (): Date { return this.createdAt }
    getStatus (): QuizAttemptStatusEnum { return this.status }

    setId (id: string) { this.id = id; }
    setQuizId (quizId: string) { this.quizId = quizId; }
    setUserId (userId: string) { this.userId = userId; }
    setCreatedAt (createdAt: Date) { this.createdAt = createdAt; }
    setStatus (status: QuizAttemptStatusEnum) { this.status = status; }
}