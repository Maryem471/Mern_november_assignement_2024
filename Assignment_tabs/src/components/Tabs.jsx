import React, { useState } from 'react';


const Tabs = ({ items }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
     
      <div className="tab-headers">
        {items.map((item, index) => (
          <button
            key={index}
            className={`tab-header ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {item.label}
          </button>
        ))}
      </div>

     
      <div className="tab-content">
        {items[activeTab] && <p>{items[activeTab].content}</p>}
      </div>
    </div>
  );
};

export default Tabs;
