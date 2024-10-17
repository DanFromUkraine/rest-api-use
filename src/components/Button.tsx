import React from "react";
import classNames from "classnames";
import { useAppSelector } from "../redux/hooks";

type Props = {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
};

export default function Button({ children, onClick, className }: Props) {
  const actionChoosen = useAppSelector((state) => state.actionChoosen);

  const buttonClasses = classNames(
    "px-4 py-3 rounded-md bg-blue-500 text-white hover:bg-blue-400 max-w-24 flex justify-center",
    {"bg-blue-400": children?.toString().toUpperCase() === actionChoosen},
    className
  );

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
}
