import { useAppSelector } from "../redux/hooks";
import {JsonSyntaxHighlight} from "../utils/jsonHighlighter"

export default function Data() {
  const currDataText = useAppSelector((state) => state.currDataText);



  return (
    <div>
      <h2>Data</h2>

      <JsonSyntaxHighlight json={currDataText}/>      
      
    </div>
  );
}
