import { motion } from "framer-motion";
import { Container } from "react-bootstrap";
import aboutMaxWay from "../../assets/aboutMaxWay.webp";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200, top: 200 }}
      animate={{ opacity: 1, y: 0, top: 0 }}
      transition={{ delay: 0.3 }}
    >
      <Container>
        <h1 className="font-sans font-bold text-[32px] mb-6">
          Kompaniya haqida
        </h1>
        <img className="w-[100%] rounded-lg" src={aboutMaxWay} alt="" />
        <p className="text-[18px] font-sans mt-8 max-w-[880px]">
          Kompaniya 2005 yilning fevral oyida Toshkent shahrida tashkil etilgan.
          Hozirda kompaniyaning Toshkent shahrida 18 ta filiali mavjud. Taomnoma
          asosan klаb sendvichlari, hot-doglar, burgerlar, lavashlar va
          donarlardan iborat. Bizning ustuvor yo`nalishlarimiz -
          ingredientlarning yangiligi va sifati, qo`shimchalarning
          xilma-xilligi, arzon narxlar va mehmonlarning takliflariga e`tibor.
          Har kuni turli xil odamlar MaxWay-dan buyurtma berishadi. Biz esa
          tashrif buyuruvchilar sonini ham, filiallar sonini ham oshirishga
          harakat qilmoqdamiz. Har bir tayyorlangan taom bilan biz o`ziga xos
          retseptlarning tafsilotlarini aniqlaymiz va sizning sevimli brendingiz
          bo`lishda davom etish uchun narx va sifatning mukammal muvozanatini
          qidiramiz. Agar siz kutilmaganda biz tomondan yomon xizmat yoki past
          sifatli pishirilgan taomga duch kelsangiz, bizga @maxwaymasterfood_bot
          manziliga murojaat qiling. Biz ijobiy va salbiy fikr-mulohazalarni
          mamnuniyat bilan qabul qilamiz. Mehmonning shikoyati - bu sovg`a, bu
          tufayli bizda o`sish uchun maqsad bo’ladi.
        </p>
      </Container>
    </motion.div>
  );
}

export default About;
