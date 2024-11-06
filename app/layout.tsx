import "./styles/globals.css";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Header } from "./components/header/Header";
import { Footer } from "./components/Footer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  getBaseUrl,
  getPageTitle,
  getBaseDescription,
  getImageUrl,
} from "../lib/constants";

config.autoAddCss = false;

export const metadata: Metadata = {
  title: {
    template: `%s | ${getPageTitle()}`,
    default: getPageTitle(),
  },
  description: getBaseDescription(),
  metadataBase: new URL(`${getBaseUrl()}/`),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: getImageUrl(),
    title: {
      template: `%s | ${getPageTitle()}`,
      default: `${getPageTitle()}`,
    },
    url: getBaseUrl(),
  },
};

const DynamicImports = dynamic(() => import("./components/DynamicImports"));
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          <a
            href="#content"
            id="content"
            className="button sr-only z-30 focus:not-sr-only focus:absolute focus:left-4 focus:p-4"
          >
            Start of main content
          </a>
          {children}
        </main>
        <DynamicImports />
        <Footer />
      </body>
    </html>
  );
}
