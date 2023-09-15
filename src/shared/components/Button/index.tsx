export interface ButtonProps {
  text: string;
  textColor?: 'white' | 'black' | 'gray';
  bgColor?: 'blue' | 'green' | 'yellow' | 'red' | 'white';
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  textColor,
  bgColor,
  onClick,
  type,
  className,
  disabled,
}: ButtonProps) => {
  return (
    <div className="mb-4">
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`bg-${bgColor}-500 ${
          disabled ? '' : `hover:bg-${bgColor}-700`
        } text-${textColor} font-bold py-2 px-4 rounded ${className}`}
      >
        {text}
      </button>
    </div>
  );
};

Button.defaultProps = {
  textColor: 'white',
  bgColor: 'blue',
  onClick: () => {},
  type: 'button',
  className: '',
  disabled: false,
};

export default Button;
