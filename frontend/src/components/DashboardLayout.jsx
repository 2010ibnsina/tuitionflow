// src/components/DashboardLayout.jsx

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function DashboardLayout({ children }) {
  return (
    <>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div style={{ flex: 1, padding: "20px" }}>
          {children}
        </div>
      </div>
    </>
  );
}

export default DashboardLayout;