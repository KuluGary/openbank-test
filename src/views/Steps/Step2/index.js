import React from "react"
import { useSelector, useDispatch } from "react-redux";
import { TextField, IconButton, InputAdornment } from "@material-ui/core"
import { Visibility, VisibilityOff } from "@material-ui/icons"
import { useTranslation } from "react-i18next";
import {
    setPassword, setPasswordHint, setPasswordError, setPasswordHintError
} from "store/password";
import "./style.scss"

/**
 * Function component for rendering the first step
 * of the wizard
 */
export default function Step2() {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const {
        password,
        passwordHint,
        passwordError
    } = useSelector(state => state.password);
    const [showPassword, setShowPassword] = React.useState(false);
    const [passwordCheck, setPasswordCheck] = React.useState("");
    const maxPasswordHintLength = 255;
    const passwordRegex = /^[a-zA-Z0-9]{8,24}$/;

    React.useEffect(() => {
        if (password.length > 0 || passwordCheck.length > 0) {
            let errorMessage = null;
            if (password !== passwordCheck) {
                errorMessage = t("wizard.step2.pass_error_match");

            } else if (!passwordRegex.test(password)) {
                errorMessage = t("wizard.step2.pass_error_regex");
            }

            dispatch(setPasswordError(errorMessage));
        }
    }, [password, passwordCheck, dispatch, passwordRegex, t])

    const handlePasswordChange = (e) => dispatch(setPassword(e.target.value));

    const handleHintChange = (e) => {
        dispatch(setPasswordHint(e.target.value));

        if (passwordHint.length <= maxPasswordHintLength) {
            dispatch(setPasswordHintError(false));
        } else {
            dispatch(setPasswordHintError(true));
        }
    }

    return (
        <div className="step2">
            <h1>{t("wizard.header")}</h1>
            <div className="step2-wrapper">
                <p>{t("wizard.step1.how_it_works")}</p>
                <div className="step2-wrapper-flex">
                    <div className="step2-wrapper-field">
                        <TextField
                            fullWidth
                            error={!!passwordError}
                            label={t("wizard.step2.create_pass_label")}
                            variant="outlined"
                            color="secondary"
                            type={showPassword ? "text" : "password"}
                            onChange={handlePasswordChange}
                            helperText={passwordError || " "}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">
                                    <IconButton
                                        onClick={() => setShowPassword(!showPassword)}
                                        aria-label="toggle password visibility">
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }} />
                    </div>
                    <div className="step2-wrapper-field">
                        <TextField
                            fullWidth
                            label={t("wizard.step2.repeat_pass")}
                            variant="outlined"
                            color="secondary"
                            type={showPassword ? "text" : "password"}
                            onChange={(e) => setPasswordCheck(e.target.value)}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">
                                    <IconButton
                                        onClick={() => setShowPassword(!showPassword)}
                                        aria-label="toggle password visibility">
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }} />
                    </div>
                </div>
            </div>
            <div className="step2-wrapper">
                <p>{t('wizard.step2.hint_explanation')}</p>
                <TextField
                    fullWidth
                    variant="outlined"
                    color="secondary"
                    value={passwordHint}
                    error={passwordHint.length >= maxPasswordHintLength}
                    helperText={`${passwordHint.length}/${maxPasswordHintLength}`}
                    label={t('wizard.step2.hint_label')}
                    onChange={handleHintChange}
                />
            </div>
        </div>
    )
}
