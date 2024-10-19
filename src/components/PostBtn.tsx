import { useCallback } from "react";
import Button from "./Button";
import { blueActionClick } from "../redux/mainSlice";
import { store } from "../redux/store";


export default function PostBtn() {

  const onClick = useCallback(
    () => store.dispatch(blueActionClick("post")),
    []
  );


  return <Button actionType="post" onClick={onClick} />
}
