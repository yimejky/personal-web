import "../styles/globals.css";
import type { AppProps } from "next/app";

import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
config.autoAddCss = false;

library.add(fab, faPerson);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
