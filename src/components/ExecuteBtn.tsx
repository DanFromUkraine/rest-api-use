import { loadGetResponse } from "../redux/mainSlice";
import { store } from "../redux/store";
import { useGet, useMutate } from "../utils/reactQuery";
import Button from "./Button";
import { useAppSelector } from "../redux/hooks";
import { useEffect } from "react";


export default function ExecuteBtn({ className }: { className: string }) {
  const method = useAppSelector((state) => state.actionChosen);
  const { inp_address: modifier, inp_text } = useAppSelector(
    (state) => state.inp_data
  );

  const { mutate, isLoading: isLoadingMutate } = useMutate({
    method: method,
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
      loadGetResponse({ data, isLoading: isLoadingRequest || isLoadingMutate, error })
    );
  }, [data, isLoadingRequest, error, isLoadingMutate]);

  const onClick = method === "get" ? () => refetch() : () => mutate({text: inp_text});

  return (
    <Button onClick={onClick} className={className}>
      Execute
    </Button>
  );
}
