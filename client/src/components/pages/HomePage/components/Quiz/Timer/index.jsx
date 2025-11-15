import { useEffect, useState } from "react";
import Icons from "../../../../../shared/Icons";
import { TimerStyles } from "./styles";

export default function Timer({ startTime, triggerTimeout }) {
    const [time, setTime] = useState(startTime);

    function handleTime(currentTime) {
        if (currentTime < 0) return triggerTimeout();
        setTime(currentTime);
        setTimeout(() => {
            handleTime(currentTime - 1);
        }, 1000)
    }

    useEffect(() => {
        handleTime(startTime);
    }, []);

    return (
        <TimerStyles>
            <span className="counter" >{time}</span>
            <Icons.CLOCK />
        </TimerStyles>
    )
}