import Layout from "@/components/layout/Layout";
import ThemeProvider from "@/components/layout/ThemeProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
// import { Manrope, Inter, Roboto } from "next/font/google";

// const inter = Inter({
//   weight: ["300", "400"],
//   subsets: ["cyrillic"],
// });

// const manrope = Manrope({
//   weight: ["400", "800"],
//   subsets: ["cyrillic"],
// });

// const roboto = Roboto({
//   weight: ["400", "500"],
//   subsets: ["cyrillic"],
// })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
