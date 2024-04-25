import arrowDropUp from "../../assets/arrow_drop_up.svg";

export default function BacktopBtn({ isVisible }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`${isVisible ? "block" : "hidden"}
    fixed bottom-10 right-10 z-50 w-12 h-12 bg-primary rounded-[50%] flex justify-center items-center
    `}
    >
      <img src={arrowDropUp} alt="" />
    </button>
  );
}
