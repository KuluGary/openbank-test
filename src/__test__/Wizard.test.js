import React from "react";
import Wizard from "views/Wizard";

import { render, cleanup } from "./test-utils";
import "@testing-library/jest-dom/extend-expect";

describe("Wizard", () => {
  afterEach(cleanup);

  it("matches snapshot", () => {
    const div = document.createElement("div");
    const component = render(<Wizard />, div);
    expect(component.container).toMatchSnapshot();
  })

  it("renders component", () => {
    const { getByTestId } = render(<Wizard />);

    expect(getByTestId("wizard")).toBeInTheDocument();
  })
})

