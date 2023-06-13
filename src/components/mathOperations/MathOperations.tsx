import { Operation } from "../../constants/constants";
import "./mathOperations.scss";

interface MathOperationsProps {
  operations: Array<Operation>;
  operator: string;
  onOperatorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function MathOperations({
  operations,
  operator,
  onOperatorChange,
}: MathOperationsProps) {
  return (
    <div className="operations">
      {operations.map((item) => (
        <label
          key={item.nameOperation}
          className={`label ${
            item.symbol === operator ? "activeOperation" : null
          }`}
        >
          <input
            type="radio"
            name="operator"
            value={item.symbol}
            onChange={onOperatorChange}
          />
          <img src={item.pic} alt={item.nameOperation} />
        </label>
      ))}
    </div>
  );
}

export default MathOperations;
