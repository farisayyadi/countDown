import "./time.scss";

export const Time = ({ time, day }) => {
  return (
    <>
      <time className="time">
        <span>
          <p className="topNumber">{time}</p>
          <small className="buttomContent">{day}</small>
        </span>
      </time>
    </>
  );
};
