import React, { useState } from "react";
import Styles from "../styles/login.module.scss";
import { BsGoogle } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import { UserAuth } from "context/AuthContext";
import { useRouter } from "next/router";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { googleSignIn } = UserAuth();
  const router = useRouter();
  const handleLogin = async (e, loginFunction) => {
    await loginFunction();
    router.push("/");
  };

  return (
    <div className={`${Styles.signup}`}>
      <div className={Styles.signup_connect}>
        <h1>Create your account</h1>
        <div className={Styles.login_btns}>
          <a
            href="#"
            className={`${Styles.btn} ${Styles.btn_social} ${Styles.btn_google}`}
            onClick={(e) => handleLogin(e, googleSignIn)}
          >
            <i className={`${Styles.fa} ${Styles.fa_google}`}>
              <BsGoogle />
            </i>{" "}
            Sign in with Google
          </a>
          <a
            href="#"
            className={`${Styles.btn} ${Styles.btn_social} ${Styles.btn_facebook}`}
          >
            <i className={`${Styles.fa} ${Styles.fa_facebook}`}>
              <ImFacebook />
            </i>{" "}
            Sign in with Facebook
          </a>
          <a
            href="#"
            className={`${Styles.btn} ${Styles.btn_social} ${Styles.btn_mail}`}
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
          {!username && <span>* required</span>}
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            type="text"
            name="username"
            required
            className={Styles.username}
          />
          {!email && <span>* required</span>}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            type="email"
            name="email"
            required
            className={Styles.email}
          />
          {!password && <span>* required</span>}
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            name="password"
            required
            className={Styles.password}
          />
          {!confirmPassword && <span>* required</span>}
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            type="Password"
            name="confirmPassword"
            required
            className={Styles.password}
          />
          <button type="submit" className={Styles.btn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
