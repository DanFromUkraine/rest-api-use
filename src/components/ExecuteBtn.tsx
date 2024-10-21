import { loadGetResponse } from "../redux/mainSlice";
import { store } from "../redux/store";
import { useGet, useMutate } from "../utils/reactQuery";
import Button from "./Button";
import { useAppSelector } from "../redux/hooks";
import { useEffect } from "react";

export default function ExecuteBtn() {
  const actionChosen = useAppSelector((state) => state.actionChosen);
  const { inp_address: modifier, inp_text } = useAppSelector(
    (state) => state.inp_data
  );

  const { mutate, isLoading: isLoadingMutate } = useMutate({
    method: actionChosen,
    modifier,
  });

  const {
    data,
    isLoading: isLoadingRequest,
    error,
    refetch,
  } = useGet(modifier);
  useEffect(() => {
    store.dispatch(
      loadGetResponse({
        data,
        isLoading: isLoadingRequest || isLoadingMutate,
        error,
      })
    );
  }, [data, isLoadingRequest, error, isLoadingMutate]);

  const onClick =
  actionChosen === "get" ? () => refetch() : () => mutate({ text: inp_text });

  return <Button actionType="execute" onClick={onClick} />;
}
