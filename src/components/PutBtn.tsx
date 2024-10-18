import Button from "./Button";
import { store } from "../redux/store";
import { blueActionClick } from "../redux/mainSlice";

export default function PutBtn() {
  return <Button onClick={() => store.dispatch(blueActionClick("put"))}>Put</Button>;
}
