import Image from "next/image";
import ItemList from "../components/ItemList";
import ConditionalDisplay from "../components/ConditionalDisplay";

export default function About() {
  return (
    <main>
      <ItemList items={["Football", "Games", "Music"]}/>
      <ConditionalDisplay isVisible={false}/>
    </main>
  );
}
