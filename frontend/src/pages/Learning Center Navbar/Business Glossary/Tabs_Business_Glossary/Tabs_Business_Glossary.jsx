import React, { useState } from 'react';
import './Tabs_Business_Glossary.css';

import Content_A from './Content_Business_Glossary/Content_A';
import Content_B from './Content_Business_Glossary/Content_B';

const Tabs_Business_Glossary = () => {
    const [activeTab, setActiveTab] = useState('A');

    // Define your tabs dynamically (excluding Overview and FAQs)
    const tabs = [
        { name: 'A', content: <Content_A /> },
        { name: 'B', content: <Content_B /> },
        { name: 'C', content: <p>Content for tab C</p> },
        { name: 'D', content: <p>Content for tab D</p> },
        { name: 'E-G', content: <p>Content for tabs E-G</p> },
        { name: 'H-L', content: <p>Content for tabs H-L</p> },
        { name: 'M', content: <p>Content for tab M</p> },
        { name: 'N-O', content: <p>Content for tabs N-O</p> },
        { name: 'P', content: <p>Content for tab P</p> },
        { name: 'Q-R', content: <p>Content for tabs Q-R</p> },
        { name: 'S', content: <p>Content for tab S</p> },
        { name: 'T-Z', content: <p>Content for tabs T-Z</p> },
    ];

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="tabs-business-glossary-container">
            <p>
            Browse or search business terms in the online business glossary. Here you will find the definition of incorporate, information on business terms, both specific to incorporation and otherwise. Further expand your business vocabulary by using the cross-reference index.
            </p>
            <div className="tabs-business-glossary-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-business-glossary-tab ${activeTab === tab.name ? 'tabs-business-glossary-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-business-glossary-tab-indicator">
                <div className={`tabs-business-glossary-indicator tabs-business-glossary-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-business-glossary-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_Business_Glossary;
