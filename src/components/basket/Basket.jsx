import useStore from "../../store/store";
import FoodItem from "../../components/foodItem/FoodItem";
import { motion } from "framer-motion";
import { priceFormatter } from "../../utils/PriceFormatter";

export default function Basket() {
  const allProducts = useStore((state) => state.allProducts);

  const totalPrice = allProducts.reduce((acc, category) => {
    return (
      acc +
      category.foods.reduce((innerAcc, food) => {
        return innerAcc + food.foodPrice * food.amount;
      }, 0)
    );
  }, 0);

  const filteredProducts = allProducts.filter((category) =>
    category.foods.some((food) => food.amount > 0)
  );
  return (
    <motion.div
      initial={{ opacity: 0, y: 200, top: 200 }}
      animate={{ opacity: 1, y: 0, top: 0 }}
      transition={{ delay: 0.3 }}
      className="min-w-[360px] max-w-[700px] min-h-[400px] max-h-[700px]"
    >
      {filteredProducts.map((category) => {
        let foods = category.foods.filter((food) => food.amount > 0);
        return {
          categoryId: category.id,
          foods: foods,
        };
      }).length === 0 ? (
        <div className="exsm:text-[20px] text-[30px] flex flex-col items-center">
          <h3>Siz hali hech narsani tanlamadingiz!!!</h3>
        </div>
      ) : (
        <>
          <div className="text-[25px]">
            <h3>Sizn quyidagi taomlarni tanladingiz</h3>
          </div>
          {filteredProducts
            .map((category) => {
              let foods = category.foods.filter((food) => food.amount > 0);
              return {
                categoryId: category.id,
                foods: foods,
              };
            })
            .map((cleanCategory) => {
              return cleanCategory.foods.map((item) => {
                return (
                  <div key={item.id}>
                    <FoodItem cleanCategory={cleanCategory} item={item} />
                  </div>
                );
              });
            })}
          <h1 className="text-[25px] italic font-semibold my-3">
            Umumiy narx:
            {` ${priceFormatter(totalPrice)} so'm`}
          </h1>
        </>
      )}
    </motion.div>
  );
}
