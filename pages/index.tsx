import type { NextPage } from "next";
import Head from "next/head";
import { Skills } from "../components/Skills";
import { Landing } from "../components/Landing";
import { Links } from "../components/Links";
import style from "../styles/Home.module.css";
import { Titles } from "../components/Titles";

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
        <section className="bg-yellow-50 text-black">
          <Titles />
        </section>
        <Links />
        <section className="bg-yellow-50 text-black">
          <Skills />
        </section>
      </main>
      <footer>
        <div className="container mx-auto p-4 text-center text-sm">
          © 2024 Nikolas Tomaštík. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
