import Button from "./Button";
import { store } from "../redux/store";
import { blueActionClick } from "../redux/mainSlice";

export default function TraceBtn() {
  return (
    <Button onClick={() => store.dispatch(blueActionClick("TRACE"))}>TRACE</Button>
  );
}
