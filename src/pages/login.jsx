import React, { useState, useRef } from "react";
import Styles from "../styles/login.module.scss";
import { BsGoogle } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import { UserAuth } from "context/AuthContext";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import Link from "next/link";
import SubmitButton from "../../components/SubmitButton/SubmitButton";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { signIn, signInMail, registerMail } = UserAuth();
  const [isRegister, setIsRegister] = useState(true);
  const [isValidState, setIsValidState] = useState(false);

  const isValid = useRef(false);
  const handleRegisterToggle = (registerMode) => {
    setIsRegister((prev) => registerMode);
    setUsername((prev) => "");
    setEmail((prev) => "");
    setPassword((prev) => "");
    setConfirmPassword((prev) => "");
    isValid.current = false;
  };

  const validCharacters = /^[a-zA-Z ]+$/;
  const validEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  isRegister
    ? username.length > 0 &&
      validEmail.test(email) &&
      password.length > 0 &&
      confirmPassword.length > 0 &&
      password === confirmPassword
      ? (isValid.current = true)
      : (isValid.current = false)
    : validEmail.test(email) && password.length > 0
    ? (isValid.current = true)
    : (isValid.current = false);

  isValid.current && !isValidState ? setIsValidState((prev) => true) : false;
  !isValid.current && isValidState ? setIsValidState((prev) => false) : false;

  return (
    <div className={`${Styles.signup}`}>
      <div className={Styles.signup_connect}>
        <h1>Create your account</h1>
        <div className={Styles.login_btns}>
          <a
            href="#"
            className={`${Styles.btn} ${Styles.btn_social} ${Styles.btn_google}`}
            onClick={(e) => signIn(GoogleAuthProvider, "/")}
          >
            <i className={`${Styles.fa} ${Styles.fa_google}`}>
              <BsGoogle />
            </i>{" "}
            Sign in with Google
          </a>
          <a
            href="#"
            className={`${Styles.btn} ${Styles.btn_social} ${Styles.btn_facebook}`}
            onClick={(e) => signIn(FacebookAuthProvider, "/")}
          >
            <i className={`${Styles.fa} ${Styles.fa_facebook}`}>
              <ImFacebook />
            </i>{" "}
            Sign in with Facebook
          </a>
          <a
            href="#"
            className={`${Styles.btn} ${Styles.btn_social} ${Styles.btn_mail}`}
            onClick={(e) => signInMail(email, password, "/")}
          >
            <i className={`${Styles.fa} ${Styles.fa_facebook}`}>
              <AiOutlineMail />
            </i>{" "}
            Sign in with Email
          </a>
        </div>
      </div>
      <div className={Styles.signup_classic}>
        <h2>Or use the classical way</h2>
        <form className={Styles.form} autoComplete="new-password">
          {isRegister ? (
            <>
              <span className={`${username ? Styles.hidden : Styles.unhidden}`}>
                * required
              </span>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                type="text"
                name="username"
                required
              />
              <span className={`${email ? Styles.hidden : Styles.unhidden}`}>
                * required
              </span>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Email address"
                type="email"
                name="email"
                required
              />
              {
                <span
                  className={`${password ? Styles.hidden : Styles.unhidden}`}
                >
                  * required
                </span>
              }
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                type="password"
                name="password"
                required
              />
              {password !== confirmPassword ? (
                <span
                  className={`${
                    password !== confirmPassword
                      ? Styles.unhidden
                      : Styles.hidden
                  }`}
                >
                  Passwords do not match
                </span>
              ) : (
                <span
                  className={`${password ? Styles.hidden : Styles.unhidden}`}
                >
                  * required
                </span>
              )}
              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                type="Password"
                name="confirmPassword"
                required
              />
              <SubmitButton
                isValid={isValidState}
                text={"Register"}
                handleClick={() => {
                  registerMail(email, password);
                }}
              />
            </>
          ) : (
            <>
              <span className={`${email ? Styles.hidden : Styles.unhidden}`}>
                * required
              </span>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                type="email"
                name="email"
                required
              />
              <span className={`${password ? Styles.hidden : Styles.unhidden}`}>
                * required
              </span>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                type="password"
                name="password"
                required
              />
              <SubmitButton
                isValid={isValidState}
                text={"Log In"}
                handleClick={() => {
                  signInMail(email, password, "/");
                }}
              />
            </>
          )}
        </form>
        {isRegister ? (
          <>
            <p>
              Already have an account?{" "}
              <a
                className={Styles.toggleRegister}
                onClick={() => handleRegisterToggle(false)}
              >
                Login
              </a>
            </p>
            <p>
              <Link href="/reset-password" className={Styles.toggleRegister}>
                Forgot your password?
              </Link>
            </p>
          </>
        ) : (
          <p>
            Don&apos;t have an account?{" "}
            <a
              className={Styles.toggleRegister}
              onClick={() => handleRegisterToggle(true)}
            >
              Register
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
