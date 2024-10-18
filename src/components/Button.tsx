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

  // console.log("children", children?.toString().toLowerCase(), actionChoosen);

  const buttonClasses = classNames(
    "px-4 py-3 rounded-md bg-blue-500 text-white hover:bg-blue-400 max-w-24 flex justify-center",
    { "!bg-blue-400": children?.toString().toLowerCase() === actionChoosen }, // я спершу хотів передавати класи з компоненту, що є хорошою практикою на середніх - великих проєктах, але тут найлогічніше їх буде прописати у Button, щоб не дублювати логіку купу разів
    className
  );

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
}
