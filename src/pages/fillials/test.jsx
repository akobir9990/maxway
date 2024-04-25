import { useState } from "react";

const TabComponent = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState(1);

  // Function to handle tab button click
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div>
      {/* Tab buttons */}
      <button
        onClick={() => handleTabClick(1)}
        style={{ backgroundColor: activeTab === 1 ? "blue" : "gray" }}
      >
        Tab 1
      </button>
      <button
        onClick={() => handleTabClick(2)}
        style={{ backgroundColor: activeTab === 2 ? "blue" : "gray" }}
      >
        Tab 2
      </button>
      {/* Tab content */}
      <div>
        {activeTab === 1 && <p>Content of Tab 1</p>}
        {activeTab === 2 && <p>Content of Tab 2</p>}
      </div>
    </div>
  );
};

export default TabComponent;
