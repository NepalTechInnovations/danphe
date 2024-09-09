import React, { useState } from 'react';
import './Tabs_Delaware.css';

import Corporation from './Content_Delaware/Corporation';
import LLC from './Content_Delaware/LLC';
import Business_Licenses from './Content_Delaware/Business Licenses';


const Tabs_Delaware = () => {
    const [activeTab, setActiveTab] = useState('Corporation');

    // Define your tabs dynamically (excluding Overview and FAQs)
    const tabs = [
        { name: 'Corporation', content: <Corporation /> },
        { name: 'LLC', content: <LLC /> },
        { name: 'Business-Licenses', content: <Business_Licenses /> },
    ];

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="tabs-Delaware-container">
            <h2>LLC, Business License, Incorporation</h2>

            <p>
            The District of Columbia services both large and small businesses. Major industries in the District of Columbia include government and legal services. Regardless of your industry, we can help you take advantage of the District of Columbia's business services.
            </p>
            
            <div className="tabs-Delaware-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-Delaware-tab ${activeTab === tab.name ? 'tabs-Delaware-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-Delaware-tab-indicator">
                <div className={`tabs-Delaware-indicator tabs-Delaware-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-Delaware-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_Delaware;
