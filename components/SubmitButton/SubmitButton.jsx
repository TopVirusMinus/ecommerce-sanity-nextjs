import React from "react";
import Styles from "./SubmitButton.module.scss";
const SubmitButton = ({ isValid, text, handleClick }) => {
  return (
    <button
      className={`${Styles.submit} ${Styles.btn} ${
        !isValid && Styles.disabled
      }`}
      type="submit"
      onClick={() => handleClick()}
      disabled={!isValid}
    >
      {text}
    </button>
  );
};

export default SubmitButton;
