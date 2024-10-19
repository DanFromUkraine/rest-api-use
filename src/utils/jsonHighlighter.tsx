import classNames from "classnames";
import { useCallback } from "react";

export function JsonSyntaxHighlight({ json }: { json: string }) {
  const outputString = json
    .split("[")
    .join("\n[ ")
    .split("]")
    .join("\n]")
    .split("{")
    .join("\n\t{")
    .split("},")
    .join("},\n");

  const outputElements = outputString.split("\n").map((string, i) => (
    <pre key={i} className="block">
      {string}
    </pre>
  ));

  return <div>{outputElements}</div>;
}
