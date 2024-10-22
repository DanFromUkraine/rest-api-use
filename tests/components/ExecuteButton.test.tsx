import { render, screen } from "@testing-library/react";
import { server } from "../utils/mockServer";
import { GetBtn, ExecuteBtn, Data } from "../../src/components";
import { Provider } from "react-redux";
import { store } from "../../src/redux/store";
import React from "react";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../../src/App";
import { vi } from "vitest";

describe("ExecuteButton and reactQuery get request", () => {
  function getEntities() {
    const executeButton = screen.getByRole("button", { name: /execute/ });
    const data = screen.getByTestId("json-cont");
    const user = global.userEvent.setup();
    const getButton = screen.getByRole("button", { name: /get/ });


    return { executeButton, data, user, getButton };
  }

  beforeEach(() => {
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

  afterEach(() => {
    server.close();
  });

  it("should handle execute button click, and when action is chosen make a fetch get request", async () => {
    const {user, data, executeButton} = getEntities();
    const getButton = screen.getByRole("button", { name: /get/ });

    await user.click(getButton);
    await user.click(executeButton);

    setTimeout(() => {
      expect(data).toHaveTextContent(/{"id":"1","text":"text 1"},/);
    }, 500);
  });

  it("should ignore executeBtn when no action is chosen", () => {
    const { user, executeButton } = getEntities();
    const storeSpy = vi.spyOn(store, "subscribe");

    user.click(executeButton);

    expect(storeSpy).not.toHaveBeenCalled();

    screen.debug();
  });
});
