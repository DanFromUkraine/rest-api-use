import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { server } from "../utils/mockServer";
import { GetBtn, ExecuteBtn, Data } from "../../src/components";
import { Provider } from "react-redux";
import { store } from "../../src/redux/store";
import React from "react";
import userEvent from "@testing-library/user-event";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../../src/App";

describe("ExecuteButton and reactQuery get request", () => {
  beforeAll(() => {
    server.listen();

    render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <GetBtn />
          <ExecuteBtn />
          <Data />
        </Provider>
      </QueryClientProvider>
    );
  });

  afterAll(() => {
    server.close();
  });

  it("should handle execute button click, and when action is chosen make a fetch get request", async () => {
    const executeButton = screen.getByRole("button", { name: /execute/ });
    const getButton = screen.getByRole("button", { name: /get/ });
    const data = screen.getByRole("paragraph");
    const user = userEvent.setup();

    await user.click(getButton);
    await user.click(executeButton);

    setTimeout(() => {
      expect(data).toHaveTextContent(/{"id":"1","text":"text 1"},/);
    }, 500);
  });
});
