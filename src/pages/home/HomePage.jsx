import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { EmblaCarousel } from "../../components/carousel/Carousel";
import FoodBlock from "../../components/foodBlock/FoodBlock";
import EmblaFoodsMenu from "../../components/foodsMenu/EmblaFoodsMenu";
import BacktopBtn from "../../components/backtop/BacktopBtn";

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 200, top: 200 }}
      animate={{ opacity: 1, y: 0, top: 0 }}
      transition={{ delay: 0.3 }}
      className="relative"
    >
      <EmblaCarousel />
      <EmblaFoodsMenu />
      <FoodBlock />
      <BacktopBtn isVisible={backTopIsVisible} />
    </motion.div>
  );
}
