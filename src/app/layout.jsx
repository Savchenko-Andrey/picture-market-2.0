import "./globals.scss";

import { Montserrat } from "next/font/google";

import Header from "@/libs/components/header/header";
import Footer from "@/libs/components/footer/footer";

import styles from "./page.module.scss";
import Scripts from "@/libs/shared/fb-scripts";


const montserrat = Montserrat({ subsets: ["cyrillic"] });

export default async function RootLayout({ children }) {
  return (
    <html lang="en-EN">
      <head>
        <title>String World</title>
        <meta name="facebook-domain-verification" content="8ejpfd4wixg9sgs8tzw7b63wr1b8oe" />
        {/* <!-- Meta Pixel Code --> */}
        <Scripts />
        {/* <!-- End Meta Pixel Code --> */}
      </head>
      <body className={montserrat.className}>
        <Header />
        <main className={styles.page}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
