import React from "react";
import Wizard from "views/Wizard";

import { render, cleanup } from "./test-utils";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent } from "@testing-library/react";

describe("Wizard", () => {
  afterEach(cleanup);

  it("matches snapshot", () => {
    const div = document.createElement("div");
    const component = render(<Wizard />, div);
    expect(component.container).toMatchSnapshot();
  });

  it("renders component", () => {
    const { getByTestId } = render(<Wizard />);

    expect(getByTestId("wizard")).toBeInTheDocument();
  });

  it("navigates from step1 to step2", () => {
    const { getByTestId } = render(<Wizard />);

    expect(getByTestId("step1")).toBeInTheDocument();

    fireEvent.click(getByTestId("privacy-checkbox"));
    fireEvent.click(getByTestId("right-button"));

    expect(getByTestId("step2")).toBeInTheDocument();
  });
});
