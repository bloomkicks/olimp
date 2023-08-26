import Script from "next/script";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <meta name="charset" content="UTF-8" />
        <meta name="theme-color" content="#074FA5" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="/sitemap.xml"
        />
        {/* ICONS */}
        <link
          rel="icon"
          type="image/x-icon"
          sizes="128x128"
          href="/favicon.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="128x128"
          href="/favicon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/google-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="64x64"
          href="/favicon-64x64.png"
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
        <Script type="text/javascript" id="yandex-metrica" async>{`
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
