import useEmblaCarousel from "embla-carousel-react";

import "./embla.css";
import { foodsMenu } from "../../const";
import { useCallback, useState } from "react";

import nextBtnIcon from "../../assets/next.png";
import prevBtnIcon from "../../assets/prev.png";

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [isActiveBtn, setIsActiveBtn] = useState(null);

  const slides = [...foodsMenu];

  const handleActiveBtn = (btnName) => {
    setIsActiveBtn(btnName);
  };

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla w-[100%] flex justify-center sticky top-0 bg-[white] py-3">
      <div className="embla__viewport w-[95%] overflow-hidden" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((food) => {
            return (
              <a
                href={`#${food.getWithId}`}
                onClick={() => handleActiveBtn(food.title)}
                className={`flex items-center justify-center py-3 px-4 rounded-[16px] cursor-pointer min-w-[150px] max-w-[180px] shadow-sm font-bold
                        ${
                          isActiveBtn === food.title
                            ? "bg-[#E7F3FC] text-primary"
                            : ""
                        }`}
                key={food.id}
              >
                {food.title}
              </a>
            );
          })}
        </div>
      </div>

      <button className="absolute left-0 top-[50%] translate-y-[-50%] cursor-pointer">
        <img src={prevBtnIcon} alt="" className="" onClick={scrollPrev} />
      </button>

      <button className="absolute right-0 top-[50%] translate-y-[-50%] cursor-pointer">
        <img src={nextBtnIcon} alt="" className="" onClick={scrollNext} />
      </button>
    </div>
  );
}
