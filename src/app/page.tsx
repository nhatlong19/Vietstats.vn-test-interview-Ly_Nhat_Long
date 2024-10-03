"use client";
import { Calendar } from "@/components/Calendar";
import { ClassManagement } from "@/components/ClassManagement";
import { Dashboard } from "@/components/Dashboard";
import { Header } from "@/components/Header";
import { Settings } from "@/components/Settings";
import { Sidebar } from "@/components/Sidebar";
import { SIDEBAR_LIST } from "@/constants/sidebar";
import { store } from "@/redux/store";
import { useState } from "react";
import { Provider } from "react-redux";

export default function DashboardPage() {
  const [activeItem, setActiveItem] = useState("1");
  const [isCollapsed, setCollapsed] = useState(false);

  const handleMenuClick = (id: string) => {
    setActiveItem(id);
  };

  const renderContent = () => {
    switch (activeItem) {
      case "1":
        return <Dashboard />;
      case "2":
        return <Calendar />;
      case "3":
        return <ClassManagement />;
      case "4":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  const handleCollapseSidebar = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <Provider store={store}>
      <div className="managerPage">
        <Header onClick={handleCollapseSidebar} />
        <div className="managerContent">
          <Sidebar
            sidebarList={SIDEBAR_LIST}
            onMenuClick={handleMenuClick}
            activeItem={activeItem}
            isCollapsed={isCollapsed}
          />
          <div className="content">{renderContent()}</div>
        </div>
      </div>
    </Provider>
  );
}
