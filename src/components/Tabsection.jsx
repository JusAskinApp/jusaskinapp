import { useState } from 'react';

const TabSection = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div>
      <div className="p-4 max-w-full mx-auto">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`${
                  activeTab === index + 1
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } w-full py-4 px-1 text-center border-b-2 font-medium`}
                onClick={() => handleTabClick(index + 1)}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
        <div className="py-4">
          {tabs[activeTab - 1].component}
        </div>
      </div>
    </div>
  );
};

export default TabSection;
