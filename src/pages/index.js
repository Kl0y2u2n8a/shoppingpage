import Image from "next/image";
import bg from "../../public/images/ecombg.jpg"
import { Inter } from "next/font/google";
import Navbar from "../../components/Navbar";
import HomeGrid from "../../components/HomeGrid";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
        <Navbar/>

        <div className="block w-full justify-center pt-32 md:w-[90%] md:h-[10%] z-[-1] md:mx-[5%]">
            <Image src={bg} layout={`contain`} objectFit={`cover`} className=" opacity-80"/>
        </div>
        <HomeGrid/>
    </div>
      
  );
}
