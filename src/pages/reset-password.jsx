import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Styles from "../styles/resetPassword.module.scss";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { UserAuth } from "../../context/AuthContext";
const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [isValidState, setIsValidState] = useState(false);
  const { resetPassword } = UserAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const validEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  email && validEmail.test(email)
    ? !isValidState
      ? setIsValidState((prev) => true)
      : true
    : isValidState
    ? setIsValidState((prev) => false)
    : false;

  return (
    <div>
      <h1 className={Styles.heading}>Forgot Your Password</h1>
      <form className={Styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          className={Styles.input_field}
          onChange={(event) => setEmail(event.target.value)}
        />
        <SubmitButton
          isValid={isValidState}
          text={"Send Email"}
          onClick={() => setReset((prev) => true)}
          handleClick={() => resetPassword(email, "/login")}
        />
      </form>
      <div className={Styles.links}>
        <p className={Styles.link}>
          Remember your password?{" "}
          <Link className={Styles.href} href="/login">
            Sign In
          </Link>
        </p>
        <p className={Styles.link}>
          Do not have an account?{" "}
          <Link className={Styles.href} href="/login">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;
