import { useAppSelector } from "../redux/hooks";

export default function Data() {
  const currDataText = useAppSelector((state) => state.currDataText);

  return (
    <div>
      <h2>Data</h2>

      <code>
        {currDataText}
      </code>
    </div>
  );
}
