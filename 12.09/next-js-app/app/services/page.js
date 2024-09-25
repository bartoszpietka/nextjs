"use client"
import { useState } from 'react';
import Image from "next/image";
import ItemList from "../components/ItemList";
import FilterableList from "../components/FilterableList";

export default function Services() {
  return (
    <main>
      <FilterableList items={[{name: "Usługa 1"}, {name: "Usługa 2"}, {name: "Usługa 3"}]}/>
    </main>
  );
}
