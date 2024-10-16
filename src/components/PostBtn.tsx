import { useCallback } from "react";
import Button from "./Button";
import { blueActionClick } from "../redux/mainSlice";
import { store } from "../redux/store";
import { useAppSelector } from "../redux/hooks";

export default function PostBtn() {
  const {actionChoosen} = useAppSelector(state => state);
  console.log({actionChoosen})

  const onClick = useCallback(() => store.dispatch(blueActionClick("POST")), []);
  return <Button onClick={onClick}>Post</Button>;
}
