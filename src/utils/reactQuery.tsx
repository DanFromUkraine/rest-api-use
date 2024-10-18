import axios from "axios";
import { useQuery } from "react-query";


type useQueryMultitoolParamsType = {
  method: "get" | "post" | "patch" | "delete" | "put";
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
        url: "http://localhost:3000/my_data/" + modifier,
      }),
  });

  return { data, isLoading, error };
}

export { useQueryMultitool };
