import { Carousel } from "./components/Carousel";
import { Menu } from "./components/Menu";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Carousel />
      <Menu />
    </main>
  );
}
