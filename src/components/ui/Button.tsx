"use client";

const Button = ({
  value,
  className,
  onClick,
}: {
  value: string;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
