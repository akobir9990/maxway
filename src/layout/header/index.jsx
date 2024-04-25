import { useState } from "react";
import { navData } from "./const";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Modal from "react-modal";
import useStore from "../../store/store";
import Basket from "../../components/basket/Basket";
import CompanyLogo from "../../components/companyLogo/CompanyLogo";
import location from "../../assets/location.svg";
import basket from "../../assets/basket.svg";
import arrowDown from "../../assets/arrow-down.svg";
import closeIcon from "../../assets/close.png";
import burger from "../../assets/burger.svg";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    overflow: "scroll",
    order: "5",
  },
};
export default function Header() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const allProducts = useStore((state) => state.allProducts);
  const [isActiveBtn, setIsActiveBtn] = useState("Menyu");

  const handleActiveBtn = (btnName) => {
    setIsActiveBtn(btnName);
    console.log(btnName);
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  let basketItemsCounter = () => {
    let count = 0;
    allProducts
      .filter((category) => category.foods.some((food) => food.amount > 0))
      .map((category) =>
        category.foods.map((food) => {
          if (food.amount > 0) {
            count += 1;
          } else {
            count += 0;
          }
        })
      );
    return count;
  };

  return (
    <motion.div
      initial={{ opacity: 0, top: 100 }}
      animate={{ opacity: 1, top: 0 }}
      duration={{ delay: 1 }}
      className="flex items-center py-[22.5px]"
    >
      <div className="order-2 flex flex-grow lg:flex-grow-0 right-0 logo lg:justify-start justify-end">
        <CompanyLogo />
      </div>
      <div className="relative order-1 lg:hidden">
        <img src={burger} alt="" />
      </div>
      <ul className="order-3 hidden lg:flex mx-10 gap-8">
        {navData.map((item) => (
          <li
            key={item.id}
            className={`font-bold text-[16px] ${
              isActiveBtn === item.title ? "text-primary" : ""
            }`}
            onClick={() => handleActiveBtn(item.title)}
          >
            <NavLink to={item.navLink}>{item.title}</NavLink>
          </li>
        ))}
      </ul>
      <div className="order-4 flex flex-grow gap-8 justify-end items-center ">
        <div className="hidden sm:flex items-center gap-2 my-[2.5px]">
          <div className="flex items-center justify-center h-8 w-8 bg-[#E7F3FC] rounded-[50%]">
            <img src={location} alt="" />
          </div>
          <div className="loc-text">
            <h3 className="text-[14px]">Yetkazib berish yoki, Olib ketish</h3>
            <h4 className="text-[13px] text-primary">
              Qabul qilib olish turini tanlang
            </h4>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div className="relative flex items-center justify-center w-9 h-9 bg-[#E7F3FC] rounded-[50%]">
            {basketItemsCounter() > 0 ? (
              <>
                <div className="flex items-center justify-center absolute w-5 h-5 rounded-[50%] bg-[#fea45a] top-[-5px] right-[-5px] text-[#51267d] font-bold">
                  {basketItemsCounter()}
                </div>
              </>
            ) : (
              <></>
            )}
            <button onClick={openModal}>
              <img src={basket} alt="" />
            </button>
          </div>
          <button className="flex items-center justify-evenly w-[66px] h-[36px] bg-[#E7F3FC] rounded-[50px]">
            <h2>Ru</h2>
            <img src={arrowDown} alt="" />
          </button>
          <button className="">
            <svg width="20" height="20" viewBox="0 0 18 18">
              <path
                d="M 12 10.5 C 12.9663 10.5001 13.8954 10.8732 14.5933 11.5415 C 15.2913 12.2098 15.7043 13.1218 15.7463 14.0873 L 15.75 14.25 V 15 C 15.7501 15.3784 15.6072 15.7429 15.3499 16.0204 C 15.0926 16.2979 14.7399 16.4679 14.3625 16.4963 L 14.25 16.5 H 3.75 C 3.37157 16.5001 3.00708 16.3572 2.72959 16.0999 C 2.4521 15.8426 2.28213 15.4899 2.25375 15.1125 L 2.25 15 V 14.25 C 2.25006 13.2837 2.62316 12.3546 3.29149 11.6567 C 3.95983 10.9587 4.87181 10.5457 5.83725 10.5037 L 6 10.5 H 12 Z M 9 1.5 C 9.99456 1.5 10.9484 1.89509 11.6517 2.59835 C 12.3549 3.30161 12.75 4.25544 12.75 5.25 C 12.75 6.24456 12.3549 7.19839 11.6517 7.90165 C 10.9484 8.60491 9.99456 9 9 9 C 8.00544 9 7.05161 8.60491 6.34835 7.90165 C 5.64509 7.19839 5.25 6.24456 5.25 5.25 C 5.25 4.25544 5.64509 3.30161 6.34835 2.59835 C 7.05161 1.89509 8.00544 1.5 9 1.5 Z"
                fill="#51267d"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="absolute right-0 top-0 p-2" onClick={closeModal}>
          <img src={closeIcon} alt="" />
        </div>
        <div>
          <Basket />
        </div>
      </Modal>
    </motion.div>
  );
}
