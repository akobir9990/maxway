import useStore from "../../store/store";
import plus from "../../assets/plus.svg";
import minus from "../../assets/minus.svg";
import { motion } from "framer-motion";
import { priceFormatter } from "../../utils/PriceFormatter";

export default function FoodBlock() {
  const foodsData = useStore((store) => store.allProducts);
  const inc = useStore((store) => store.inc);
  const dec = useStore((store) => store.dec);

  return (
    <>
      {foodsData.map((foodsList) => {
        return (
          <motion.div
            id={foodsList.getWithId}
            className="my-5"
            key={foodsList.id}
          >
            <h1 className="title text-[28px] font-[700] mb-5">
              {foodsList.title}
            </h1>
            <div className="flex w-[100%] py-5 overflow-x-auto gap-[18px]">
              {foodsList.foods.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="foodItem flex flex-col items-center min-w-[288px] max-w-[300px] min-h-[360px] max-h-[440px] shadow-lg rounded-[16px]"
                  >
                    <div className="max-w-[100%]">
                      <img className="h-[220px]" src={item.foodImage} alt="" />
                    </div>
                    <div className="foodInfo w-[100%] px-4 py-3">
                      <h2 className="mb-[7px] font-[600px] text-[18px]">
                        {item.foodName}
                      </h2>
                      <p className="font-[500] text-[14px] text-[#48535B]">
                        {item.foodDescription}
                      </p>
                    </div>
                    <div className="foodOrder flex justify-between w-[100%] px-4 pb-3">
                      <div className="foodPrice flex items-center gap-[3px] ">
                        <p className="text-[18px]">
                          {priceFormatter(item.foodPrice)}
                        </p>
                        <p className="valuta font-[400] text-[14px] text-[#252C32]">
                          so`m
                        </p>
                      </div>
                      <button
                        className={`w-[112px] h-[37px] flex items-center justify-center px-[20px] py-[10px] rounded-[20px] ${
                          item.amount > 0
                            ? "border border-primary text-[14px] font-[500]"
                            : "bg-primary text-white"
                        }`}
                      >
                        {item.amount <= 0 ? (
                          <div
                            className="w-[112px] h-[37px] flex items-center justify-center px-[20px] py-[10px] rounded-[20px] bg-primary text-white font-bold"
                            onClick={() => {
                              inc(foodsList.id, item.id);
                            }}
                          >
                            Qo`shish
                          </div>
                        ) : (
                          <div className="w-[100%] flex justify-between items-center">
                            <img
                              src={minus}
                              alt=""
                              onClick={() => dec(foodsList.id, item.id)}
                            />
                            {item.amount}
                            <img
                              src={plus}
                              alt=""
                              onClick={() => inc(foodsList.id, item.id)}
                            />
                          </div>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        );
      })}
    </>
  );
}
