import { useQuery, useQueryClient } from "react-query";

export function useGetAll() {

  const data = useQuery({
    queryFn: () => fetch("http://localhost:3000/my_data").then(resp => resp.json()),
    queryKey: 'get-data'
  })

  console.log(data)
}
