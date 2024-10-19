export function JsonSyntaxHighlight({ json }: { json: string }) {
  const outputString = json
    .replace(/\[/g, "\n[")
    .replace(/\]/g, "\n]")
    .replace(/\{/g, "\n\t{")
    .replace(/\},/g, "},\n");

  const outputElements = outputString.split("\n").map((string, i) => {
    return (
      <pre key={i} className="block">
        {string}
      </pre>
    );
  });

  return <div>{outputElements}</div>;
}
