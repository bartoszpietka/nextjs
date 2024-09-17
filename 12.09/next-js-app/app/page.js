import Image from "next/image";
import ItemList from "./components/ItemList";
import TextBlock from "./components/TextBlock";
import ImageWithText from "./components/ImageWithText";

export default function Home() {
  return (
    <main>
      <ImageWithText imageUrl={"https://us-tuna-sounds-images.voicemod.net/eb124d63-e3cb-43eb-80da-bb30b5838f88-1724581926327.jpeg"} alt={"obraz"} text={"Strona główna"}/><br></br>
      <TextBlock heading={"Hello World!"} content={"Lorem ipsum"}/><br></br>
      <ItemList items={["Drive", "Blade Runner 2049", "Bullet Train"]}/>
    </main>
  );
}
