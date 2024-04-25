import Header from "./layout/header";
import Footer from "./layout/footer";
import Router from "./router/Router";
import ProgressBar from "react-progress-bar-plus";
import { useEffect, useState } from "react";
import "react-progress-bar-plus/lib/progress-bar.css";

export default function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 10;
        if (newProgress >= 100) {
          clearInterval(interval);
        }
        return newProgress;
      });
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="maxWidth:p-0 px-4 max-w-[1340px] mx-auto">
      <ProgressBar percent={progress} autoIncrement className="bg-primary" />
      <Header />
      <Router />
      <Footer />
    </div>
  );
}
