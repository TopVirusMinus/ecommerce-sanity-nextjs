import React, { useState } from "react";
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

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { signIn, signInMail, registerMail } = UserAuth();
  const [isRegister, setIsRegister] = useState(true);

  const handleRegisterToggle = (registerMode) => {
    setIsRegister((prev) => registerMode);
    setUsername((prev) => "");
    setEmail((prev) => "");
    setPassword((prev) => "");
    setConfirmPassword((prev) => "");
  };
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
            onClick={(e) => signIn(createUserWithEmailAndPassword, "/")}
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
        <form className={Styles.form}>
          {isRegister ? (
            <>
              {!username && <span>* required</span>}
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                type="text"
                name="username"
                required
                className={Styles.input_field}
              />
              {!email && <span>* required</span>}
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                type="email"
                name="email"
                required
                className={Styles.input_field}
              />
              {!password && <span>* required</span>}
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                type="password"
                name="password"
                required
                className={Styles.input_field}
              />
              {!confirmPassword && <span>* required</span>}
              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                type="Password"
                name="confirmPassword"
                required
                className={Styles.input_field}
              />
              <button
                type="submit"
                className={Styles.btn}
                onClick={(e) => {
                  e.preventDefault();
                  registerMail(email, password);
                }}
                disabled={true}
              >
                Register
              </button>
            </>
          ) : (
            <>
              {!email && <span>* required</span>}
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                type="email"
                name="email"
                required
                className={Styles.input_field}
              />
              {!password && <span>* required</span>}
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                type="password"
                name="password"
                required
                className={Styles.input_field}
              />
              <button
                type="submit"
                className={Styles.btn}
                onClick={(e) => {
                  e.preventDefault();
                  signInMail(email, password, "/");
                }}
              >
                Login
              </button>
            </>
          )}
        </form>
        {isRegister ? (
          <p>
            Already have an account?{" "}
            <a
              className={Styles.toggleRegister}
              onClick={() => handleRegisterToggle(false)}
            >
              Login
            </a>
          </p>
        ) : (
          <p>
            Don&apos;t have an account?{" "}
            <button
              className={Styles.toggleRegister}
              onClick={() => handleRegisterToggle(true)}
              disabled={true}
            >
              Register
            </button>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
