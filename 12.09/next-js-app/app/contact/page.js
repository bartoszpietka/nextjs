"use client"
import { useState } from 'react';
import Image from "next/image";
import ImageWithText from "../components/ImageWithText";
import SimpleForm from "../components/SimpleForm";
import DynamicButton from "../components/DynamicButton";

export default function Contact() {
  let f = 17
  const changeColor = () => {
    document.getElementById("main").style.fontSize = f+"px";
    f++;
  };

  return (
    <main id="main">
      <ImageWithText imageUrl={"https://thumbs.dreamstime.com/z/kontaktuje-si%C4%99-my-29374720.jpg?ct=jpeg"} alt={"kontakt"} text={"Kontakt"}/>
      <SimpleForm label={"Skontaktuj się z nami za pomocą emaila!"} placeholder={"Wpisz swój adres email"}/>
      <DynamicButton label={"Kliknięto na stronie kontaktowej"} onClick={changeColor}></DynamicButton>
    </main>
  );
}
