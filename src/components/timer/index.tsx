import { useState, useEffect } from "react";
import "./index.scss";
let timer: any;

function Timer({ startTimer }: any) {
  //const [startTimer, setStartTimer] = useState<boolean>(false);
  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);

  useEffect(() => {
    if (startTimer) {
      timer = setInterval(() => {
        setSeconds(seconds + 1);

        if (seconds === 59) {
          setMinutes(minutes + 1);
          setSeconds(0);
        }

        if (minutes === 59) {
          setHours(hours + 1);
          setMinutes(0);
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  });

  return (
    <span className="timer">
      {hours < 10 ? `0${hours}` : hours}:
      {minutes < 10 ? `0${minutes}` : minutes}:
      {seconds < 10 ? `0${seconds}` : seconds}
    </span>
  );
}

export default Timer;
