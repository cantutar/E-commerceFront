import Head from "next/head";
import Discover from "../sections/Discover/Discover";
import Footer from "../sections/Footer/Footer";
import Landing from "../sections/Landing/Landing";
import Product from "../sections/Product/Product";

export default function Home({ data, fakeStoreData }) {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <Landing data={data} />
      <Discover data={data} />
      <Product data={fakeStoreData} />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  const fakeStoreApi = await fetch("https://fakestoreapi.com/products");
  const fakeStoreData = await fakeStoreApi.json();
  // res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate=59");
  return {
    props: { data, fakeStoreData },
  };
}
