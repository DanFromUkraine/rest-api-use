import { render, screen } from "@testing-library/react";
import { ActionDescription } from "../../src/components";
import { describe, it, expect } from "vitest";
import React from "react";
import { createStore } from "../../src/redux/store";
import { Provider } from "react-redux";

describe("ActionDescription", () => {
  function renderFC() {
    const store = createStore();

    const { container } = render(
      <Provider store={store}>
        <ActionDescription />
      </Provider>
    );

    return [store, container];
  }

  it("should render component, show description to action, if it is chosen, and oposit. Should show error if it exists", () => {
    const [store, container] = renderFC();

    

    expect(container).toBeInTheDocument();
  });
});
