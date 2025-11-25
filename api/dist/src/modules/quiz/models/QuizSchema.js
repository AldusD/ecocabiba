export class QuizSchema {
    id;
    type;
    questions;
    constructor(id, type, questions) {
        this.id = id;
        this.type = type;
        this.questions = questions;
    }
    getId() { return this.id; }
    getType() { return this.type; }
    getQuestions() { return this.questions; }
    setId(id) { this.id = id; }
    setType(type) { this.type = type; }
    setQuestions(questions) { this.questions = questions; }
}
//# sourceMappingURL=QuizSchema.js.map