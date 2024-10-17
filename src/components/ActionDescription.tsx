import { useAppSelector } from "../redux/hooks";
import { ActionDescriptionTexts } from "../constants";

export default function ActionDescription() {
  const actionChoosen = useAppSelector((app) => app.actionChoosen);
  // const error = useAppSelector(state => state.error)

  return (
    <div className="flex w-full justify-center">
      <p>{ActionDescriptionTexts[actionChoosen]}</p>
    </div>
  );
}
