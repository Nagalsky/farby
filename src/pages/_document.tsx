import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="keywords"
          content="farby,laky,lazúry,omietky,stavebniny,železiarstvo,náradie,záhradné centrum,drogéria,podlahy,parkety,obklady,dlažby,nitra"
        />
        <meta
          name="description"
          content="✅ Vitajte na stránkach Obchodného centra L&Š Nitra - farby, železiarstvo, stavebniny, záhradné centrum, bývanie a drogéria otvorené 7 dní v týždni od 7:00 do 19:00!"
        />
        <meta property="og:site_name" content="Farby" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.farby.sk/" />
        <meta property="og:title" content="Farby" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Cache-control" content="public" />
      </Head>
      <body className="font-base text-neutral-900 antialiased dark:bg-dark-500 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
