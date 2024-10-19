import { blueActionClick } from "../redux/mainSlice";
import { store } from "../redux/store";
import Button from "./Button";

export default function GetBtn() {
  return (
    <Button actionType="get" onClick={() => store.dispatch(blueActionClick("get"))} />
  );
}
