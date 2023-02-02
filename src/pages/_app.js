import "@/styles/globals.css";
import { StateContext } from "../../context/StateContext";
import { AuthContextProvider } from "../../context/AuthContext";
import { Toaster } from "react-hot-toast";
import Layout from "components/Layout/Layout";
import React from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const isRemoveLayout = [`/admin-dashboard`].includes(router.pathname);
  console.log(isRemoveLayout);
  const LayoutComponent = isRemoveLayout ? React.Fragment : Layout;

  return (
    <AuthContextProvider>
      <StateContext>
        <LayoutComponent>
          <Toaster />
          <Component {...pageProps} />
        </LayoutComponent>
      </StateContext>
    </AuthContextProvider>
  );
}
