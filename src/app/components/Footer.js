import Image from "next/image";
import Link from "next/link";
import {  FaFacebook, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-primary bg-pattern py-16">
      <div className="container mx-auto">
       
        <div className="flex flex-col items-center justify-between gap-y-4">
           {/* logo */}
           <Link href={'#'}>
            <Image src={'logo.svg'} width={180} height={180} alt=""/>
           </Link>

           {/* social icons */}
           <div className="flex gap-x-4 text-xl text-white">
           {/* logo */}
           <Link href={'#'}>
            <FaYoutube/>
           </Link>
           <Link href={'#'}>
            <FaFacebook/>
           </Link>
           <Link href={'#'}>
            <FaInstagram/>
           </Link>
           <Link href={'#'}>
            <FaPinterest/>
           </Link>
        </div>
          {/* copy right */}
          <div className="text-white font-medium">
            Copy right & copy; PizzaLand.All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
