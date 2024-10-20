import { render, screen } from "@testing-library/react";
import { ActionDescription, GetBtn } from "../../src/components";
import { describe, it, expect } from "vitest";
import React from "react";
import { Provider } from "react-redux";
import { ActionDescriptionTexts } from "../../src/constants";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { store } from "../../src/redux/store";

describe("ActionDescription", () => {
  function renderFC() {
    const { container } = render(
      <>
        <Provider store={store}>
          <ActionDescription />
          <GetBtn />
        </Provider>
      </>
    );

    vi.mock("../redux/store", () => store);

    return container;
  }

  it("should render components GetButton and ActionDescription, show description to action, if it is chosen, and oposit. Should show error if it exists", async () => {
    renderFC();

    const getButton = screen.getByRole("button");
    const description = screen.getByRole("paragraph");

    expect(description).toHaveTextContent(ActionDescriptionTexts[""]);

    const user = userEvent.setup();
    await user.click(getButton);

    expect(description).toHaveTextContent(ActionDescriptionTexts.get);
  });
});
