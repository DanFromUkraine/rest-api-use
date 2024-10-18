import { executeButtonClick } from "../redux/mainSlice";
import { store } from "../redux/store";
import { useQueryMultitool } from "../utils/reactQuery";
import Button from "./Button";
import { useAppSelector } from "../redux/hooks";

export default function ExecuteBtn({ className }: { className: string }) {
  const actionChoosen = useAppSelector((state) => state.actionChoosen);
  const data_obj = executeButtonClick(
    useQueryMultitool({ method: actionChoosen })
  );

  const onClick = () => store.dispatch({ ...data_obj });

  return (
    <Button onClick={onClick} className={className}>
      Execute
    </Button>
  );
}
