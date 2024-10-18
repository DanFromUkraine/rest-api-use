import { useAppSelector } from "../redux/hooks";
import { useGetAll } from "../utils/reactQuery";

export default function Data() {
  const currDataText = useAppSelector((state) => state.currDataText);

  useGetAll()

  return (
    <div>
      <h2>Data</h2>

      <code>
        {currDataText}
      </code>
    </div>
  );
}
