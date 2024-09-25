"use client"
import { useState } from 'react';
import Image from "next/image";
import ItemList from "../components/ItemList";
import ListWithObjects from "../components/ListWithObjects";
import FilterableList from "../components/FilterableList";

export default function Products() {
  return (
    <main>
      <ListWithObjects items={[{name: "Banan", value: "1,30zł"}, {name: "Jabłko", value: "0,80zł"}, {name: "Awokado", value: "4,20zł"}]}/>
      <FilterableList items={[{name: "Banan"}, {name: "Jabłko"}, {name: "Gruszka"}, {name: "Truskawka"}, {name: "Awokado"}, {name: "Śliwka"}, {name: "Pomidor"}, {name: "Malina"}]}/>
    </main>
  );
}
