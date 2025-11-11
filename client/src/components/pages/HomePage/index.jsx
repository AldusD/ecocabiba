import { useState } from "react"
import styles from "./styles";
import Quiz from "./components/Quiz";

export default function HomePage() {
    const [quizMode, setQuizMode] = useState(false);
    
    return (
        <div style={styles.page}>
            <h1>Home page</h1>
            <span onClick={() => {setQuizMode(true)}} >Responder Quiz</span>
            { quizMode ? <Quiz setQuizMode={setQuizMode} /> : <></> }
        </div>
    )
}