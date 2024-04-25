import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./embla.css";
import burger from "../../assets/slidersImg/burger.png";
import { useCallback } from "react";
import nextBtnIcon from "../../assets/next.png";
import prevBtnIcon from "../../assets/prev.png";

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({})]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative embla w-[100%]">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide  py-3">
            <img className="w-[100%]" src={burger} alt="" />
          </div>
          <div className="embla__slide py-3">
            <img className="w-[100%]" src={burger} alt="" />
          </div>
          <div className="embla__slide py-3">
            <img className="w-[100%]" src={burger} alt="" />
          </div>
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
