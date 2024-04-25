import { create } from "zustand";
import { allProducts, sortedArr } from "./fakeData";
import { tabBtns } from "../const";

const actionCreater = (categoryId, itemId, type) => (state) => ({
  allProducts: state.allProducts.map((category) =>
    category.id === categoryId
      ? {
          ...category,
          foods: category.foods.map((food) =>
            food.id === itemId
              ? {
                  ...food,
                  amount: type === "INC" ? food.amount + 1 : food.amount - 1,
                }
              : food
          ),
        }
      : category
  ),
});

const useStore = create((set) => ({
  allProducts: allProducts,
  sortedArr: sortedArr,
  tabBtns: tabBtns,
  inc: (categoryId, itemId) => set(actionCreater(categoryId, itemId, "INC")),
  dec: (categoryId, itemId) => set(actionCreater(categoryId, itemId, "DEC")),
}));

export default useStore;
