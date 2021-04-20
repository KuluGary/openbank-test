import React from "react"
import { useSelector, useDispatch } from "react-redux";
import ProtectPassword from "assets/img/group.svg";
import MasterKey from "assets/img/group-3.svg";
import { useTranslation } from "react-i18next";
import { setTerms } from "store/terms";
import "./style.scss";
import { Checkbox, FormControlLabel } from "@material-ui/core";

/**
 * Function component for rendering the first step
 * of the wizard
 */
const Step1 = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { terms } = useSelector(state => state.terms);

    const handleCheckChange = () => {
        dispatch(setTerms(!terms));
    }

    return (
        <div className="step1" data-testid="step1">
            <h1>{t("wizard.header")}</h1>
            <div className="step1-wrapper">
                <div className="step1-wrapper-image-container">
                    <img alt="Protect your password" src={ProtectPassword} />
                    <p>{t("wizard.step1.protect_password")}</p>
                </div>
                <div className="step1-wrapper-image-container">
                    <img alt="Protect your password" src={MasterKey} />
                    <p>{t("wizard.step1.master_key")}</p>
                </div>
            </div>
            <h4>{t("wizard.step1.how_it_works_header")}</h4>
            <p>{t("wizard.step1.how_it_works")}</p>

            <h4>{t("wizard.step1.which_data_header")}</h4>
            <p>{t("wizard.step1.which_data")}</p>
            <div className="step1-checkbox">
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={terms}
                            onChange={handleCheckChange} />
                    }
                    label={t("wizard.step1.checkbox")}
                />

            </div>
        </div>
    )
}

export default Step1;