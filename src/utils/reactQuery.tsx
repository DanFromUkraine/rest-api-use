import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { ALLOWED_ACTIONS } from "../constants";

type useMutateParamsType = {
  method: ALLOWED_ACTIONS;
  modifier?: string;
};

export type useGetOutputType = {
  data: string;
  isLoading: boolean;
  error: unknown;
  refetch: () => void;
};

function useGet(modifier?: string): useGetOutputType {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: "get",
    queryFn: () => axios.get("http://localhost:3000/my_data/" + modifier),
  });

  return { data: JSON.stringify(data?.data), isLoading, error, refetch };
}

function useMutate({ method, modifier = "" }: useMutateParamsType) {
  const { mutate, isLoading, error } = useMutation({
    mutationKey: "mutate",
    mutationFn: (newInfo) =>
      axios({
        method: method,
        url: "http://localhost:3000/my_data/" + modifier,
        data: method !== "delete" ? newInfo : undefined,
      }),
  });

  return { mutate, isLoading, error };
}

export { useGet, useMutate };
