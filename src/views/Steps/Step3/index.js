import React from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { CircularProgress } from '@material-ui/core'
import { submitForm } from 'services/api'
import success from 'assets/img/checked.svg'
import warning from 'assets/img/warning.svg'
import './style.scss'

/**
 * Function component for rendering the first step
 * of the wizard
 */
const Step3 = () => {
  const { t } = useTranslation()
  const [loading, setLoading] = React.useState(true)
  const [status, setStatus] = React.useState(200)
  const { password, passwordHint } = useSelector(state => state.password)

  React.useEffect(() => {
    submitForm(password, passwordHint)
      .then(({ status }) => {
        setStatus(status)
        setLoading(false)
      })
      .catch(({ status }) => {
        setStatus(status)
        setLoading(false)
      })
  }, [password, passwordHint])

  if (loading) {
    return (
            <div className="step3">
                <CircularProgress
                    color="secondary" />
            </div>
    )
  }

  if (status > 300) {
    return (
            <div className="step3">
                <div className="step3-wrapper">
                    <div className="step3-wrapper-image-container">
                        <img alt="Protect your password" src={warning} />
                        <div className="step3-wrapper-image-container-text">
                            <h2>{t('wizard.step3.warning_header')}</h2>
                            <p>{t('wizard.step3.warning')} </p>
                        </div>
                    </div>
                </div>
            </div>
    )
  }

  return (
        <div className="step3">
            <div className="step3-wrapper">
                <div className="step3-wrapper-image-container">
                    <img alt="Protect your password" src={success} />
                    <div className="step3-wrapper-image-container-text">
                        <h2>{t('wizard.step3.success_header')}</h2>
                        <p>{t('wizard.step3.success')}</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Step3
