export class Quiz {
    id;
    type;
    questions;
    constructor(type, questions) {
        this.type = type;
        this.questions = questions;
    }
    static ofDbQuiz(dbQuiz) {
        const quiz = new Quiz(dbQuiz.getType(), dbQuiz.getQuestions());
        quiz.setId(dbQuiz.getId());
        return quiz;
    }
    getId() { return this.id; }
    getType() { return this.type; }
    getQuestions() { return this.questions; }
    setId(id) { this.id = id; }
    setType(type) { this.type = type; }
    setQuestions(questions) { this.questions = questions; }
}
//# sourceMappingURL=Quiz.js.map