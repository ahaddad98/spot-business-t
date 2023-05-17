import Title from "./Title";
import bigimage from "../assets/image1.png";
import Image from "next/image";

export default function RoomDetails() {
  return (
    <div className="max-w-[864px] mt-[56px]">
      <Title title="Meeting room" number="03" />
      <div
        style={{
          clipPath: "polygon(0 0, 81% 0, 100% 34%, 100% 100%, 0 100%, 0% 50%)",
          //   height: 410,
          width: 864,
          marginTop: 72,
        }}
      >
        <Image src={bigimage} alt="guests" width={846} />
      </div>
      <div className="font-normal font-helvetica-neue font-weight-400 text-base leading-[160%] text-woodsmoke mt-[32px]" style={{fontSize: 18}}>
        Benefit from an all-inclusive equipped workspace, from high-speed
        internet connection to secretarial services and much more… Spotbusiness
        takes care of everything for you in order to make your work as easy as
        possible.
      </div>
      {/* <div className="mt-[33px]">
        <ItemList items={arr} />
      </div>
      <div className="mt-[72px] font-bold text-lg leading-6 uppercase text-gray-800">
        more Amenities
      </div> */}
    </div>
  );
}
