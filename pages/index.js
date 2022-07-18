import Head from "next/head";

import Articles from "../components/articles";
import AboutUs from "../components/about-us";
import HomePage from "../components/home-page";
import Layout from "../components/layout/layout";

function Home(props) {
  return (
    <>
      <Head>
        <title>سایت ...</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <HomePage />
        <Articles  articlesList={props.articlesList}/>
        <AboutUs />
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  let res = await fetch('https://62938cc54e324aacf6dc89d4.endapi.io/articles');
  let errorCode = res.ok ? false : res.status;
  let data = await res.json();
  let articlesList = data.data.slice(0,3);
  
  return {
      props : {
          errorCode,
          articlesList
      }
  }
}

export default Home;