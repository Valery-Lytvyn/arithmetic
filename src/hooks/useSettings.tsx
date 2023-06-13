import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeMathData, getUserData } from "../redux/slice/userDataSlicer";
import { ROUTERS } from "../routing/routers";

const useSettings = () => {
  const [firstOperand, setFirstOperand] = useState<number>(0);
  const [secondOperand, setSecondOperand] = useState<number>(0);
  const [operator, setOperator] = useState("+");
  const [roundDuration, setRoundDuration] = useState(9);

  const dispatch = useDispatch();
  const personData = useSelector(getUserData);
  const navigator = useNavigate();

  useEffect(() => {
    if (personData) {
      setOperator(personData.operation);
      setFirstOperand(personData.maxFirstNum);
      setSecondOperand(personData.maxSecondNum);
      setRoundDuration(personData.duration);
    }
  }, [personData]);

  const changeSliderValue = (
    e: React.ChangeEvent<HTMLInputElement>,
    stateSetter: React.Dispatch<number>
  ) => {
    const newValue = parseInt(e.target.value);
    stateSetter(newValue);
  };

  const clickHandler = () => {
    if (
      (operator === "-" || operator === ":") &&
      secondOperand > firstOperand
    ) {
      const temp = firstOperand;
      setFirstOperand(secondOperand);
      setSecondOperand(temp);
    } else {
      dispatch(
        changeMathData({
          operation: operator,
          maxFirstNum: firstOperand,
          maxSecondNum: secondOperand,
          duration: roundDuration,
        })
      );
      navigator(ROUTERS.game);
    }
  };

  const changeSelectValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const duration = +e.target.value;
    setRoundDuration(duration);
  };

  const onOperatorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOperator(e.target.value);
  };

  return {
    firstOperand,
    setFirstOperand,
    secondOperand,
    setSecondOperand,
    operator,
    roundDuration,
    onOperatorChange,
    changeSliderValue,
    changeSelectValue,
    clickHandler,
  };
};

export default useSettings;
