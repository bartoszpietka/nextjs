"use client"
import { useState } from 'react';
import ItemList from "./components/ItemList";
import TextBlock from "./components/TextBlock";
import ImageWithText from "./components/ImageWithText";
import SimpleForm from "./components/SimpleForm";
import ConditionalDisplay from "./components/ConditionalDisplay";
import ListWithObjects from "./components/ListWithObjects";
import DynamicButton from "./components/DynamicButton";
import ThemeSwitcher from "./components/ThemeSwitcher";

export default function Home() {
  const [theme, setTheme] = useState("light");

  const themeChange = (newTheme) => {
    document.getElementById("main").style.backgroundColor = theme === "dark" ? "#0a0a0a" : "white";
    document.getElementById("main").style.color = theme === "dark" ? "white" : "#0a0a0a";
    setTheme(newTheme);
  };

  const changeFont = () => {
    document.getElementById("main").style.fontFamily = "monospace"
    document.getElementById("main").style.fontSize = "16px"
  }

  return (
    <main id="main">
      <ThemeSwitcher onThemeChange={themeChange}/>
      <ImageWithText imageUrl={"https://us-tuna-sounds-images.voicemod.net/eb124d63-e3cb-43eb-80da-bb30b5838f88-1724581926327.jpeg"} alt={"obraz"} text={"Strona główna"}/><br></br>
      <TextBlock heading={"Hello World!"} content={"Lorem ipsum"}/><br></br>
      <ItemList items={["Baby Driver", "Drive", "Blade Runner 2049"]}/><br></br>
      <SimpleForm label={"label"} placeholder={"placeholder"}/>
      <ConditionalDisplay isVisible={true}/>
      <ListWithObjects items={[{name: "2011", value: "4"}, {name: "2015", value: "8"}, {name: "2019", value: "12"}]}/><br></br>
      <DynamicButton label={"Kliknięto na stronie głównej"} onClick={changeFont}></DynamicButton>
    </main>
  );
}
