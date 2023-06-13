import "./timer.scss";

interface TimerProps {
  countdownTimer: number;
}

function Timer({ countdownTimer }: TimerProps) {
  return (
    <div className="timer">
      <span className="timerValue bg-info text-light"> {countdownTimer}</span>
    </div>
  );
}

export default Timer;
