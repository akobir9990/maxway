import maxiBoxAnanaviy from "../assets/foods/maxi-box/maxi-box-ananaviy.png";
import maxiBoxTaniqli from "../assets/foods/maxi-box/maxi-box-taniqli.png";
import maxiBoxRetro from "../assets/foods/maxi-box/maxi-box-retro.png";
import maxiBoxPanini from "../assets/foods/maxi-box/maxi-box-panini.png";
import maxiBoxGerman from "../assets/foods/maxi-box/maxi-box-german.png";
import maxiBoxTrend from "../assets/foods/maxi-box/maxi-box-trend.png";
import miniBox from "../assets/foods/maxi-box/mini-box.png";

import bigBurger from "../assets/foods/burger/bigburger.png";
import chizBurger from "../assets/foods/burger/chizburger.png";
import gamburger from "../assets/foods/burger/gamburger.png";

import brauni from "../assets/foods/deserts/brauni.png";
import karamelDonat from "../assets/foods/deserts/karamelDonat.png";
import qulupnayliDonat from "../assets/foods/deserts/qulupnayliDonat.png";
import sanSebastian from "../assets/foods/deserts/sanSebastian.png";
import tiramisu from "../assets/foods/deserts/tiramisu.png";
import yongoqliDonat from "../assets/foods/deserts/yongoqliDonat.png";

import donarBox from "../assets/foods/doner/donarBox.png";
import donerKebab from "../assets/foods/doner/donerKebab.png";
import non from "../assets/foods/doner/non.png";

import americano from "../assets/foods/drinks/americano.png";
import blackTea from "../assets/foods/drinks/blackTea.png";
import bonaqua from "../assets/foods/drinks/bonaqua.png";
import cocaCola from "../assets/foods/drinks/cocaCola.png";
import colaRazliv from "../assets/foods/drinks/colaRazliv.png";
import dena from "../assets/foods/drinks/dena.png";
import fanta from "../assets/foods/drinks/fanta.png";
import fuseTea from "../assets/foods/drinks/fuseTea.png";
import greenTea from "../assets/foods/drinks/greenTea.png";
import kapucino from "../assets/foods/drinks/kapucino.png";
import latte from "../assets/foods/drinks/latte.png";
import lemonTea from "../assets/foods/drinks/lemonTea.png";
import stakan from "../assets/foods/drinks/stakan.png";

import guruch from "../assets/foods/foods/guruch.png";
import salat from "../assets/foods/foods/salat.png";

import chizdog from "../assets/foods/hotDog/chizdog.png";
import hotdog from "../assets/foods/hotDog/hotdog.png";
import kingdog from "../assets/foods/hotDog/kingdog.png";
import longer from "../assets/foods/hotDog/longer.png";

import klabSendvich from "../assets/foods/klab/klab-sendvich.png";
import sendvichOriginal from "../assets/foods/klab/sendvich-original.png";

import lavashMini from "../assets/foods/lavash/lavash-mini.png";
import lavash from "../assets/foods/lavash/lavash.png";

import panini from "../assets/foods/panini/panini.png";

import germanDoner from "../assets/foods/shaurma/german-doner.png";
import shaurma from "../assets/foods/shaurma/shaurma.png";

import box from "../assets/foods/snaks/box.png";
import fri from "../assets/foods/snaks/fri.png";
import kraftPaket from "../assets/foods/snaks/kraftPaket.png";
import nagets from "../assets/foods/snaks/nagets.png";
import poDerevyanskiy from "../assets/foods/snaks/poDerevyanskiy.png";
import strips from "../assets/foods/snaks/strips.png";

import cheese from "../assets/foods/souses/cheese.png";
import ketchup from "../assets/foods/souses/ketchup.png";
import sarimsoq from "../assets/foods/souses/sarimsoq.png";
import sweet from "../assets/foods/souses/sweet.png";
import xalapeno from "../assets/foods/souses/xalapeno.png";

export const allProducts = [
  {
    id: 1,
    title: "Maxi BOX",
    getWithId: "maxiBox",
    foods: [
      {
        id: 1,
        foodName: "Maxi BOX An'anaviy",
        foodDescription:
          "Original sendvich, kartoshka fri, 0,4 l coca cola, tanl...",
        foodImage: maxiBoxAnanaviy,
        foodPrice: 40000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
      {
        id: 2,
        foodName: "Maxi BOX Taniqli",
        foodDescription:
          "Original lavash, kartoshka fri, 0,4 l coca cola, tanlas...",
        foodImage: maxiBoxTaniqli,
        foodPrice: 40000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
      {
        id: 3,
        foodName: "Maxi BOX Retro",
        foodDescription:
          "Shaurma Original, kartoshka fri, 0,4 l coca cola , tanl...",
        foodImage: maxiBoxRetro,
        foodPrice: 38000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: false,
        amount: 0,
      },
      {
        id: 4,
        foodName: "Max BOX Panini",
        foodDescription:
          "Original panini, kartoshka fri, 0,4 l coca cola, tanlas...",
        foodImage: maxiBoxPanini,
        foodPrice: 38000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
      {
        id: 5,
        foodName: "Max BOX German",
        foodDescription:
          "Herman Donar , kartoshka fri, 0,4 l coca cola, tanlash ...",
        foodImage: maxiBoxGerman,
        foodPrice: 40000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
      {
        id: 6,
        foodName: "Maxi BOX Trend",
        foodDescription:
          "Gamburger, kartoshka fri, 0,4 l coca cola, tanlash uch...",
        foodImage: maxiBoxTrend,
        foodPrice: 35000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
      {
        id: 7,
        foodName: "Mini BOX",
        foodDescription:
          "Longer, kartoshka fri, coca-cola 0,3, tanlovga ko'ra so...",
        foodImage: miniBox,
        foodPrice: 25000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
    ],
  },
  {
    id: 2,
    title: "Klab-Sendvich",
    getWithId: "klab",
    foods: [
      {
        id: 1,
        foodName: "Klab sendvich",
        foodDescription: "Original sendvich, kartoshka fri, tanlash uchun sous",
        foodImage: klabSendvich,
        foodPrice: 34000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
      {
        id: 2,
        foodName: "Sendvich Original",
        foodDescription:
          "Toster non, tovuq shnitseli, yangi bodring, pomidor, kl...",
        foodImage: sendvichOriginal,
        foodPrice: 28000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
    ],
  },
  {
    id: 3,
    title: "Lavash",
    getWithId: "lavash",
    foods: [
      {
        id: 1,
        foodName: "Lavash",
        foodDescription:
          "Lavash, donar mol go'shti, pomidor, chipslar, pomidor s...",
        foodImage: lavash,
        foodPrice: 30000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
      {
        id: 2,
        foodName: "Lavash mini",
        foodDescription:
          "Pita, mol go'shti-donar, pomidor, chipslar, pomidor sou...",
        foodImage: lavashMini,
        foodPrice: 25000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
    ],
  },
  {
    id: 4,
    title: "Shaurma",
    getWithId: "shaurma",
    foods: [
      {
        id: 1,
        foodName: "Shaurma",
        foodDescription:
          "Donor bulochka, mol go'shti-donar, yangi bodring, pomid...",
        foodImage: shaurma,
        foodPrice: 28000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
      {
        id: 2,
        foodName: "German Donar",
        foodDescription:
          "Non, ranch sousi, qizil karam salati, Doner go'shti, ay...",
        foodImage: germanDoner,
        foodPrice: 28000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
    ],
  },
  {
    id: 5,
    title: "Panini",
    getWithId: "panini",
    foods: [
      {
        id: 1,
        foodName: "Panini",
        foodDescription:
          "Bulochka, mol go'shti-donar, pomidor, tuzlangan bodring...",
        foodImage: panini,
        foodPrice: 28000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
    ],
  },
  {
    id: 6,
    title: "Burger",
    getWithId: "burger",
    foods: [
      {
        id: 1,
        foodName: "Gamburger",
        foodDescription:
          "Burger bulochkasi, tuzlangan bodring, pomidor, go'shtli...",
        foodImage: gamburger,
        foodPrice: 24000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
      {
        id: 2,
        foodName: "Chizburger",
        foodDescription:
          "Burger bulochkasi, tuzlangan bodring, pomidor, go'shtli...",
        foodImage: chizBurger,
        foodPrice: 27000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
      {
        id: 3,
        foodName: "Bigburger",
        foodDescription:
          "Burger bulochkasi, tuzlangan bodring, pomidor, 2 ta go'...",
        foodImage: bigBurger,
        foodPrice: 39000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
    ],
  },
  {
    id: 7,
    title: "Donar Kebab",
    getWithId: "donar",
    foods: [
      {
        id: 1,
        foodName: "Donar kebab",
        foodDescription:
          "Mol go'shti donari-go'sht, makkajo'xori bilan guruch, k...",
        foodImage: donerKebab,
        foodPrice: 42000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
      {
        id: 2,
        foodName: "Donar Box",
        foodDescription:
          "Mol go'shti donari-go'sht, kartoshka fri, guruch, ranch...",
        foodImage: donarBox,
        foodPrice: 36000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
      {
        id: 3,
        foodName: "Non",
        foodDescription: "Yumshoq bulochka",
        foodImage: non,
        foodPrice: 3000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
    ],
  },
  {
    id: 8,
    title: "Hot-Dog",
    getWithId: "hotDog",
    foods: [
      {
        id: 1,
        foodName: "Hot Dog",
        foodDescription:
          "Hot-dog bulochkasi, Kanada sosiskasi, tuzlangan bodring...",
        foodImage: hotdog,
        foodPrice: 12000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
      {
        id: 2,
        foodName: "King Dog",
        foodDescription:
          "Hot-dog bulochkasi, 2 ta kanada sosiskasi, tuzlangan bo...",
        foodImage: kingdog,
        foodPrice: 20000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
      {
        id: 3,
        foodName: "Chiz dog",
        foodDescription:
          "Hot-dog bulochkasi, kanada sosiskasi, tuzlangan bodri...",
        foodImage: chizdog,
        foodPrice: 15000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
      {
        id: 4,
        foodName: "Longer",
        foodDescription:
          "Hot-dog bulochka, firmenniy sous, strips 2 dona, tuzl...",
        foodImage: longer,
        foodPrice: 15000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
    ],
  },
  {
    id: 9,
    title: "Gazaklar",
    getWithId: "snacks",
    foods: [
      {
        id: 1,
        foodName: "Fri kartoshkasi",
        foodDescription: "",
        foodImage: fri,
        foodPrice: 9000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
      {
        id: 2,
        foodName: "Kraft packet",
        foodDescription: "",
        foodImage: kraftPaket,
        foodPrice: 2000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
      {
        id: 3,
        foodName: "BOX",
        foodDescription:
          "Strips (2 dona), kartoshka fri (80 gr), naggetslar (4 d...",
        foodImage: box,
        foodPrice: 22000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
      {
        id: 4,
        foodName: "Strips",
        foodDescription: "",
        foodImage: strips,
        foodPrice: 17000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
      {
        id: 5,
        foodName: "Naggets",
        foodDescription: "",
        foodImage: nagets,
        foodPrice: 15000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
      {
        id: 6,
        foodName: "Po derevenski",
        foodDescription: "",
        foodImage: poDerevyanskiy,
        foodPrice: 15000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
    ],
  },
  {
    id: 10,
    title: "Tamaddilar",
    getWithId: "foods",
    foods: [
      {
        id: 1,
        foodName: "Guruch",
        foodDescription: "Shirin makkajo'xori bilan pishirilgan lazer guruch",
        foodImage: guruch,
        foodPrice: 7000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
      {
        id: 2,
        foodName: "Salat",
        foodDescription: "Salat qizil karam aralashmasi",
        foodImage: salat,
        foodPrice: 7000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
    ],
  },
  {
    id: 11,
    title: "Desertlar",
    getWithId: "desserts",
    foods: [
      {
        id: 1,
        foodName: "Tiramisu",
        foodDescription: "Savoyardi pechene, mascarpone, qahva",
        foodImage: tiramisu,
        foodPrice: 22000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
      {
        id: 2,
        foodName: "Qulupnayli donat",
        foodDescription: "",
        foodImage: qulupnayliDonat,
        foodPrice: 16000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
      {
        id: 3,
        foodName: "Karamel donat",
        foodDescription: "",
        foodImage: karamelDonat,
        foodPrice: 16000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
      {
        id: 4,
        foodName: "Yo'ng'oqli donat",
        foodDescription: "",
        foodImage: yongoqliDonat,
        foodPrice: 16000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
      {
        id: 5,
        foodName: "Brauni",
        foodDescription: "Qora shokolad, yong'oq va shokoladli pechene",
        foodImage: brauni,
        foodPrice: 22000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
      {
        id: 6,
        foodName: "San-sebastian",
        foodDescription: "Savoyardi kukilari, mascarpone, kahva",
        foodImage: sanSebastian,
        foodPrice: 22000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
    ],
  },
  {
    id: 12,
    title: "Ichimliklar",
    getWithId: "drinks",
    foods: [
      {
        id: 1,
        foodName: "Coca Cola (quyma)",
        foodDescription: "",
        foodImage: colaRazliv,
        foodPrice: 7000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
      {
        id: 2,
        foodName: "Coca Cola",
        foodDescription: "",
        foodImage: cocaCola,
        foodPrice: 10000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
      {
        id: 3,
        foodName: "Fanta",
        foodDescription: "",
        foodImage: fanta,
        foodPrice: 10000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
      {
        id: 4,
        foodName: "Sharbat Dena",
        foodDescription: "",
        foodImage: dena,
        foodPrice: 5000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
      {
        id: 5,
        foodName: "Fuse tea",
        foodDescription: "",
        foodImage: fuseTea,
        foodPrice: 10000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
      {
        id: 6,
        foodName: "Bonaqua",
        foodDescription: "",
        foodImage: bonaqua,
        foodPrice: 5000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
      {
        id: 7,
        foodName: "Bir martali stakan",
        foodDescription: "",
        foodImage: stakan,
        foodPrice: 1000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
      {
        id: 8,
        foodName: "Qora choy",
        foodDescription: "Qora choy (ta’bga kora shakar)",
        foodImage: blackTea,
        foodPrice: 5000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
      {
        id: 9,
        foodName: "Ko'k choy",
        foodDescription: "Ko’k choy (ta’bga kora shakar)",
        foodImage: greenTea,
        foodPrice: 5000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
      {
        id: 10,
        foodName: "Limonli choy",
        foodDescription: "Limonli choy (ta’bga ko'rish uchun shakar)",
        foodImage: lemonTea,
        foodPrice: 7000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
      {
        id: 11,
        foodName: "Amerikano",
        foodDescription: "Tabiiy donli qahva (espresso, suv)",
        foodImage: americano,
        foodPrice: 12000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
      {
        id: 12,
        foodName: "Kapuchino",
        foodDescription: "Tabiiy donli qahva (espresso, sut, suv)",
        foodImage: kapucino,
        foodPrice: 14000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
      {
        id: 13,
        foodName: "Latte",
        foodDescription: "Tabiiy donli qahva (espresso, sut, suv)",
        foodImage: latte,
        foodPrice: 14000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
    ],
  },
  {
    id: 13,
    title: "Souslar",
    getWithId: "Sauces",
    foods: [
      {
        id: 1,
        foodName: "Ketchup",
        foodDescription: "",
        foodImage: ketchup,
        foodPrice: 3000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
      {
        id: 2,
        foodName: "Pishloqli sous",
        foodDescription: "",
        foodImage: cheese,
        foodPrice: 3000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
      {
        id: 3,
        foodName: "Sarimsoqli sous",
        foodDescription: "",
        foodImage: sarimsoq,
        foodPrice: 3000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
      {
        id: 4,
        foodName: "Xalapeno",
        foodDescription: "",
        foodImage: xalapeno,
        foodPrice: 3000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
      {
        id: 5,
        foodName: "Shirin va nordon sous",
        foodDescription: "",
        foodImage: sweet,
        foodPrice: 3000,
        isOnPromotion: false,
        isOnPromotionPrice: "0",
        isAvailable: true,
        amount: 0,
      },
    ],
  },
];

export const basket = allProducts.filter((category) =>
  category.foods.some((food) => food.amount > 0)
);

export let sortedArr = [];
basket.map((category) => {
  category.foods.map((food) => {
    if (food.amount > 0) {
      sortedArr.push(food);
    }
  });
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let num = () => {
//   let count = 0;
//   allProducts
//     .filter((category) => category.foods.some((food) => food.amount > 0))
//     .map((category) =>
//       category.foods.map((food) => {
//         if (food.amount > 0) {
//           count += 1;
//         } else {
//           count += 0;
//         }
//       })
//     );
//   return count;
// };
// console.log("notifNum", num());

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let price = 1231322;
// function priceFormatter(num) {
//   let res = num
//     .toString()
//     .slice("")
//     .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
//   return res;
// } // output 1,000,000
// console.log(`from ${price} to ${priceFormatter(price)}`);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
