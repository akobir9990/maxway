import { Route, Routes } from "react-router-dom";
import { HomePage, About, Contacts, Fillials, NotFound } from "../pages";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="about" element={<About />} />
      <Route path="fillials" element={<Fillials />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
