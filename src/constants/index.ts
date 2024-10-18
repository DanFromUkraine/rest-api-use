export type ActionDescription = {
  [key: string]: string;
};

export const ActionDescriptionTexts: ActionDescription = {
  GET: "Get all data from local server",
  POST: "Post some data from user to local server",
  PUT: "Rewrite all data of resource on server",
  DELETE: "Delete some data on server",
  PATCH: "Participle update on server with giver info from user",
};

// export const AVAILABLE_ACTIONS = Object.keys(ActionDescriptionTexts);

export type ALLOWED_ACTIONS = "get" | "post" | "patch" | "delete" | "put" | "";

export const baseUrl = "/";
