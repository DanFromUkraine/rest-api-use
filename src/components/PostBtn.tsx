import { useCallback } from "react";
import Button from "./Button";
import { blueActionClick } from "../redux/mainSlice";
import { store } from "../redux/store";
// import { useAppSelector } from "../redux/hooks";
// import classNames from "classnames";

export default function PostBtn() {

  const onClick = useCallback(
    () => store.dispatch(blueActionClick("post")),
    []
  );


  return <Button onClick={onClick}>Post</Button>;
}
