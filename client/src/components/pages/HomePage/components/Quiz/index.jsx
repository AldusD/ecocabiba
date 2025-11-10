import { useState } from "react";
import { QuizStyles } from "./styles";
import { quizMock } from "./mock";

export default function Quiz({ setQuizMode }) {
    const [quizData, setQuizData] = useState(quizMock);

    return (
        <>
        <h1>Quiz</h1>
        <QuizStyles>
            <h2></h2>
        </QuizStyles>
        </>
    )
}