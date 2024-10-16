import React from "react";
import classNames from "classnames";

type Props = {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
};

export default function Button({ children, onClick, className }: Props) {
  const buttonClasses = classNames(
    "px-4 py-3 rounded-md bg-blue-500 text-white hover:bg-blue-400 max-w-24 flex justify-center",
    className
  );
  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
}
