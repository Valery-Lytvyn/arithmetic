import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  UserData,
  getUserData,
  setNewScores,
} from "../../redux/slice/userDataSlicer";

import {
  BUTTON_VALUES,
  ENTER_LABEL,
  START_LABEL,
} from "../../constants/constants";

import {
  calculateNewScores,
  calculateResult,
  generateEquation,
} from "../../services/gameServices";

import MathEquation from "../../components/mathEquation/MathEquation";
import ModalPage from "../../components/modalPage/ModalPage";
import Timer from "../../components/timer/Timer";
import Button from "../../components/button/Button";

import "./gamePage.scss";

function GamePage() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isEquationDisplayed, setIsEquationDisplayed] = useState(false);
  const [firstOperand, setFirstNum] = useState(0);
  const [secondOperand, setSecondNum] = useState(0);
  const [enteredNumbers, setEnteredNumbers] = useState<string[]>([]);
  const [computedResult, setComputedResult] = useState<number | null>(null);
  const [correctAnswer, setCorrectAnswer] = useState<number | null>(null);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [gameResult, setGameResult] = useState<"winner" | "loser" | null>(null);
  const [pressedKey, setPressedKey] = useState("");
  const [isModalPageDisplayed, setIsModalPageDisplayed] = useState(false);

  const dispatch = useDispatch();

  const personData: UserData = useSelector(getUserData) || {
    name: "",
    scores: 0,
    operation: "",
    maxFirstNum: 0,
    maxSecondNum: 0,
    duration: 0,
  };

  const [countdownTimer, setCountdownTimer] = useState(personData.duration);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (isGameStarted) {
      const [newFirstNum, newSecondNum] = generateEquation(
        personData.operation,
        personData.maxFirstNum,
        personData.maxSecondNum
      );
      setFirstNum(newFirstNum);
      setSecondNum(newSecondNum);
      setIsEquationDisplayed(true);
      setEnteredNumbers([]);
      setComputedResult(null);
      setCountdownTimer(personData.duration);
      setIsTimerRunning(true);
    }
  }, [isGameStarted]);

  useEffect(() => {
    const num = +enteredNumbers.join("");
    setComputedResult(num);
  }, [enteredNumbers]);

  const setKeyPress = useCallback((e: KeyboardEvent) => {
    setPressedKey(e.key);
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", setKeyPress);

    return () => {
      window.removeEventListener("keydown", setKeyPress);
    };
  }, [setKeyPress]);

  useEffect(() => {
    if (isTimerRunning && countdownTimer > 0) {
      const timer = setTimeout(() => {
        setCountdownTimer((prev) => prev - 1);
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    } else {
      setIsTimerRunning(false);
    }
    if (countdownTimer === 0) {
      onGameEnd();
    }
  }, [isTimerRunning, countdownTimer, personData.duration]);

  const startGameHandler = () => {
    setIsGameStarted(true);
  };

  const enterNumberHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const figure = e.currentTarget.value;
    setEnteredNumbers([...enteredNumbers, figure]);
  };

  useEffect(() => {
    if (isGameOver) {
      setIsTimerRunning(false);
      setIsModalPageDisplayed(true);
      const num1 = +firstOperand;
      const num2 = +secondOperand;
      const correctAnswer = calculateResult(personData.operation, num1, num2);
      setCorrectAnswer(correctAnswer);
      const newScores = calculateNewScores(
        computedResult,
        personData.scores,
        correctAnswer,
        personData.duration
      );
      if (computedResult === correctAnswer) {
        setGameResult("winner");
      } else {
        setGameResult("loser");
      }
      dispatch(setNewScores(newScores));
    }
  }, [isGameOver]);

  const onGameEnd = () => {
    setIsGameOver(true);
  };

  const closeModalPage = () => {
    setIsModalPageDisplayed(false);
  };

  useEffect(() => {
    if (isModalPageDisplayed) {
      const timer = setTimeout(() => {
        setIsModalPageDisplayed(false);
      }, 4000);

      return () => {
        clearTimeout(timer);
      };
    } else {
      setIsGameOver(false);
      setGameResult(null);
      setIsEquationDisplayed(false);
      setIsGameStarted(false);
    }
  }, [isModalPageDisplayed]);

  useEffect(() => {
    if (!isGameStarted && !isGameOver && pressedKey === "Enter") {
      startGameHandler();
    } else if (
      isModalPageDisplayed &&
      (pressedKey === "Enter" || pressedKey === "Escape")
    ) {
      closeModalPage();
    } else if (isEquationDisplayed) {
      if (/[0-9]/.test(pressedKey)) {
        setEnteredNumbers([...enteredNumbers, pressedKey]);
      } else if (pressedKey === "Enter" && !isGameOver) {
        console.log(
          "endHand",
          "isGame:",
          isGameOver,
          "is start:",
          isGameStarted
        );
        onGameEnd();
      } else if (pressedKey === "Backspace") {
        const newNum = [...enteredNumbers];
        newNum.pop();
        setEnteredNumbers(newNum);
      }
    }
    setPressedKey("");
  }, [pressedKey]);

  return (
    <div className="game">
      <div className="countdownTimer">
        {isTimerRunning && <Timer countdownTimer={countdownTimer} />}
      </div>
      {!isGameStarted && (
        <div className="start">
          <span>Are you ready??? Press the button or Enter!</span>

          <Button
            className="btn-danger mx-2"
            onClick={startGameHandler}
            ariaLabel="start game button"
            btnValue={START_LABEL}
          />
        </div>
      )}
      <div className="equation">
        {isEquationDisplayed && (
          <MathEquation
            firstOperand={firstOperand}
            secondOperand={secondOperand}
            operator={personData.operation}
            result={computedResult}
          />
        )}
      </div>
      <div className="keyboard">
        <div className="keyWrap">
          {BUTTON_VALUES.map((value) => (
            <button
              className="key"
              value={value}
              key={value}
              onClick={enterNumberHandler}
            >
              {value}
            </button>
          ))}
          {isEquationDisplayed && (
            <Button
              className="btn-info"
              onClick={onGameEnd}
              ariaLabel="enter result equation button"
              btnValue={ENTER_LABEL}
            />
          )}
        </div>
      </div>
      {isModalPageDisplayed && (
        <ModalPage
          gameResult={gameResult}
          firstOperand={firstOperand}
          secondOperand={secondOperand}
          operator={personData.operation}
          result={correctAnswer}
          closePage={closeModalPage}
        />
      )}
    </div>
  );
}

export default GamePage;
