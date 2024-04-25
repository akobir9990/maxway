import { motion } from "framer-motion";
import QRCode from "../../components/qrComponent/QRCode";

export default function Contacts() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200, top: 200 }}
      animate={{ opacity: 1, y: 0, top: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h1 className="font-bold text-[32px] font-sans mb-8">Bog&apos;lanish</h1>
      <QRCode />
      <div className="flex flex-col gap-2 mt-4">
        <strong className="text-[20px] font-sans">Yagona aloqa markazi</strong>
        <a className="text-4 font-sans" href="tel:+998712005400">
          +998712005400
        </a>
      </div>
    </motion.div>
  );
}
