import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="absolute w-full py-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="#" className="max-w-[160px] lg:max-w-max">
          <Image src="/logo.svg" width={180} height={180} alt="Logo" />
        </Link>

        {/* phone and cart */}
        <div className="flex gap-x-8 items-center">
          {/* phone */}
          <div className="flex gap-x-4 items-center">
            <Image src="/phone.svg" width={42} height={42} alt="Phone" />
            <div className="text-white leading-tight text-sm">
              <div>24/7 pizza delivery service</div>
              <div className="font-semibold">09112233445</div>
            </div>
          </div>

          {/* cart */}
          <div className="relative cursor-pointer hidden lg:flex">
            <Image src="/bag.svg" width={38} height={38} alt="Cart" />
            <div className="bg-tertiary w-6 h-6 rounded-full text-white flex justify-center items-center text-[13px] absolute -bottom-2 -right-2">
              3
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
