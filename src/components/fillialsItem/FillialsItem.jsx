export default function FillialsItem({ fillial }) {
  // let data = new Date().getHours();
  // console.log(data);

  return (
    <div className="flex flex-col w-[591px] mb-6 px-5 py-4 shadow-cardShadow rounded-[0.75rem]">
      <div className="flex justify-between relative border-b pb-[6px]">
        <div className="flex flex-col gap-[6px]">
          <h4 className="text-[20px] font-sans font-black">
            MAX WAY {fillial.title}
          </h4>
          <p className="text-[14px] font-sans">{fillial.subTitle}</p>
        </div>
        <p className="text-[14px] font-sans text-[#FF0000]">
          {fillial.sinceCloseTime} gacha yopiq
        </p>
        <hr className="absolute" />
      </div>
      <div className="py-3 flex justify-between">
        <div className="ishVaqti">
          <p className="text-[14px] font-sans text-[#808080] mb-[6px]">
            Ish vaqti:
          </p>
          <p className="text-[14px] font-sans">
            Du-Yak: {fillial.workDuration()}
          </p>
        </div>
        <div className="tel">
          <p className="text-[14px] font-sans text-[#808080] mb-[6px]">
            Telefon:
          </p>
          <a className="text-[14px] font-sans" href={`tel:`}>
            {fillial.tel}
          </a>
        </div>
      </div>
    </div>
  );
}
