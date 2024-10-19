import { blueActionClick } from "../redux/mainSlice";
import { store } from "../redux/store";
import Button from "./Button";

export default function DeleteBtn() {
  return (
    <Button actionType="delete" onClick={() => store.dispatch(blueActionClick("delete"))} />
  );
}
