import instagram from "./assets/social/instagram.svg";
import facebook from "./assets/social/facebook.svg";
import telegram from "./assets/social/telegram.svg";
import { ABOUT_PAGE, CONTACTS_PAGE, FILLIALS_PAGE } from "./router/routes";

export const foodsMenu = [
  { id: 1, title: "Maxi BOX", isActive: true, getWithId: "maxiBox" },
  { id: 2, title: "Klab-Sendvich", isActive: false, getWithId: "klab" },
  { id: 3, title: "Lavash", isActive: false, getWithId: "lavash" },
  { id: 4, title: "Shaurma", isActive: false, getWithId: "shaurma" },
  { id: 5, title: "Panini", isActive: false, getWithId: "panini" },
  { id: 6, title: "Burger", isActive: false, getWithId: "burger" },
  { id: 7, title: "Donar Kebab", isActive: false, getWithId: "donar" },
  { id: 8, title: "Hot-Dog", isActive: false, getWithId: "hotDog" },
  { id: 9, title: "Gazaklar", isActive: false, getWithId: "snacks" },
  { id: 10, title: "Tamaddilar", isActive: false, getWithId: "foods" },
  { id: 11, title: "Desertlar", isActive: false, getWithId: "desserts" },
  { id: 12, title: "Ichimliklar", isActive: false, getWithId: "drinks" },
  { id: 13, title: "Souslar", isActive: false, getWithId: "Sauces" },
];

export const footerMenu = [
  { id: 1, title: "Filiallar", navLink: FILLIALS_PAGE },
  { id: 2, title: "Biz haqimizda", navLink: ABOUT_PAGE },
  { id: 3, title: "Bog'lanish", navLink: CONTACTS_PAGE },
];
export const socialMedias = [
  { id: 1, title: "instagram", iconUrl: instagram },
  { id: 2, title: "facebook", iconUrl: facebook },
  { id: 3, title: "telegram", iconUrl: telegram },
];

export const allFillials = [
  {
    id: 1,
    title: "ATLAS",
    subTitle: "улица Катартал, 28, Ташкент",
    openTime: "10",
    closeTime: "02",
    workDuration: function () {
      return `${this.openTime}:00 -  ${this.closeTime}:00`;
    },
    sinceCloseTime: "10:00",
    tel: "+998712005400",
    lat: 41.281545,
    lon: 69.201592,
  },
  {
    id: 2,
    title: "DRUJBA",
    subTitle: "микрорайон Алмазар, 8/2, Чиланзарский район, Ташкент",
    openTime: "10",
    closeTime: "04",
    workDuration: function () {
      return `${this.openTime}:00 -  ${this.closeTime}:00`;
    },
    sinceCloseTime: "10:00",
    tel: "+998712005400",
    lat: 41.310981,
    lon: 69.243534,
  },
  {
    id: 3,
    title: "MEGA PLANET",
    subTitle: "улица Ниязбек, 1",
    openTime: "10",
    closeTime: "03",
    workDuration: function () {
      return `${this.openTime}:00 -  ${this.closeTime}:00`;
    },
    sinceCloseTime: "10:00",
    tel: "+998712005400",
    lat: 41.365869,
    lon: 69.294415,
  },
  {
    id: 4,
    title: "AVIASOZLAR",
    subTitle: "улица Авиасозлар, 23",
    openTime: "10",
    closeTime: "03",
    workDuration: function () {
      return `${this.openTime}:00 -  ${this.closeTime}:00`;
    },
    sinceCloseTime: "10:00",
    tel: "+998712005400",
    lat: 41.290889,
    lon: 69.342143,
  },
  {
    id: 5,
    title: "RISOVIY",
    subTitle: "Узбекистан, Ташкент, Алтынкульская улица, 10",
    openTime: "10",
    closeTime: "03",
    workDuration: function () {
      return `${this.openTime}:00 -  ${this.closeTime}:00`;
    },
    sinceCloseTime: "10:00",
    tel: "+998712005400",
    lat: 41.274911,
    lon: 69.309381,
  },
  {
    id: 6,
    title: "PARUS",
    subTitle: "улица Катартал, 60/5",
    openTime: "10",
    closeTime: "03",
    workDuration: function () {
      return `${this.openTime}:00 -  ${this.closeTime}:00`;
    },
    sinceCloseTime: "10:00",
    tel: "+998712005400",
    lat: 41.293531,
    lon: 69.212839,
  },
  {
    id: 7,
    title: "MAGIC CITY",
    subTitle: "Узбекистан, Ташкент, улица Бабура, 174/6",
    openTime: "10",
    closeTime: "02",
    workDuration: function () {
      return `${this.openTime}:00 -  ${this.closeTime}:00`;
    },
    sinceCloseTime: "10:00",
    tel: "+998712005400",
    lat: 41.297942,
    lon: 69.249418,
  },
  {
    id: 8,
    title: "SAMARQAND DARVOZA",
    subTitle: "Узбекистан, Ташкент, улица Коратош, 5А",
    openTime: "10",
    closeTime: "02",
    workDuration: function () {
      return `${this.openTime}:00 -  ${this.closeTime}:00`;
    },
    sinceCloseTime: "10:00",
    tel: "+998712005400",
    lat: 41.31642,
    lon: 69.230976,
  },
  {
    id: 9,
    title: "PARKENT",
    subTitle:
      "Узбекистан, Ташкент, Яшнободский район, массив Мавлоно Риёзи, 30В",
    openTime: "10",
    closeTime: "02",
    workDuration: function () {
      return `${this.openTime}:00 -  ${this.closeTime}:00`;
    },
    sinceCloseTime: "10:00",
    tel: "+998712005400",
    lat: 41.31451,
    lon: 69.325667,
  },
  {
    id: 10,
    title: "UNIVERSAM",
    subTitle: "Узбекистан, Ташкент, проспект Амира Темура, 41/3",
    openTime: "10",
    closeTime: "03",
    workDuration: function () {
      return `${this.openTime}:00 -  ${this.closeTime}:00`;
    },
    sinceCloseTime: "10:00",
    tel: "+998712005400",
    lat: 41.363399,
    lon: 69.288702,
  },
  {
    id: 11,
    title: "ROYSON",
    subTitle: "Узбекистан, Ташкент, улица Заркайнар, 2",
    openTime: "10",
    closeTime: "01",
    workDuration: function () {
      return `${this.openTime}:00 -  ${this.closeTime}:00`;
    },
    sinceCloseTime: "10:00",
    tel: "+998712005400",
    lat: 41.323023,
    lon: 69.242034,
  },
  {
    id: 12,
    title: "NEXT",
    subTitle: "Узбекистан, Ташкент, улица Бабура, 6",
    openTime: "10",
    closeTime: "02",
    workDuration: function () {
      return `${this.openTime}:00 -  ${this.closeTime}:00`;
    },
    sinceCloseTime: "10:00",
    tel: "+998712005400",
    lat: 41.297942,
    lon: 69.249418,
  },
  {
    id: 13,
    title: "MUQUMIY",
    subTitle: "Узбекистан, Ташкент, улица Чиланзар",
    openTime: "10",
    closeTime: "04",
    workDuration: function () {
      return `${this.openTime}:00 -  ${this.closeTime}:00`;
    },
    sinceCloseTime: "10:00",
    tel: "+998712005400",
    lat: 41.287853,
    lon: 69.22921,
  },
  {
    id: 14,
    title: "GRAND MIR",
    subTitle: "Узбекистан, Ташкент, улица Шота Руставели, 9А",
    openTime: "10",
    closeTime: "03",
    workDuration: function () {
      return `${this.openTime}:00 -  ${this.closeTime}:00`;
    },
    sinceCloseTime: "10:00",
    tel: "+998712005400",
    lat: 41.295049,
    lon: 69.268032,
  },
  {
    id: 15,
    title: "SAYRAM",
    subTitle: "Узбекистан, Ташкент, улица Юнусота",
    openTime: "10",
    closeTime: "03",
    workDuration: function () {
      return `${this.openTime}:00 -  ${this.closeTime}:00`;
    },
    sinceCloseTime: "10:00",
    tel: "+998712005400",
    lat: 41.372031,
    lon: 69.310816,
  },
  {
    id: 16,
    title: "MAKSIM GORKIY",
    subTitle: "махалля Элобод",
    openTime: "10",
    closeTime: "01",
    workDuration: function () {
      return `${this.openTime}:00 -  ${this.closeTime}:00`;
    },
    sinceCloseTime: "10:00",
    tel: "+998712005400",
    lat: 41.326788,
    lon: 69.33006,
  },
  {
    id: 17,
    title: "SERGELI",
    subTitle:
      "Узбекистан, Ташкент, Сергелийский район, массив Сергели-VIIIА, 11",
    openTime: "10",
    closeTime: "03",
    workDuration: function () {
      return `${this.openTime}:00 -  ${this.closeTime}:00`;
    },
    sinceCloseTime: "10:00",
    tel: "+998712005400",
    lat: 41.226084,
    lon: 69.220017,
  },
  {
    id: 18,
    title: "FONTAN",
    subTitle: "проспект Амира Темура",
    openTime: "10",
    closeTime: "03",
    workDuration: function () {
      return `${this.openTime}:00 -  ${this.closeTime}:00`;
    },
    sinceCloseTime: "10:00",
    tel: "+998712005400",
    lat: 41.36306,
    lon: 69.289358,
  },
  {
    id: 19,
    title: "MINOR",
    subTitle: "MaxWay",
    openTime: "10",
    closeTime: "03",
    workDuration: function () {
      return `${this.openTime}:00 -  ${this.closeTime}:00`;
    },
    sinceCloseTime: "10:00",
    tel: "+998712005400",
    lat: 41.328048,
    lon: 69.282557,
  },
];

export const tabBtns = [
  { id: 1, title: "Ro'yxat", status: true },
  { id: 2, title: "Xarita", status: false },
];
