import Image from "next/image";
import ImageWithText from "../components/ImageWithText";
import SimpleForm from "../components/SimpleForm";

export default function Contact() {
  return (
    <main>
      <ImageWithText imageUrl={"https://thumbs.dreamstime.com/z/kontaktuje-si%C4%99-my-29374720.jpg?ct=jpeg"} alt={"kontakt"} text={"Kontakt"}/>
      <SimpleForm label={"Skontaktuj się z nami za pomocą emaila!"} placeholder={"Wpisz swój adres email"}/>
    </main>
  );
}
