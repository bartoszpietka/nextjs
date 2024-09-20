import Image from "next/image";
import ItemList from "../components/ItemList";
import ListWithObjects from "../components/ListWithObjects";

export default function About() {
  return (
    <main>
      <ListWithObjects items={[{name: "Banan", value: "1,30zł"}, {name: "Jabłko", value: "0,80zł"}, {name: "Awokado", value: "4,20zł"}]}/>
    </main>
  );
}
