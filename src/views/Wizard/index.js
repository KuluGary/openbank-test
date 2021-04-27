import React from "react"
import { Paper, Divider } from "@material-ui/core";
import Stepper from "../Stepper";
import Step1 from "../Steps/Step1";
import Step2 from "../Steps/Step2";
import Step3 from "../Steps/Step3";
import Buttons from "../Buttons";
import { useHistoryState } from "hocs/useHistoryState";
import "./style.scss";

/**
 * Component that controls all three main sub-components 
 * of the wizard
 */
export default function Wizard() {
    const steps = [Step1, Step2, Step3];
    const [activeStep, setActiveStep] = useHistoryState("step", 0);
    const SelectedComponent = steps[activeStep];

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    }

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    }

    return (
        <Paper
            className="wizard"
            data-testid="wizard">
            <Stepper
                steps={steps}
                activeStep={activeStep} />

            <SelectedComponent />

            <Divider />
            <div className="button-container">
                <Buttons
                    activeStep={activeStep}
                    handleBack={handleBack}
                    handleNext={handleNext}
                />
            </div>
        </Paper>
    )
}

