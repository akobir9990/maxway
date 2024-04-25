import { NavLink } from "react-router-dom";
import logo from "../../assets/logoIcon.webp";
import { HOME_PAGE } from "../../router/routes";

export default function CompanyLogo() {
  return (
    <NavLink to={HOME_PAGE}>
      <img className="w-[48px] h-[48px]" src={logo} alt="" />
    </NavLink>
  );
}
