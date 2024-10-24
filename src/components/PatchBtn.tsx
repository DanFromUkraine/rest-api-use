import Button from "./Button";
import { store } from "../redux/store";
import { blueActionClick } from "../redux/mainSlice";

export default function PatchBtn() {
  return <Button actionType="patch" onClick={() => store.dispatch(blueActionClick("patch"))} />
}
