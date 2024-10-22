import { render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../../src/redux/store";
import { Input } from "../../src/components";

describe("Input", () => {
  beforeAll(() => {
    render(
      <Provider store={store}>
        <Input />
      </Provider>
    );
  });
  it("should handle type in action and submit action", async () => {
    const addressInput = screen.getByRole("textbox", { name: /address/i });
    const textInput = screen.getByRole("textbox", { name: /put/i });
    const submitButton = screen.getByRole("button");
    const user = global.userEvent.setup();

    await user.type(addressInput, "id-1");
    await user.type(textInput, "some text");
    await user.click(submitButton);

    const storeValues = store.getState();

    expect(storeValues.inp_data.inp_address).toBe("id-1");
    expect(storeValues.inp_data.inp_text.trim()).toBe("some text");
  });
});
