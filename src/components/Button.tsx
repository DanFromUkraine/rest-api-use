import classNames from "classnames";
import { useAppSelector } from "../redux/hooks";
import { ALLOWED_ACTIONS } from "../constants";

type Props = {
  onClick: () => void;
  actionType: ALLOWED_ACTIONS | "execute";
};

export default function Button({ actionType, onClick }: Props) {
  const actionChosen = useAppSelector((state) => state.actionChosen);

  // console.log("children", children?.toString().toLowerCase(), actionChosen);

  const buttonClasses = classNames(
    "px-4 py-3 rounded-md bg-blue-500 text-white hover:bg-blue-400 max-w-24 flex justify-center",
    { "!bg-blue-400": actionType?.toString().toLowerCase() === actionChosen }, // я спершу хотів передавати класи з компоненту, що є хорошою практикою на середніх - великих проєктах, але тут найлогічніше їх буде прописати у Button, щоб не дублювати логіку купу разів
    { "bg-red-500 hover:bg-red-400": actionType === "execute" }
  );

  return (
    <button className={buttonClasses} onClick={onClick}>
      {actionType}
    </button>
  );
}
