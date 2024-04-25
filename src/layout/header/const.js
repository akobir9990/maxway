import {
  ABOUT_PAGE,
  CONTACTS_PAGE,
  FILLIALS_PAGE,
  HOME_PAGE,
} from "../../router/routes";

export const navData = [
  { id: 1, title: "Menyu", isActive: false, navLink: HOME_PAGE },
  { id: 2, title: "Filliallar", isActive: false, navLink: FILLIALS_PAGE },
  { id: 3, title: "Biz haqimizda", isActive: false, navLink: ABOUT_PAGE },
  { id: 4, title: "Bog'lanish", isActive: false, navLink: CONTACTS_PAGE },
];
