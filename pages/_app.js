import "../styles/globals.css";
import "../styles/swiper.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Layout from "../helpers/Layout";
import { SSRProvider } from "react-bootstrap";
import DarkModeContextProvider from "../store/dark-mode-context";

function MyApp({ Component, pageProps }) {
  return (
    <DarkModeContextProvider>
      <SSRProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SSRProvider>
    </DarkModeContextProvider>
  );
}

export default MyApp;
