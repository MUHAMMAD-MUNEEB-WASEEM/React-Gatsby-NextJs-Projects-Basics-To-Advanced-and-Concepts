  
import React, { useState } from "react";
import "./Timer.css";
import TimerButton from "../TimerButton/TimerButton";

const  Timer = () => {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interval, setinterval] = useState({});
  const [status, setstatus] = useState(0);

  const startTimer = () => {
    if (status !== 1) {
      runTimer();
      setstatus(1);
      setinterval(setInterval(runTimer, 10));
    }
  };

  const pauseTimer = () => {
    clearInterval(Number(interval));
    setstatus(2);
  };

  const resetTimer = () => {
    clearInterval(Number(interval));
    setstatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
  };

  var updateMs = time.ms;
  var updateS = time.s;
  var updateM = time.m;
  var updateH = time.h;

  const runTimer = () => {
    if (updateMs === 100) {
      updateS++;
      updateMs = 0;
    }
    if (updateS === 60) {
      updateM++;
      updateS = 0;
    }

    if (updateM === 60) {
      updateH++;
      updateS = 0;
    }
    updateMs++;
    return setTime({ ms: updateMs, s: updateS, m: updateM, h: updateH });
  };

  return (
    <div className="timer-container">
      <div className="time-display">
        <p>
          {time.m < 10 ? `0${time.m}` : time.m}:
          {time.s < 10 ? `0${time.s}` : time.s}
          {/* {time.ms < 10 ? `0${time.ms}` : time.ms} */}
        </p>
      </div>
      <div className="timer-button-container">
        <TimerButton  buttonAction={startTimer} buttonValue={"Start"} />
        <TimerButton buttonAction={pauseTimer} buttonValue={"Pause"} />
        <TimerButton buttonAction={resetTimer} buttonValue={"Reset"} />
      </div>
    </div>
  );
}

export default Timer;