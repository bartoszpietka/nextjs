import Image from "next/image";
import ItemList from "./components/ItemList";
import TextBlock from "./components/TextBlock";
import ImageWithText from "./components/ImageWithText";
import SimpleForm from "./components/SimpleForm";
import ConditionalDisplay from "./components/ConditionalDisplay";
import ListWithObjects from "./components/ListWithObjects";

export default function Home() {
  return (
    <main>
      <ImageWithText imageUrl={"https://us-tuna-sounds-images.voicemod.net/eb124d63-e3cb-43eb-80da-bb30b5838f88-1724581926327.jpeg"} alt={"obraz"} text={"Strona główna"}/><br></br>
      <TextBlock heading={"Hello World!"} content={"Lorem ipsum"}/><br></br>
      <ItemList items={["Baby Driver", "Drive", "Blade Runner 2049"]}/><br></br>
      <SimpleForm label={"label"} placeholder={"placeholder"}/>
      <ConditionalDisplay isVisible={true}/>
      <ListWithObjects items={[{name: "2011", value: "4"}, {name: "2015", value: "8"}, {name: "2019", value: "12"}]}/>
    </main>
  );
}
