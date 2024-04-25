import { useState } from "react";
import { foodsMenu } from "../../const";

export default function FoodsMenu() {
  const [isActiveBtn, setIsActiveBtn] = useState(null);

  const handleActiveBtn = (btnName) => {
    setIsActiveBtn(btnName);
  };

  return (
    <div className="sticky top-0 bg-white">
      <ul className="flex my-8 py-2 gap-2 w-[100%] overflow-scroll">
        {foodsMenu.map((item) => (
          <a
            href={`#${item.getWithId}`}
            onClick={() => handleActiveBtn(item.title)}
            className={`flex items-center justify-center py-3 px-4 rounded-[16px] cursor-pointer min-w-[150px] max-w-[180px] shadow-sm font-bold
                        ${
                          isActiveBtn === item.title
                            ? "bg-[#E7F3FC] text-primary"
                            : ""
                        }`}
            key={item.id}
          >
            {item.title}
          </a>
        ))}
      </ul>
    </div>
  );
}
