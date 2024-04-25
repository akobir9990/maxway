import qr from "../../assets/qr.png";

export default function QRCode() {
  return (
    <div>
      <div className="rounded-xl w-[18rem] pt-8 pr-[14px] pb-8 pl-8 bg-[#96b1c2]">
        <div className="w-[96px] h-[96px] rounded-lg flex justify-center items-center bg-white ">
          <img className="w-[84px] h-[84px]" src={qr} alt="" />
        </div>
        <h3 className="font-black text-[white] text-[17px] mt-[18px] mb-[16px]">
          Telegramda sharh <br />
          qoldiring yoki savol bering
        </h3>
        <a
          href="https://t.me/maxwaymasterfood_bot"
          className="flex items-center font-bold text-white"
        >
          <svg className="w-6 h-7">
            <path
              d="M 9.78 18.65 l 0.28 -4.23 l 7.68 -6.92 c 0.34 -0.31 -0.07 -0.46 -0.52 -0.19 L 7.74 13.3 L 3.64 12 c -0.88 -0.25 -0.89 -0.86 0.2 -1.3 l 15.97 -6.16 c 0.73 -0.33 1.43 0.18 1.15 1.3 l -2.72 12.81 c -0.19 0.91 -0.74 1.13 -1.5 0.71 L 12.6 16.3 l -1.99 1.93 c -0.23 0.23 -0.42 0.42 -0.83 0.42 Z"
              fill="white"
            />
          </svg>
          @maxwaymasterfood_bot
        </a>
      </div>
    </div>
  );
}
