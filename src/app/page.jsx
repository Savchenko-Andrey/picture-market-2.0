
import About from "@/libs/components/abuot/about";
import Cards from "@/libs/components/cards/cards";
import Description from "@/libs/components/descripion/desciption";
import Gallary from "@/libs/components/gallery/gallery";
import Hero from "@/libs/components/hero/hero";
import UploadPhoto from "@/libs/modal/modal-photo/modal-photo";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Cards />
      <Gallary />
      <Description />
    </>
  );
}
