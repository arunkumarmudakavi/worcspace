"use client";

const Button = ({
  value,
  className,
  onClick,
  disabled,
}: {
  value: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {value}
    </button>
  );
};

export default Button;
