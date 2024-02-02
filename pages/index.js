import About from "../components/About";
import Hero from "../components/Hero";
import Mandala from "../components/Mandala";
import Navbar from "../components/Navbar";
import Workshop from "../components/Workshop";
import Showcase from "../components/Showcase";
import Conn from "../components/Conn";
import Head from "next/head";
// import Crystals from "../components/Crystals";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mandalafestés tanfolyam - Ximena</title>
        <meta
          name="description"
          content="Fedezd fel a mandalafestés szépségét! Kezdőknek szóló tanfolyamainkon, eszközeink és kellékeink segítségével alkothatsz vászonra vagy kőre. Csatlakozz workshopjainkhoz!"
        />
        <meta name="robots" content="index, follow" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mandalafestés tanfolyam - Ximena" />
        <meta property="og:url" content="https://ximena.hu" />
        <meta property="og:image" content="https://ximena.hu/og.jpg" />
        <meta
          property="og:description"
          content="Fedezd fel a mandalafestés szépségét! Kezdőknek szóló tanfolyamainkon, eszközeink és kellékeink segítségével alkothatsz vászonra vagy kőre. Csatlakozz workshopjainkhoz!"
        />
      </Head>
      <Navbar></Navbar>
      <main>
        <Hero></Hero>
        <Mandala></Mandala>
        <About></About>
        <Workshop></Workshop>
        <Showcase></Showcase>
        {/* <Crystals></Crystals> */}
        <Conn></Conn>
      </main>
    </div>
  );
}
