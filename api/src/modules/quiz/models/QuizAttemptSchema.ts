import type { QuizAttemptStatusEnum } from "../../shared/enums/quizAttemptStatus.js";

export class QuizAttemptSchema {
    private id!: string;
    private quizId!: string;
    private userId!: string;
    private createdAt!: Date;
    private status!: number;

    constructor(id: string, quizId: string, userId: string, status: number, createdAt: Date) {
        this.id = id;
        this.quizId = quizId;
        this.userId = userId;
        this.createdAt = createdAt;
        this.status = status;
    }

    getId (): string { return this.id }
    getUserId (): string { return this.userId }
    getQuizId (): string { return this.quizId }
    getCreatedAt (): Date { return this.createdAt }
    getStatus (): number { return this.status }

    setId (id: string) { this.id = id; }
    setQuizId (quizId: string) { this.quizId = quizId; }
    setUserId (userId: string) { this.userId = userId; }
    setCreatedAt (createdAt: Date) { this.createdAt = createdAt; }
    setStatus (status: number) { this.status = status; }
}