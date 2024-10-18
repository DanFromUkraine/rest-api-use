import axios from "axios";
import { useQuery } from "react-query";
import { ALLOWED_ACTIONS } from "../constants";


type useQueryMultitoolParamsType = {
  method: ALLOWED_ACTIONS;
  modifier?: string;
};

function useQueryMultitool({
  method,
  modifier = "",
}: useQueryMultitoolParamsType) {
  const { data, isLoading, error } = useQuery({
    queryKey: "general request",
    queryFn: () =>
      axios({
        method,
        url: "http://localhost:3000/my_data/" + modifier
      }),
  });

  return { data: JSON.stringify(data), isLoading, error };
}

export { useQueryMultitool };
