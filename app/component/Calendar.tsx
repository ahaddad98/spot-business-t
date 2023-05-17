import InputWithIcon from "./MyInput";
import calendar from "../assets/calendar.svg";
import time from "../assets/time.svg";
import guest from "../assets/user.svg";
import sqaure from "../assets/square.svg";
import Image from "next/image";
export default function Calendar() {
  return (
    <div className="flex flex-col flex-1 w-[376px] mt-[32px] gap-[24px] absolute right-[64px]">
      <div
        className="flex flex-col p-[42px] gap-[32px]"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 75%, 85% 100%, 0 100%, 0% 50%)",
          minHeight: 447,
          flex: 1,
          //   width: '100%',
          background: "#F6F6F6",
        }}
      >
        <div className="flex gap-[11px]">
          <span>$ 125</span>
          <span>/ hour</span>
        </div>
        <div className="flex gap-2">
          <InputWithIcon icon={calendar} placehoder="Check-in" type="text" />
          <InputWithIcon icon={calendar} placehoder="Check-out" type="text" />
        </div>
        <div className="flex gap-2">
          <InputWithIcon icon={time} placehoder="Time in" type="text" />
          <InputWithIcon icon={time} placehoder="Time out" type="text" />
        </div>
        <InputWithIcon icon={calendar} placehoder="Check-out" type="select" />
        {/* <InputWithIcon /> */}
        <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-[200px] mt-2">
          Reserve
        </button>
      </div>
      <div
        className="flex flex-col"
        style={{
          border: "1px solid #151718",
          clipPath: "polygon(0 0, 100% 0, 100% 75%, 85% 100%, 0 100%, 0% 50%)",
          flex: 1,
          boxSizing: "border-box",
        }}
      >
        <div
          className="flex gap-[16px] py-[24px] px-[32px] items-start"
          style={{
            border: "1px solid #151718",
          }}
        >
          <Image src={sqaure} alt="" />
          <span>
            If you book a private office for more than a day, then you will have
            2 free hours of meeting room available
          </span>
        </div>
      </div>
    </div>
  );
}
