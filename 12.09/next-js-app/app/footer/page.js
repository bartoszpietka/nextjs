"use client"
import { useState } from 'react';
import Image from "next/image";
import TextBlock from "../components/TextBlock";

export default function Footer() {
  return (
    <main><TextBlock heading={"Welcome"} content={"This site is for learning nextjs"}/></main>
  );
}
