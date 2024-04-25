import useStore from "../../store/store";
import plus from "../../assets/plus.svg";
import minus from "../../assets/minus.svg";
import { priceFormatter } from "../../utils/PriceFormatter";

export default function FoodItem({ cleanCategory, item }) {
  const inc = useStore((state) => state.inc);
  const dec = useStore((state) => state.dec);
  return (
    <div className="flex rounded-2xl shadow-lg p-4 items-center gap-3 my-1">
      <div className="flex items-center justify-center rounded-xl w-[80px] h-[80px]">
        <img src={item.foodImage} alt="" className="w-[100%] h-[100%]" />
      </div>
      <div className="flex flex-col gap-1  flex-grow">
        <div className="textInfo">
          <h1 className="text-[16px] font-[500]">{item.foodName}</h1>
          <h2 className="text-[14px] font-[400] text-[808080]">
            {item.foodDescription}
          </h2>
        </div>
        <div className="flex justify-between ">
          <p className="text-[16px] font-semibold">
            {`${priceFormatter(item.foodPrice)} so'm`}
          </p>
          <div className="w-[95px] h-[32px] flex justify-between items-center border border-[#B0C7FF] rounded-3xl">
            <img
              src={minus}
              alt=""
              className="cursor-pointer p-[6px]"
              onClick={() => dec(cleanCategory.categoryId, item.id)}
            />
            <p className="">{item.amount}</p>
            <img
              src={plus}
              className="cursor-pointer p-[6px]"
              onClick={() => inc(cleanCategory.categoryId, item.id)}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
