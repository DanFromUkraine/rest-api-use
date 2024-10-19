import Button from "./Button";
import { store } from "../redux/store";
import { blueActionClick } from "../redux/mainSlice";

export default function PutBtn() {
  return (
    <Button
      actionType="put"
      onClick={() => store.dispatch(blueActionClick("put"))}
    />
  );
}
