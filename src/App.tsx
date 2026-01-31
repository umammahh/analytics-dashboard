import { useState, useEffect } from "react";
import DashboardPage from "./pages/DashboardPage";
import { SideBar } from "./components/SideBar";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSidebarOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      <SideBar isOpen={sidebarOpen} onToggle={toggleSidebar} />
      <div className="flex-1 overflow-hidden">
        <DashboardPage />
      </div>
    </div>
  );
}

export default App;
