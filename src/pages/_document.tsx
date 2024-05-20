import {
  basic,
  bungee,
  greatVibes,
  inter,
  nunito,
  orienta,
  oswald,
} from "@/styles/fonts";
import { cn } from "@/utils/utils";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className={cn(
          inter.variable,
          basic.variable,
          nunito.variable,
          bungee.variable,
          orienta.variable,
          oswald.variable,
          greatVibes.variable
        )}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
