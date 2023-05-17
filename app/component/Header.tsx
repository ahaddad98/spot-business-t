import Image from "next/image";
import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <header className="flex justify-between mt-6 border-t-2 border-black">
      <Image src={logo} alt="" className="mt-[16px]" />
      <div className="flex">
        <div className="border-l-[1px] mr-4 h-2 border-black"></div>
        <div className="mt-[24px] mr-1 font-normal  text-base leading-6 text-woodsmoke">
          <div>Solutions</div>
          <div>Locations</div>
        </div>
        <div className="ml-[84px] border-l-[1px] mr-4 h-2 border-black"></div>
        <div className="mt-[24px] mr-1 font-normal  text-base leading-6 text-woodsmoke">
          <div>Contact us</div>
          <div>Enterprise</div>
        </div>
        <div className="ml-[84px] border-l-[1px] mr-4 h-2 border-black"></div>
        <div className="mt-[24px] mr-1 font-normal  text-base leading-6 text-woodsmoke">
          <div>Log IN</div>
        </div>
        <div className="mt-[24px] ml-[116px] mr-1 font-bold  text-base leading-6 text-woodsmoke">Book a visit</div>
      </div>
    </header>
  );
}
/*
return (
    <div className="w-[864px] border-t-[1px] border-solid border-black mt-[75px] flex gap-2">
    </div>
  );
*/
