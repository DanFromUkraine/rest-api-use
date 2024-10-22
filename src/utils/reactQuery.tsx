import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { ALLOWED_ACTIONS } from "../constants";


type useMutateParamsType = {
  method: ALLOWED_ACTIONS;
  modifier?: string;
};

export type useGetType = {
  data: string;
  isLoading: boolean;
  error: unknown;
};

type useGetOutputType = useGetType & {
  refetch: () => void;
};

function useGet(modifier?: string): useGetOutputType {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: "get",
    queryFn: () => axios.get("http://localhost:3000/my_data/" + modifier),
    onError: () => {}
  });

  return {
    data: JSON.stringify(data?.data, undefined),
    isLoading,
    error,
    refetch,
  };
}

function useMutate({
  method,
  modifier = "",
}: useMutateParamsType) {
  const { mutate, isLoading, error } = useMutation({
    mutationKey: "mutate",
    mutationFn: ({text}: {text: string}) =>
      axios({
        method: method,
        url: "http://localhost:3000/my_data/" + modifier,
        data: method !== "delete" ? {text} : undefined,
      }),
  });

  return { mutate, isLoading, error };
}

export { useGet, useMutate };
