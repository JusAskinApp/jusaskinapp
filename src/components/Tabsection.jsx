import  React,{useState} from 'react';
import About from './About';
import Settings from './Settings';
import Post from './Post';
import Resources from './Resources';
const TabSectionMessage = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div>
    {/* <Search /> */}
    <div className="p-4 max-w-full mx-auto">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex">
          <button
            className={`${
              activeTab === 1
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } w-1/2 py-4 px-1 text-center border-b-2 font-medium`}
            onClick={() => handleTabClick(1)}
          >
            About
          </button>
          <button
            className={`${
              activeTab === 2
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } w-1/2 py-4 px-1 text-center border-b-2 font-medium`}
            onClick={() => handleTabClick(2)}
          >
            Settings
          </button>
          <button
            className={`${
              activeTab === 3
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } w-1/2 py-4 px-1 text-center border-b-2 font-medium`}
            onClick={() => handleTabClick(3)}
          >
            Saved
          </button>
          <button
            className={`${
              activeTab === 4
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } w-1/2 py-4 px-1 text-center border-b-2 font-medium`}
            onClick={() => handleTabClick(4)}
          >
            Resources
          </button>
        </nav>
      </div>
      <div className="py-4">
        {activeTab === 1 && <About/>}
        {activeTab === 2 &&  <Settings/>}
        {activeTab === 3 &&   <Post/>}
        {activeTab === 4 && <Resources/>}
      </div>
    </div>
    </div>
  );
};

export default TabSectionMessage;
