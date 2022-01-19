import React from 'react'
import PropTypes from 'prop-types'
import { Stepper as MUIStepper, Step, StepLabel } from '@material-ui/core'
import './style.scss'

/**
 * Component that creates and controls the steps
 * Uses Material UI Stepper component
 * @param {Number} activeStep - current index of active step
 * @param {Array} step - Array of step components
 */
const Stepper = ({ activeStep, steps }) => (
    <div className="stepper" data-testid="stepper">
        <MUIStepper
            activeStep={activeStep}
            classes={{ root: 'stepper-container' }}>
            {steps.map((_, index) => (
                <Step
                    key={index}
                    data-testid="step">
                    <StepLabel />
                </Step>
            ))}
        </MUIStepper>
    </div>
)

Stepper.propTypes = {
  activeStep: PropTypes.number,
  steps: PropTypes.array
}

export default Stepper
