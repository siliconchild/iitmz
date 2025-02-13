"use client";
import { useState, createContext, useContext, ReactNode } from "react";

export interface TabsContextType {
  activeTab: number;
  handleTabClick: (index: number) => void;
}

export const TabsContext = createContext<TabsContextType | undefined>(undefined);

interface TabsProps {
  children: ReactNode;
  defaultIndex?: number;
}

const Tabs = ({ children, defaultIndex }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultIndex || 0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return <TabsContext.Provider value={{ activeTab, handleTabClick }}>{children}</TabsContext.Provider>;
};

interface TabButtonProps {
  index: number;
  className: string;
  children: ReactNode;
}

const TabButton = ({ index, className, children }: TabButtonProps) => {
  const { activeTab, handleTabClick } = useContext(TabsContext) as TabsContextType;

  return (
    <button onClick={() => handleTabClick(index)} className={activeTab === index ? className : ""}>
      {children}
    </button>
  );
};

interface TabPanelProps {
  index: number;
  children: ReactNode;
}

const TabPanel = ({ index, children }: TabPanelProps) => {
  const { activeTab } = useContext(TabsContext) as TabsContextType;

  return activeTab === index ? <div className="tab-content">{children}</div> : null;
};

export { Tabs, TabButton, TabPanel };
