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
        <title>Ximena - Egyedi mandala készítés</title>
        <meta
          name="description"
          content="Egyedi személyreszabott
          mandala készítés és foglalkozás."
        />
      </Head>
      <Navbar></Navbar>
      <Hero></Hero>
      <Mandala></Mandala>
      <About></About>
      <Workshop></Workshop>
      <Showcase></Showcase>
      {/* <Crystals></Crystals> */}
      <Conn></Conn>
    </div>
  );
}
