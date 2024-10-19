export type ALLOWED_ACTIONS = "get" | "post" | "patch" | "delete" | "put" | "";

type ActionDescriptionObjectType = Record<ALLOWED_ACTIONS, string>

export const ActionDescriptionTexts = {
  get: "Get all data from local server",
  post: "Post some data from user to local server",
  put: "Rewrite all data of resource on server",
  delete: "Delete some data on server",
  patch: "Participle update on server with giver info from user",
  "": "none selected yet"
} satisfies ActionDescriptionObjectType;


export const baseUrl = "/";
