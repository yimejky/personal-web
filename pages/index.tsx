import type { NextPage } from "next";
import Head from "next/head";
import { Skills } from "../components/Skills";
import { Landing } from "../components/Landing";
import { Links } from "../components/Links";
import style from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div
      className={`relative text-white flex h-full flex-col ${style["animated-background"]}`}
    >
      <Head>
        <title>Nikolas Tomaštík - Software Engineer</title>
        <meta name="description" content="my personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Landing />
        <Skills />
        <Links />
      </main>
      <footer>
        <div className="container mx-auto p-4 text-center text-sm">
          © 2022 Nikolas Tomaštík. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
