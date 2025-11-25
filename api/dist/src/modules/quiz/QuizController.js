import {} from "express";
import { QuizService } from "./QuizService.js";
import { HttpStatusEnum } from "../shared/enums/httpStatusEnum.js";
import { MessagesEnum } from "../shared/enums/messagesEnum.js";
export class QuizController {
    quizService;
    constructor(quizService = new QuizService()) {
        this.quizService = quizService;
    }
    registerAttempt(req, res) {
        try {
            const { quizId } = req.params;
            const { correctCount } = req.body;
            const userId = 'teste'; // TODO get from sessionToken
            this.quizService.handleAttempt(userId, quizId || '', correctCount);
            res.status(HttpStatusEnum.CREATED).json();
        }
        catch (error) {
            if (error == MessagesEnum.ERROR_QUIZ_LIMIT_EXCEED)
                return res.status(HttpStatusEnum.TOO_MANY_REQUESTS).json(error);
            res.status(HttpStatusEnum.INTERNAL_SERVER_ERROR).json(MessagesEnum.ERROR_SERVER);
        }
    }
}
//# sourceMappingURL=QuizController.js.map