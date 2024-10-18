import { useAppSelector } from "../redux/hooks";
import { ActionDescriptionTexts } from "../constants";
import classNames from "classnames";

export default function ActionDescription() {
  const actionChosen = useAppSelector((app) => app.actionChosen);
  const error = useAppSelector((state) => state.error);

  const output = !error ? ActionDescriptionTexts[actionChosen] : error;

  const classes = classNames("flex w-full justify-center", {
    "text-red-500": error,
  });

  return (
    <div className={classes}>
      <p>{output}</p>
    </div>
  );
}
