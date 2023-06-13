export const getRndInteger = (max: number, min = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const generateEquation = (
  operation: string | undefined,
  maxFirstNum: number | undefined,
  maxSecondNum: number | undefined
) => {
  const num1 = getRndInteger(maxFirstNum || 1);
  const num2 = getRndInteger(maxSecondNum || 1);
  if ((operation === ":" || operation === "-") && num2 > num1) {
    const firstNum = num2;
    const secondNum = num1;
    if (operation === ":") {
      const result = Math.floor(num2 / num1);
      return [result * num1, num1];
    }
    return [firstNum, secondNum];
  } else if (operation === ":") {
    const result = Math.floor(num1 / num2);
    return [result * num2, num2];
  } else {
    return [num1, num2];
  }
};

export const calculateResult = (
  operation: string | undefined,
  firstNum: number,
  secondNum: number
) => {
  switch (operation) {
    case "+":
      return firstNum + secondNum;
    case "-":
      return firstNum - secondNum;
    case "x":
      return firstNum * secondNum;
    case ":":
      return firstNum / secondNum;
    default:
      return null;
  }
};

export const calculateNewScores = (
  computedResult: number | null,
  scores: number,
  correctAnswer: number | null,
  duration: number
) => {
  let newScores = scores;
  if (computedResult === correctAnswer) {
    switch (duration) {
      case 6:
        newScores += 5;
        break;
      case 9:
        newScores += 3;
        break;
      case 12:
        newScores += 1;
        break;
    }
  } else {
    switch (duration) {
      case 6:
        newScores -= 1;
        break;
      case 9:
        newScores -= 3;
        break;
      case 12:
        newScores -= 5;
        break;
    }
  }
  return newScores;
};
