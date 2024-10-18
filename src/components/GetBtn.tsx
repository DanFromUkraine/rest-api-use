import { blueActionClick } from "../redux/mainSlice";
import { store } from "../redux/store";
import Button from "./Button";

export default function GetBtn() {
  return (
    <Button onClick={() => store.dispatch(blueActionClick("get"))}>Get</Button>
  );
}
