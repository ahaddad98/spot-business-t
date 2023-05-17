import Title from "./Title";
import tenis from "../assets/tenis.svg";
import Image from "next/image";
const ItemList = ({ items }: any) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {items.map((item: any, index: number) => (
        <div key={index} className="flex items-center mt-[32px]">
          <div className="mr-[20px] ">
            <Image src={item.icon} alt={item.title} className="w-6 h-6" />
          </div>
          <div>{item.title}</div>
        </div>
      ))}
    </div>
  );
};

const arr = [
  {
    icon: tenis,
    title: "Tennis",
  },
  {
    icon: tenis,
    title: "Swimming pool",
  },
  {
    icon: tenis,
    title: "Wellness room",
  },
  {
    icon: tenis,
    title: "Сoffee machine",
  },
  {
    icon: tenis,
    title: "Fitness Center",
  },
  {
    icon: tenis,
    title: "Event space",
  },
  {
    icon: tenis,
    title: "Basketball",
  },
  {
    icon: tenis,
    title: "Air conditioner",
  },
  {
    icon: tenis,
    title: "Cleaning services",
  },
  {
    icon: tenis,
    title: "Restaurant",
  },
  {
    icon: tenis,
    title: "Smoking area",
  },
  {
    icon: tenis,
    title: "Wardrobe",
  },
];

export default function Amentis() {
  return (
    <div className="max-w-[864px]">
      <Title title="Amenitis" number="02"/>
      <div className="mt-[33px]">
        <ItemList items={arr} />
      </div>
      <div className="mt-[72px] font-bold text-lg leading-6 uppercase text-gray-800">more Amenities</div>
    </div>
  );
}
