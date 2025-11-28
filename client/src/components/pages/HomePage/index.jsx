/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import Calendar from "./components/Calendar"
import UserIndication from "./components/UserIndication";
import {
    Dashboard,
    QuizSection,
    QuizItem,
    Button,
    QuizUndone,
    ActionSection,
    MapPin,
    ButtonActionRegister,
    CardLevelHighlight,
    XpContainer,
    XpTrack,
    XpFill,
    XpText,
    Card,
    ShareLinkBox,
    SocialButtons,
    ButtonSocial,
    GlobalStyle
} from "./styles";

export default function HomePage() {
    const [quizMode, setQuizMode] = useState(false);
    
    return (
        <div style={styles.page}>
            <h1>Home page</h1>
            <span onClick={() => {setQuizMode(true)}} >Responder Quiz</span>
            { quizMode ? <Quiz closeQuiz={() => setQuizMode(false)} /> : <></> }
        </div>
    )
}