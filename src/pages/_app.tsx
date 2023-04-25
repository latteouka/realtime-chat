import { type AppType } from "next/app";
import { api } from "@/utils/api";
import "@/styles/globals.css";

import Head from "next/head";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main>
      <Head>
        <title>Next Template</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </main>
  );
};

export default api.withTRPC(MyApp);
