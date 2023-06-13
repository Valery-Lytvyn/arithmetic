import {
  DURATION_VALUES,
  GO_TO_GAME_LABEL,
  operations,
} from "../../constants/constants";
import RangeSlider from "../../components/rangeSlider/RangeSlider";
import MathOperations from "../../components/mathOperations/MathOperations";
import MathEquation from "../../components/mathEquation/MathEquation";
import Button from "../../components/button/Button";
import useSettings from "../../hooks/useSettings";
import "./settingsPage.scss";

function SettingsPage() {
  const {
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
  } = useSettings();

  return (
    <div className="settings">
      <h2 className="p-3 text-danger">Settings:</h2>

      <MathOperations
        operations={operations}
        operator={operator}
        onOperatorChange={onOperatorChange}
      />

      <div className="duration px-2">
        <h5>The duration of the round:</h5>
        <select
          name="roundDuration"
          value={roundDuration}
          onChange={changeSelectValue}
        >
          {DURATION_VALUES.map((item) => (
            <option value={item} key={item}>
              {item} s
            </option>
          ))}
        </select>
      </div>

      <MathEquation
        firstOperand={firstOperand}
        secondOperand={secondOperand}
        operator={operator}
      />

      <div className="sliders">
        <RangeSlider
          sliderValue={firstOperand}
          changeSliderValue={changeSliderValue}
          setFunction={setFirstOperand}
          sliderTitle={"Set the Maximum first operand:"}
        />

        <RangeSlider
          sliderValue={secondOperand}
          changeSliderValue={changeSliderValue}
          setFunction={setSecondOperand}
          sliderTitle={"Set the Maximum second operand:"}
        />
      </div>

      <Button
        className="btn-primary"
        onClick={clickHandler}
        ariaLabel="confirm setting button"
        btnValue={GO_TO_GAME_LABEL}
      />
    </div>
  );
}

export default SettingsPage;
