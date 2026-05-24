// css
import CartMobileIcon from "./components/CartMobileIcon";
import CartProvider from "./context/CartContext";
import Nav from "./components/Nav";
import "./globals.css";

//next font
import { Bangers, Quicksand, Roboto_Condensed } from "next/font/google";
import CartMobile from "./components/CartMobile";
import CartDesktop from "./components/CartDesktop";
import Footer from "./components/Footer";

const bangers = Bangers({
  subsets: ["latin"],
  variable: "--font-bangers",
  weight: ["400"],
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-robotoCondensed",
  weight: ["300", "400", "700"],
});

export default function RootLayout({ children }) {
  return (
    <CartProvider>
      <html lang="en">
        <body
          className={`${bangers.variable} ${quicksand.variable} ${robotoCondensed.variable} font-quicksand`}
        >
          <Nav />
          <CartMobileIcon />
          <div className="md:hidden">
            <CartMobile />
          </div>

          {children}

          <div className="hidden md:block">
            <CartDesktop />
          </div>
          <Footer/>
        </body>
      </html>
    </CartProvider>
  );
}
