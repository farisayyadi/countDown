import { useState, useEffect } from "react";
import { Time } from "../time/time";
import { AiOutlineCloseSquare } from "react-icons/ai";
import "./countDown.scss";

export const CountDown = ({ hideCountDown }) => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  const [CountDownEnded, setCountDownEnded] = useState(false);

  const startCountdown = () => {
    let interval = setInterval(() => {
      const endDate = new Date("Aug 01, 2023");
      const currentDate = new Date();
      const totalSeconds = (endDate - currentDate) / 1000;

      const daysCount = Math.floor(totalSeconds / 3600 / 24);
      const hoursCount = Math.floor((totalSeconds / 3600) % 24);
      const minutesCount = Math.floor((totalSeconds / 60) % 60);
      const secondsCount = Math.floor(totalSeconds % 60);

      if (totalSeconds < 1) {
        setCountDownEnded(true);
        clearInterval(interval);
      } else {
        setDays(`${format(daysCount)}`);
        setHours(`${format(hoursCount)}`);
        setMinutes(`${format(minutesCount)}`);
        setSeconds(`${format(secondsCount)}`);
      }
    }, 1000);
  };

  const format = (t) => {
    return t < 10 ? `0${t}` : t;
  };

  useEffect(() => {
    startCountdown();
  });

  return (
    <div className="countDown">
      <div className="content">
        <h1>{!CountDownEnded ? "Christmas Sale!" : "Sale Ended!!!"}</h1>
        <section>
          <Time time={days} day={"Days"} />
          <Time time={hours} day={"Hours"} />
          <Time time={minutes} day={"Minutes"} />
          <Time time={seconds} day={"Seconds"} />
        </section>
      </div>
      <AiOutlineCloseSquare
        className="close-icon"
        color="red"
        size={30}
        onClick={hideCountDown}
      />
    </div>
  );
};
