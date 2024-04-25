import { useEffect, useState } from "react";
import { EmblaCarousel } from "../../components/carousel/Carousel";
import FoodBlock from "../../components/foodBlock/FoodBlock";
// import FoodsMenu from "../../components/foodsMenu/FoodsMenu";
import EmblaFoodsMenu from "../../components/foodsMenu/EmblaFoodsMenu";
import { motion } from "framer-motion";
import arrowDropUp from "../../assets/arrow_drop_up.svg";

export default function HomePage() {
  const [backTopIsVisible, setBackTopIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setBackTopIsVisible(true);
    } else {
      setBackTopIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 200, top: 200 }}
      animate={{ opacity: 1, y: 0, top: 0 }}
      transition={{ delay: 0.3 }}
      className="relative"
    >
      <EmblaCarousel />
      {/* <FoodsMenu /> */}
      <EmblaFoodsMenu />
      <FoodBlock />
      <button
        onClick={scrollToTop}
        className={`${backTopIsVisible ? "block" : "hidden"}
        fixed bottom-10 right-10 z-50 w-12 h-12 bg-primary rounded-[50%] flex justify-center items-center
        `}
      >
        <img src={arrowDropUp} alt="" />
      </button>
    </motion.div>
  );
}
