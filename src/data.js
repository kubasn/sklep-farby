import MenuImg from "./assets/1.jpg";
import Mieszalnik from "./assets/mieszalnik1.jpg";
import Paint1Img from "./assets/paint1.png";
import Paint2Img from "./assets/paint2.webp";
import Paint3Img from "./assets/paint3.jpg";
import Paint4Img from "./assets/paint4.webp";
import Probnik from "./assets/probnik.webp";

import Product1Img from "./assets/paintBlue.jpeg";
import Product2Img from "./assets/paintWhite.jpeg";

import Product3Img from "./assets/paintBrown.jpg";
import Product4Img from "./assets/paintGray.jpeg";
import Product5Img from "./assets/paintSteelBlack.jpg";
import Product6Img from "./assets/paintSteelWhite.webp";
import Product7Img from "./assets/paintWoodAntracit.webp";
import Product8Img from "./assets/paintWoodOak.jpg";
import Product9Img from "./assets/paintWoodPine.jpg";

import { IoMdAddCircle } from "react-icons/io";
import { BsDot } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";

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

export const navigation = [
  { name: "Home", linkTo: "/" },
  { name: "Farby", linkTo: "paints" },
  { name: "Gdzie kupić", linkTo: "contact" },
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

export const newInStore = {
  title: "Nowe produkty",
  subtitle:
    "Najnowsze farby w naszym asortymencie, przy zakupie zapytaj o zniżkę",
  link: "Zobacz więcej",
  icon: <FaArrowRight />,
  products: [
    {
      name: "Do wnętrz",
      image: <Paint1Img />,
    },
    {
      name: "Do drewna",
      image: <Paint2Img />,
    },
    {
      name: "Do metalu",
      image: <Paint3Img />,
    },
    {
      name: "Do betonu",
      image: <Paint4Img />,
    },
  ],
};

export const features2 = {
  image: <Probnik />,
  title: "Zamów próbnik farb",
  subtitle:
    "Masz problem z wyborem odpowiedniego koloru? Zapytaj w punkcie sprzedaży o tester kolorów. Możesz dzięki temu przetestować kolor przed malowaniem.",
};

export const products = {
  title: "Wszystkie nasze produkty",
  items: [
    {
      page: [
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: "Samtex niebieska",
          price: 75,
          capacity: 1,
          category: "interior",
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: "Samtex biały",
          price: 50,
          capacity: 1,
          category: "interior",
        },
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: "Samtex szary",
          price: 105,
          capacity: 2,
          category: "interior",
        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: "Capasilan brązowy",
          price: 75,
          capacity: 1.5,
          category: "wood",
        },
        {
          image: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: "Steel 9 czarny",
          price: 200,
          capacity: 5,
          category: "steel",
        },
      ],
    },
    {
      page: [
        {
          image: <Product6Img />,
          icon: <IoMdAddCircle />,
          name: "Steel 9 biały",
          price: 45,
          capacity: 0.5,
          category: "steel",
        },
        {
          image: <Product7Img />,
          icon: <IoMdAddCircle />,
          name: "Wood+ antracyt",
          price: 225,
          capacity: 4,
          category: "wood",
        },
        {
          image: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: "Wood+ dąbowy",
          price: 105,
          capacity: 2,
          category: "wood",
        },
        {
          image: <Product9Img />,
          icon: <IoMdAddCircle />,
          name: "Wood+ sosna mahoń",
          price: 75,
          capacity: 1.5,
          category: "wood",
        },
      ],
    },
  ],
};

export const footer = {
  title: "PaintShop+",
  tel1: "542 234 533",
  mail: "paintshop@sklep.pl",
};

export const contact = {
  main: {},
  centralPoint: {
    name: "PaintShop centrala",
    location: "Kraków Podgórze",
    tel: "654 454 002",
    mail: "centrala@sklep.pl",
    workingHours: "8.00-17.00",
  },
  sellingPoints: [
    {
      name: "Farbex",
      location: "Kraków centrum",
      tel: "123 134 542",
      mail: "sklepkrakow@sklep.pl",
      workingHours: "8.00-17.00",
    },
    {
      name: "BudPol",
      location: "Warszawa Praga",
      tel: "145 654 866",
      mail: "sklepwarszawa@sklep.pl",
      workingHours: "9.00-17.00",
    },
    {
      name: "DomOgród",
      location: "Wieliczka",
      tel: "888 350 823",
      mail: "sklepwarszawa@sklep.pl",
      workingHours: "6.00-17.00",
    },
  ],
};
