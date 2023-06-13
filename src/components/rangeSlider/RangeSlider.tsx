import { Dispatch } from "react";
import React from "react";

interface RangeSliderProps {
  sliderValue: number;
  changeSliderValue: (
    event: React.ChangeEvent<HTMLInputElement>,
    setFunction: Dispatch<number>
  ) => void;
  setFunction: Dispatch<number>;
  sliderTitle: string;
}

function RangeSlider({
  sliderValue,
  changeSliderValue,
  setFunction,
  sliderTitle,
}: RangeSliderProps) {
  return (
    <div className="rangeSlider mb-3 px-2">
      <label htmlFor="rangeSlider">{sliderTitle} </label>
      <input
        id="rangeSlider"
        type="range"
        min={1}
        max={100}
        step={1}
        value={sliderValue}
        onChange={(e) => changeSliderValue(e, setFunction)}
      />
    </div>
  );
}

export default RangeSlider;
