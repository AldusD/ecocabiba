export class QuizAttemptSchema {
    id;
    quizId;
    userId;
    createdAt;
    status;
    constructor(id, quizId, userId, status, createdAt) {
        this.id = id;
        this.quizId = quizId;
        this.userId = userId;
        this.createdAt = createdAt;
        this.status = status;
    }
    getId() { return this.id; }
    getUserId() { return this.userId; }
    getQuizId() { return this.quizId; }
    getCreatedAt() { return this.createdAt; }
    getStatus() { return this.status; }
    setId(id) { this.id = id; }
    setQuizId(quizId) { this.quizId = quizId; }
    setUserId(userId) { this.userId = userId; }
    setCreatedAt(createdAt) { this.createdAt = createdAt; }
    setStatus(status) { this.status = status; }
}
//# sourceMappingURL=QuizAttemptSchema.js.map