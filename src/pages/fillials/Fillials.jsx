import { motion } from "framer-motion";
import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import YMap from "../../components/yandexMap/YMap";
import FillialsItem from "../../components/fillialsItem/FillialsItem";
import { allFillials } from "../../const";

export default function Fillials() {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 200, top: 200 }}
      animate={{ opacity: 1, y: 0, top: 0 }}
      transition={{ delay: 0.3 }}
    >
      <Tabs className="my-8">
        <div className="flex justify-between">
          <h1 className="text-[32px] font-bold font-sans mb-6">Filliallar</h1>
          <TabList className=" flex gap-3 items-center">
            <Tab
              className={`w-[144px] h-12 rounded-[20px] ${
                activeTab === 1
                  ? "bg-primary text-white"
                  : "bg-secondaryColor text-darkGrey"
              } flex justify-center items-center font-bold cursor-pointer`}
              onClick={() => handleTabClick(1)}
            >
              Ro&apos;yxat
            </Tab>
            <Tab
              className={`w-[144px] h-12 rounded-[20px] ${
                activeTab === 2
                  ? "bg-primary text-white"
                  : "bg-secondaryColor text-darkGrey"
              } flex justify-center items-center font-bold cursor-pointer`}
              onClick={() => handleTabClick(2)}
            >
              Xarita
            </Tab>
          </TabList>
        </div>
        <div>
          <TabPanel>
            {activeTab === 1 && (
              <>
                {allFillials.map((fillial) => {
                  return (
                    <div key={fillial.id}>
                      <FillialsItem fillial={fillial} />
                    </div>
                  );
                })}
              </>
            )}
          </TabPanel>
          <TabPanel>{activeTab === 2 && <YMap />}</TabPanel>
        </div>
      </Tabs>
    </motion.div>
  );
}
