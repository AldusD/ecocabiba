export class QuizAttemptSchema {
    private id!: number;
    private quizId!: number;
    private userId!: number;
    private createdAt!: Date;

    constructor(id: number, quizId: number, userId: number, createdAt: Date) {
        this.id = id;
        this.quizId = quizId;
        this.userId = userId;
        this.createdAt = createdAt;
    }

    getId (): number { return this.id }
    getUserId (): number { return this.userId }
    getQuizId (): number { return this.quizId }
    getCreatedAt (): Date { return this.createdAt }

    setId (id: number) { this.id = id; }
    setQuizId (quizId: number) { this.quizId = quizId; }
    setUserId (userId: number) { this.userId = userId; }
    setCreatedAt (createdAt: Date) { this.createdAt = createdAt; }
}