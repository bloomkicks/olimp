import DefaultHead from "@/components/head/DefaultHead";
import Layout from "@/components/layout/Layout";
import ThemeProvider from "@/components/layout/ThemeProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultHead />
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
