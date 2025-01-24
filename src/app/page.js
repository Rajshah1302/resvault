import Hero from "./__components/Hero";
import { WorldMapDemo } from "./__components/WorldMap";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <div className="container justify-center mx-auto">
          <WorldMapDemo />
        </div>
      </div>
    </>
  );
}
