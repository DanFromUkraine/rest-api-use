import { Button } from "../../src/components";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { vi } from "vitest";
import React from "react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../../src/redux/store";

describe("Button", () => {
  it("should show actionType text and onClick from props must be called",  async () => {
    const callback = vi.fn(() => {});
    render(
      <Provider store={store}>
        <Button actionType="post" onClick={callback} />
      </Provider>
    );

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent(/post/i);

    const user = userEvent.setup();
     await user.click(button);

    expect(callback).toHaveBeenCalled();
  });
});
