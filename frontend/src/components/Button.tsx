import { ReactElement } from "react";

interface IButton {
  title: string;
  color: string;
  hoverColor: string;
  clickFunction?: () => void;
  icon?: ReactElement;
}

const Button = ({
  title,
  color,
  hoverColor,
  clickFunction = () => {},
  icon,
}: IButton) => {
  return (
    <button
      className={`flex flex-row justify-around ${color} hover:${hoverColor}  m-1 p-2 text-white rounded`}
      onClick={() => clickFunction()}
    >
      <span>{icon}</span>
      <span>{title}</span>
    </button>
  );
};

export default Button;
