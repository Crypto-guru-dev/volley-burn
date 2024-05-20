import {
  Inter,
  Oswald,
  Basic,
  Bungee,
  Nunito,
  Orienta,
} from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const basic = Basic({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-basic",
});

const bungee = Bungee({
  subsets: ["latin"],
  variable: "--font-bungee",
  weight: ["400"],
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: [
    "400",
    "700",
    "1000",
    "200",
    "300",
    "400",
    "500",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
});

const orienta = Orienta({
  subsets: ["latin"],
  variable: "--font-orienta",
  weight: ["400"],
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["200", "300", "400", "500", "600", "700"],
});

const greatVibes = localFont({
  src: [
    {
      path: "../../public/fonts/Bauhaus/BAUHHL.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Bauhaus/BROOKH2.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Bauhaus/BauhausRegular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Bauhaus/BauhausItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Bauhaus/BauhausBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Bauhaus/BauhausBoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-great-vibes",
});

export { inter, basic, bungee, nunito, orienta, oswald, greatVibes };
