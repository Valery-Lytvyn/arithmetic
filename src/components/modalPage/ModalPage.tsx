import Confetti from "react-confetti";
import MathEquation from "../mathEquation/MathEquation";
import Button from "../button/Button";
import sadFace from "../../assets/icon/sad_face.png";
import "./modalPage.scss";

interface ModalPageProps {
  gameResult: "winner" | "loser" | null;
  firstOperand: string | number;
  secondOperand: string | number;
  operator: string;
  result: number | null;
  closePage: () => void;
}

const renderAlert = (gameResult: string | null) =>
  gameResult === "winner" ? (
    "Congratulations! You won"
  ) : (
    <>
      <img src={sadFace} alt="sad face" />
      <span>Sorry, you lost</span>
    </>
  );

function ModalPage({
  gameResult,
  firstOperand,
  secondOperand,
  operator,
  result,
  closePage,
}: ModalPageProps) {
  return (
    <div className="modalPage">
      <h2 className="alert-message px-3">{renderAlert(gameResult)}</h2>

      <MathEquation
        firstOperand={firstOperand}
        secondOperand={secondOperand}
        operator={operator}
        result={result}
      />
      {gameResult === "winner" && <Confetti />}

      <Button
        className="btn-primary"
        onClick={closePage}
        ariaLabel="confirm setting button"
        btnValue="Go to game"
      />
    </div>
  );
}

export default ModalPage;
