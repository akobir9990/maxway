import { NavLink } from "react-router-dom";
import { footerMenu, socialMedias } from "../../const";
import { HOME_PAGE } from "../../router/routes";
import CompanyLogo from "../../components/companyLogo/CompanyLogo";

export default function index() {
  return (
    <div className="w-[100%] mt-[40px] flex flex-col items-between justify-center border-t border-[rgba(0,0,0,0.1)]">
      <div className="exsm:flex-row flex flex-col py-[50px] gap-[30px] items-center">
        <div className="logo">
          <NavLink to={HOME_PAGE}>
            <CompanyLogo />
          </NavLink>
        </div>
        <ul className="flex-grow flex justify-center gap-10">
          {footerMenu.map((item) => (
            <li key={item.id}>
              <NavLink className="text-[18px] font-[400] " to={item.navLink}>
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="exsm:flex-row flex flex-col py-[50px] gap-[30px] justify-between items-center border-t border-[rgba(0,0,0,0.1)]">
        <div className="font-[400] text-[#808080]">
          ©Udevs 2020 - 2022 All rights reserved
        </div>
        <div className="flex gap-4">
          {socialMedias.map((item) => (
            <button key={item.id}>
              <img src={item.iconUrl} alt="" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
