import React from "react";
import ProtectPassword from "assets/img/group.svg";
import MasterKey from "assets/img/group-3.svg";
import { useTranslation } from "react-i18next";
import "./style.scss";
import { Checkbox, FormControlLabel } from "@material-ui/core";

/**
 * Function component for rendering the first step
 * of the wizard
 */
const Step1 = ({ validator, setValidator }) => {
  const { t } = useTranslation();
  
  // Set default state of current validator to false
  React.useEffect(() => setValidator(false), [setValidator]);

  const handleCheckChange = () => {
    setValidator(!validator);
  };

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
              checked={validator}
              onChange={handleCheckChange}
              inputProps={{
                "data-testid": "privacy-checkbox",
              }}
            />
          }
          label={t("wizard.step1.checkbox")}
        />
      </div>
    </div>
  );
};

export default Step1;
