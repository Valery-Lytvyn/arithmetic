import "./button.scss";

interface ButtonProps {
  className: string;
  onClick?: () => void;
  ariaLabel: string;
  btnValue: string;
  type?: "button" | "submit" | "reset" | undefined;
}

function Button({
  className,
  onClick,
  ariaLabel,
  btnValue,
  type,
}: ButtonProps) {
  return (
    <button
      className={`button btn ${className} m-0 p-1`}
      aria-label={ariaLabel}
      onClick={onClick}
      type={type}
    >
      {btnValue}
    </button>
  );
}

export default Button;
