import Script from "next/script";
import { Html, Head, Main, NextScript } from "next/document";

const ASSET_PREFIX = process.env.ASSET_PREFIX || "/olimp/dist";

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <meta name="charset" content="UTF-8" />
        <meta name="theme-color" content="#074FA5" />
        <link rel="manifest" href={ASSET_PREFIX + "/manifest.json"} />
        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href={ASSET_PREFIX + "/sitemap.xml"}
        />
        {/* ICONS */}
        <link
          rel="icon"
          type="image/x-icon"
          sizes="128x128"
          href={ASSET_PREFIX + "/favicon.ico"}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="128x128"
          href={ASSET_PREFIX + "/favicon.png"}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="180x180"
          href={ASSET_PREFIX + "/apple-touch-icon.png"}
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="180x180"
          href={ASSET_PREFIX + "/apple-touch-icon.png"}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href={ASSET_PREFIX + "/google-chrome-192x192.png"}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="64x64"
          href={ASSET_PREFIX + "/favicon-64x64.png"}
        />
        {/* ICONS */}
        {/* ENGINES */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;600&family=Manrope:wght@800&family=Roboto:wght@300;400;700&display=swap"
          rel="stylesheet"
        ></link>
        <Script type="text/javascript" id="yandex-metrica">{`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(93568469, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true
            });
        `}</Script>
        {/* ENGINES */}
        {/* <Script type="text/javascript" id="">
          {`
            window.addEventListener("load", () => {
              if (navigator.hasOwnProperty("serviceWorker")) {
                navigator.serviceWorker.register("/sw.js")
                console.log(navigator.serviceWorker)
              }
            })
          `}
        </Script> */}
      </Head>
      <body>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/93568469"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
