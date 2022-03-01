import About from "../components/About";
import Hero from "../components/Hero";
import Mandala from "../components/Mandala";
import Navbar from "../components/Navbar";
import Workshop from "../components/Workshop";
import Showcase from "../components/Showcase";
import Conn from "../components/Conn";
// import Crystals from "../components/Crystals";

export default function Home() {
  return (
    <div>

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
