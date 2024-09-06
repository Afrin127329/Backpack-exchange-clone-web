import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="relative h-full md:h-80 dark:text-white overflow-hidden w-11/12 rounded-lg">
      <div className="absolute inset-0 opacity-70 darK:opacity-30">
        <Image
          src="/heroBg.png"
          alt="Background Image"
          className="object-cover object-top w-full h-full"
          width={900}
          height={900}
        />
        <div className="absolute inset-0"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-start h-full p-6">
        <h1 className="text-2xl md:text-5xl font-bold leading-tight mb-4">
          Refer and Earn
        </h1>
        <p className="text-lg text-gray-600 dark:text-baseTextHighEmphasis mb-6 dark:text-opacity-65">
          Refer a friend and earn a percentage of their trading fees.
        </p>

        <Button className="hover:shadow-lg text-xl" size={"lg"}>
          <Link href="/referrals">Manage Referrals</Link>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
