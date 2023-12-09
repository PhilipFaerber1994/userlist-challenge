interface IButton {
  title: string;
  color: string;
  hoverColor: string;
  clickFunction: () => void;
}

const Button = ({ title, color, hoverColor, clickFunction }: IButton) => {
  return (
    <button
      className={`${color} hover:${hoverColor} p-2 text-white rounded`}
      onClick={() => clickFunction()}
    >
      {title}
    </button>
  );
};

export default Button;
