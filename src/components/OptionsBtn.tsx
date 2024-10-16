import Button from "./Button"
import { store } from "../redux/store"
import { blueActionClick } from "../redux/mainSlice"

export default function OptionsBtn() {
  return (
    <Button onClick={() => store.dispatch(blueActionClick("GET"))}>Options</Button>
  )
}
