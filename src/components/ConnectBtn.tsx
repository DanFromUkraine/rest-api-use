import Button from "./Button";
import { store } from "../redux/store";
import { blueActionClick } from "../redux/mainSlice";

export default function ConnectBtn() {
  return (
    <Button onClick={() => store.dispatch(blueActionClick("CONNECT"))}>
      Connect
    </Button>
  );
}
