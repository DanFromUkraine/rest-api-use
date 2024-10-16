import { blueActionClick } from "../redux/mainSlice";
import { store } from "../redux/store";
import Button from "./Button";

export default function DeleteBtn() {
  return (
    <Button onClick={() => store.dispatch(blueActionClick("DELETE"))}>
      Delete
    </Button>
  );
}
