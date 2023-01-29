import React, { useContext, createContext, useState, useEffect } from "react";
import { auth } from "../config/firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { createUserWithEmailAndPassword } from "firebase/auth";

const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const router = useRouter();

  const signIn = async (loginMethod, redirect) => {
    const provider = new loginMethod();
    try {
      await signInWithPopup(auth, provider);
      toast.success(`Logged In!`);
      redirect && router.push(redirect);
    } catch (err) {
      toast.error(err.message);
    }
  };

  const registerMail = async (email, pass) => {
    await createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredentials) => {
        setUser((prev) => userCredentials.user);
        toast.success("Register Successful!");
      })
      .catch((error) => toast.error(error.message));
  };
  const signInMail = async (email, pass, redirect) => {
    await signInWithEmailAndPassword(auth, email, pass)
      .then((userCredentials) => {
        toast.success("Sign In Successful!");
        redirect && router.push(redirect);
      })
      .catch((error) => toast.error(error.message));
  };
  const logOut = () => {
    try {
      signOut(auth);
      toast.success(`Logged Out!`);
      router.push("/login");
    } catch {
      toast.error("Couldn't Logout!");
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser((prev) => currentUser);
      //console.log(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ signIn, signInMail, registerMail, logOut, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
