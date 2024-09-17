import Image from "next/image";
import ItemList from "../components/ItemList";

export default function About() {
  return (
    <main><ItemList items={["Football", "Games", "Music"]}/></main>
  );
}
