import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Button } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


/**
 * Component that renders buttons and handles navigation through
 * the wizard
 * @param {Number} activeStep - current index of active step
 * @param {Function} handleBack - handler function for backward navigation
 * @param {Function} handleNext - handler function for forward navigation
 */
export default function Buttons({ activeStep, handleBack, handleNext }) {
    const { t } = useTranslation();
    const { terms } = useSelector(state => state.terms);
    const { password, passwordError, passwordHintError } = useSelector(state => state.password);

    const step1Validator = () => {
        return terms;
    }

    const step2Validator = () => {        
        return password.length <= 0 || passwordError || passwordHintError;
    }

    switch (activeStep) {
        case 0:
            return (
                <>
                    <Button onClick={() => console.log("Cancela el wizard")}>
                        {t("wizard.buttons.cancel")}
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        disabled={!step1Validator()}
                        onClick={handleNext}
                    >
                        <>
                            {t("wizard.buttons.next")}
                            <NavigateNextIcon />
                        </>
                    </Button>
                </>
            )
        case 1:
            return (
                <>
                    <Button onClick={handleBack} >
                        {t("wizard.buttons.back")}
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        disabled={step2Validator()}
                        onClick={handleNext}
                    >
                        <>
                            {t("wizard.buttons.next")}
                            <NavigateNextIcon />
                        </>
                    </Button>
                </>
            )
        default:
            return (
                <Button onClick={handleBack} >
                    {t("wizard.buttons.back")}
                </Button>
            )

    }
}
