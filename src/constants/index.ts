export type ActionDescription = {
  [key: string]: string
}

export const ActionDescriptionTexts:ActionDescription = {
  GET: "Get all data from local server",
  POST: "Post some data from user to local server",
  PUT: "Rewrite all data of resource on server",
  DELETE: "Delete some data on server",
  PATCH: "Participle update on server with giver info from user",
  HEADER: "Get information about server",
  OPTIONS: "Get available actions to do with server",
  TRACE: "",
  CONNECT: "",
  HEAD: "Get last headers of requests"
};


export const AVAILABLE_ACTIONS = Object.keys(ActionDescriptionTexts);

export const baseUrl = "/";