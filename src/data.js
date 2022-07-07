import MenuImg from "./assets/1.jpg";
import Mieszalnik from "./assets/mieszalnik1.jpg";
import { BsDot } from "react-icons/bs";
export const menuDetails = {
  image: <MenuImg />,
  title: "Tu znajdziesz nowe i ciekawe rozwiązania",
  subtitle:
    "Profesjonalne marki farb do wnętrz i na zewnątrz. Szerokie spektrum specjalistycznych produktów, które zostały opracowane aby spostać wymagań różnorodnych podłoży",
  buttonText: "Kup teraz",
};

export const statsDetails = [
  {
    value: "250",
    text: "dystrubutorów",
  },
  { value: "30", text: "lat doświadczenia" },
  {
    value: "10+",
    text: "kategorii farb",
  },
];

export const features = {
  title: "Nowoczesne farby do różnych powierzchni",
  image: <Mieszalnik />,
  subtitle:
    "Nasze farby zawierają syntetyczne związki, które polepszają właściwości produktu. Co wyróżnia produkowane przez nas farby? ",
  paragraphs: [
    {
      icon: <BsDot />,
      title: "Doskonały poziom krycia. ",
      subtitle:
        "Tworzą równomierną powłokę, dzięki czemu wystarczą dwie warstwy aby uzyskać oczekiwany efekt,",
    },
    {
      icon: <BsDot />,
      title: "Wygodna w aplikacji. ",
      subtitle:
        "Nasze farby można rozcieńczyć, ale tylko w niewielkiej ilości wody/rozpusczalnika i tylko przy aplikacji pierwszej warstwy,",
    },
    {
      icon: <BsDot />,
      title: "Odporne na ścieranie. ",
      subtitle:
        "Niektóre z farb posiadają najwyższą klasę odporności na szorowanie na mokro. Dzięki temu wykazują dużą odporność na czyszczenie.",
    },
  ],
};
