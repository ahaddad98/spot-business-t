import Image from "next/image";
import Localisation from "../assets/localisation.svg";
import Guest from "../assets/user.svg";
import bigimage from "../assets/image1.png";
import image1 from "../assets/image4.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import share from "../assets/share.svg";
import like from "../assets/like.svg";
import Calendar from "./Calendar";
import Amentis from "./Amentis";
import RoomDetails from "./Room";

function ListImageTitle() {
  return (
    <div className="w-full flex items-center justify-between">
      <div>
        <div className="text-4xl leading-tight uppercase tracking-tighter text-woodsmoke">
          198 Avenue Liberte
        </div>
        <div className="flex mt-4 gap-[24px]">
          <div className="flex gap-[8px] items-center">
            <Image src={Localisation} alt="Picture" />
            <div className="text-base leading-loose text-woodsmoke opacity-70">
              1875 K St NW Washington, DC 20006
            </div>
          </div>
          <div className="flex border-l-[1px] pl-6 gap-[8px] items-center">
            <Image src={Guest} alt="guests" />
            <div className="text-base leading-loose text-woodsmoke opacity-70">
              2 Guests
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-[16px]">
        <div>
          <Image src={like} alt="guests" className="cursor-pointer"/>
        </div>
        <div>
          <Image src={share} alt="guests" className="cursor-pointer"/>
        </div>
      </div>
    </div>
  );
}

export default function ListImages() {
  return (
    <div className="flex flex-col w-full">
      <ListImageTitle />
      <div className="flex gap-[72px]">
        <div className="w-[864px]">
          <div className="flex gap-4 mt-[32px]">
            <div className="flex flex-col gap-[16px]">
              <div>
                <Image src={image3} alt="guests" />
              </div>
              <div>
                <Image src={image2} alt="guests" />
              </div>
              <div>
                <Image src={image1} alt="guests" />
              </div>
            </div>
            <div
              style={{
                clipPath:
                  "polygon(0 0, 81% 0, 100% 34%, 100% 100%, 0 100%, 0% 50%)",
                // height: 410,
                minWidth: 656
              }}
            >
              <Image src={bigimage} alt="guests" />
            </div>
          </div>
        </div>
        <Calendar />
      </div>
      <Amentis />
      <RoomDetails />
    </div>
  );
}
