
import React from 'react'
import Sidebar from '../Components/Sidebar'
import MainScreen from "../Components/MainScreen"
import { useState } from 'react';

const AdminPage = () => {
    const [selectedView, setSelectedView] = useState("/admin"); // default view
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
      <div className="flex min-h-screen">
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          onSelect={setSelectedView}
        />
        <MainScreen selectedView={selectedView} />
      </div>
    );
}

export default AdminPage