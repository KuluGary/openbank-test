import React from "react";
import Stepper from "views/Stepper";
import Step1 from "views/Steps/Step1";
import Step2 from "views/Steps/Step2";
import Step3 from "views/Steps/Step3";

import { render, cleanup } from "./test-utils";
import "@testing-library/jest-dom/extend-expect";

describe("Stepper", () => {
    afterEach(cleanup);
    const steps = [Step1, Step2, Step3];
    const activeStep = 0;

    it("matches snapshot", () => {
        const div = document.createElement("div");
        const component = render(<Stepper steps={steps} activeStep={activeStep} />, div);
        expect(component.container).toMatchSnapshot();
    })

    it("renders component", () => {
        const { getByTestId } = render(<Stepper steps={steps} activeStep={activeStep} />);

        expect(getByTestId("stepper")).toBeInTheDocument();
    })

    it("renders the right amount of steps", () => {
        const { getAllByTestId } = render(<Stepper steps={steps} activeStep={activeStep} />);

        expect(getAllByTestId("step").length).toEqual(steps.length);            
    })
})