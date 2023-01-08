import type { NextPage } from 'next';
import Head from 'next/head';

import Header from '../components/Header';
import Landing from '../components/Landing';
import Cuisines from '../components/Cuisines';
import Recipes from '../components/Recipes';
import Search from '../components/Search';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>The Global Pantry - Food of the World</title>
        <meta content="Example" name="description" />
        <meta property="og:url" content="example.com" />
        <meta property="og:description" content="Example" />
        <meta property="og:title" content="Example" />
        <meta property="og:image" content="" />
        <link rel="shortcut icon" href="public/images/favicon.png" />
      </Head>
      <div className="h-full leading-normal text-gray-600">
        <div
          className="absolute top-0 left-0 right-0 bg-no-repeat bg-cover shadow-lg -bottom-full brightness-90 filter md:bottom-0 md:bg-center md:brightness-100"
          style={{
            backgroundImage: "url('images/splash.jpeg')",
            zIndex: -1,
          }}
        />
        <Header />
        <Landing />
        <Cuisines />
        <Recipes />
        <Search />
        <Footer />
      </div>
    </>
  );
};

export default Home;
