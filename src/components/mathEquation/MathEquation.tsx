import "./mathEquation.scss";

export interface MathEquationProps {
  firstOperand: string | number;
  secondOperand: string | number;
  operator: string;
  result?: string | number | null;
}

function MathEquation({
  firstOperand,
  secondOperand,
  operator,
  result,
}: MathEquationProps) {
  let resultValue: string | number = "?";
  if (result) {
    resultValue = result;
  }

  return (
    <h1 className="mathEquation">
      <span className="operand">{firstOperand}</span>
      <span className="operator">{operator}</span>
      <span className="operand">{secondOperand}</span>
      <span className="operator">=</span>
      <span className="result">{resultValue}</span>
    </h1>
  );
}

export default MathEquation;
