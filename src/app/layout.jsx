import "./globals.scss";

import { Montserrat } from "next/font/google";

import Header from "@/libs/components/header/header";
import Footer from "@/libs/components/footer/footer";

import styles from "./page.module.scss";


const montserrat = Montserrat({ subsets: ["cyrillic"] });

export default async function RootLayout({ children }) {
  return (
    <html lang="en-EN">
      <head>
        <title>String World</title>
        
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={montserrat.className}>
        <Header />
        <main className={styles.page}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
