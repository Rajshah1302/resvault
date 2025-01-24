import Hero from "./__components/Hero";
import { HeroParallaxDemo } from "./__components/Parallax";
import { WorldMapDemo } from "./__components/WorldMap";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
          <HeroParallaxDemo/>
        <div className="container justify-center mx-auto my-0">
          <WorldMapDemo />
        </div>
      </div>
    </>
  );
}
