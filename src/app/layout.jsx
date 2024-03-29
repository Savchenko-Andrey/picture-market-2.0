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
        <meta name="facebook-domain-verification" content="8ejpfd4wixg9sgs8tzw7b63wr1b8oe" />
        {/* <!-- Meta Pixel Code --> */}
        <script>
          {`!function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '431127439394379');
        fbq('track', 'PageView');
        `}
        </script>
        <noscript><img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=431127439394379&ev=PageView&noscript=1"
        /></noscript>
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
