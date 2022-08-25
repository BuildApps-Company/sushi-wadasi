import type { NextPage } from "next";
import Head from "next/head";
import MainPage from "../components/homepage/MainPage";

const Main: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sushi Wadasi</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Sushi shop in Orillia, Ontario" />
        <meta charSet="utf-8" />
        <meta
          name="keywords"
          content="sushi, japanese food, asian cuisine, sushi shop, sushi Orillia, sushi Ontario"
        />
      </Head>
      <MainPage />
    </>
  );
};

export default Main;
