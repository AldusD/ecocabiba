import { useState } from "react"
import Quiz from "./components/Quiz";

export default function HomePage() {
    const [quizMode, setQuizMode] = useState(false);
    
    return (
        <>
        <h1>Home page</h1>
        <span onClick={() => {setQuizMode(true)}} >Responder Quiz</span>
        { quizMode ? <Quiz setQuizMode={setQuizMode} /> : <></> }
        </>
    )
}