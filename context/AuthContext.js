import React, { useContext, createContext, useState, useEffect } from "react";
import { auth } from "../config/firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const router = useRouter();
  const userCollectionRef = collection(db, "Users");

  const signIn = async (loginMethod, redirect) => {
    const provider = new loginMethod();
    try {
      const signIn = await signInWithPopup(auth, provider);
      //console.log(signIn.user.providerData[0].uid);
      console.log(signIn.user.uid);
      await setDoc(doc(db, "Users", signIn.user.uid), {});
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

  const resetPassword = async (email, redirect) => {
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success(`Password reset email sent successfully!`);
      redirect && router.push(redirect);
    } catch (err) {
      toast.error(err.message);
    }
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
      value={{ signIn, signInMail, registerMail, logOut, user, resetPassword }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
