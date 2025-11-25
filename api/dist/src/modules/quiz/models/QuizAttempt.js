export class QuizAttempt {
    id;
    quizId;
    userId;
    createdAt;
    status;
    constructor(quizId, userId, status, createdAt = new Date()) {
        this.quizId = quizId;
        this.userId = userId;
        this.createdAt = createdAt;
        this.status = status;
    }
    static ofDbQuestionAttempt(dbQuizAttempt) {
        const quizAttempt = new QuizAttempt(dbQuizAttempt.getQuizId(), dbQuizAttempt.getUserId(), dbQuizAttempt.getStatus(), dbQuizAttempt.getCreatedAt());
        quizAttempt.setId(dbQuizAttempt.getId());
        return quizAttempt;
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
//# sourceMappingURL=QuizAttempt.js.map