import React from "react";
import { Paper, Divider } from "@material-ui/core";
import Stepper from "../Stepper";
import Step1 from "../Steps/Step1";
import Step2 from "../Steps/Step2";
import Step3 from "../Steps/Step3";
import Buttons from "../Buttons";
import { useHistoryState } from "hooks/useHistoryState";
import "./style.scss";

/**
 * Component that controls all three main sub-components
 * of the wizard
 */

export default function Wizard() {
  // To add a new step, import it and include it in the
  // steps array in the correct index
  const steps = [Step1, Step2, Step3];
  const [validator, setValidator] = React.useState(false);
  const [activeStep, setActiveStep] = useHistoryState("step", 0);
  const SelectedComponent = steps[activeStep];

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Paper className="wizard" data-testid="wizard">
      <Stepper steps={steps} activeStep={activeStep} />

      <SelectedComponent validator={validator} setValidator={setValidator} />

      <Divider />
      <div className="button-container">
        <Buttons
          activeStep={activeStep}
          handleBack={handleBack}
          handleNext={handleNext}
          validator={validator}
        />
      </div>
    </Paper>
  );
}
