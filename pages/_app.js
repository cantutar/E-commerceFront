import "../styles/globals.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Layout from "../helpers/Layout";
import { SSRProvider } from "react-bootstrap";

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </SSRProvider>
  );
}

export default MyApp;
