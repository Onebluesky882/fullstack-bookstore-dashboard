import localFont from "next/font/local";

export const lato = localFont({
  src: [
    { path: "./Lato-Thin.ttf", weight: "100", style: "normal" },
    { path: "./Lato-ThinItalic.ttf", weight: "100", style: "italic" },
    { path: "./Lato-Light.ttf", weight: "300", style: "normal" },
    { path: "./Lato-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "./Lato-Regular.ttf", weight: "400", style: "normal" },
    { path: "./Lato-Italic.ttf", weight: "400", style: "italic" },
    { path: "./Lato-Bold.ttf", weight: "700", style: "normal" },
    { path: "./Lato-BoldItalic.ttf", weight: "700", style: "italic" },
    { path: "./Lato-Black.ttf", weight: "900", style: "normal" },
    { path: "./Lato-BlackItalic.ttf", weight: "900", style: "italic" },
  ],
  variable: "--font-lato",
  display: "swap", // Optional, improves loading behavior
});
