import "@/styles/globals.css";
import { StateContext } from "../../context/StateContext";
import { AuthContextProvider } from "../../context/AuthContext";
import { Toaster } from "react-hot-toast";
import Layout from "components/Layout/Layout";
export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <StateContext>
        <Layout>
          <Toaster />
          <Component {...pageProps} />
        </Layout>
      </StateContext>
    </AuthContextProvider>
  );
}
