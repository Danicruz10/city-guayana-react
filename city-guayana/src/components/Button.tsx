import { type ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
};

function Button({ className, children, onClick }: Props) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}

export default Button;
