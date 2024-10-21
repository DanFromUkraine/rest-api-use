import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

const handlers = [
  http.get("http://localhost:5173/data", () => {
    return HttpResponse.json([
      { id: 1, text: "text 1" },
      { id: 2, text: "text 2" },
      { id: 3, text: "text 3" },
      { id: 4, text: "text 4" },
    ]);
  }),
];

export const server = setupServer(...handlers);
