import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { Button } from '@material-ui/core'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

/**
 * Component that renders buttons and handles navigation through
 * the wizard
 * @param {Number} activeStep - current index of active step
 * @param {Function} handleBack - handler function for backward navigation
 * @param {Function} handleNext - handler function for forward navigation
 */
export default function Buttons ({ activeStep, handleBack, handleNext, validator }) {
  const { t } = useTranslation()

  switch (activeStep) {
    case 0:
      return (
        <>
            <Button data-testid="left-button">
                {t('wizard.buttons.cancel')}
            </Button>
            <Button
                data-testid="right-button"
                variant="contained"
                color="secondary"
                disabled={!validator}
                onClick={handleNext}
            >
                <>
                    {t('wizard.buttons.next')}
                    <NavigateNextIcon />
                </>
            </Button>
        </>
      )
    case 1:
      return (
        <>
            <Button onClick={handleBack} data-testid="left-button">
                {t('wizard.buttons.back')}
            </Button>
            <Button
                variant="contained"
                color="secondary"
                disabled={!validator}
                onClick={handleNext}
                data-testid="right-button"
            >
                <>
                    {t('wizard.buttons.next')}
                    <NavigateNextIcon />
                </>
            </Button>
        </>
      )
    default:
      return (
        <Button onClick={handleBack} data-testid="right-button">
            {t('wizard.buttons.back')}
        </Button>
      )
  }
}

Buttons.propTypes = {
  activeStep: PropTypes.number,
  handleBack: PropTypes.func,
  handleNext: PropTypes.func
}
