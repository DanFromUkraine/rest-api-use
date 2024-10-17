import Button from "./Button"
import { store } from "../redux/store"
import { blueActionClick } from "../redux/mainSlice"

export default function HeadBtn() {
  return (
    <Button onClick={() => store.dispatch(blueActionClick("HEAD"))}>Head</Button>
  )
}
