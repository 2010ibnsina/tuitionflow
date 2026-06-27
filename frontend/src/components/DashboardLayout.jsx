import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function DashboardLayout({ children }) {
  const [showSidebar, setShowSidebar] = useState(window.innerWidth > 768);

  useEffect(() => {
    const resize = () => {
      if (window.innerWidth > 768) {
        setShowSidebar(true);
      } else {
        setShowSidebar(false);
      }
    };

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <>
      <Navbar toggleSidebar={() => setShowSidebar(!showSidebar)} />

      <div
  style={{
    display: "flex",
    flexDirection: window.innerWidth <= 768 ? "column" : "row",
  }}
>
  {window.innerWidth > 768 && <Sidebar />}

  <div
    style={{
      flex: 1,
      padding: "20px",
      width: "100%",
      overflowX: "hidden",
    }}
  >
    {children}
  </div>
</div>
    </>
  );
}

export default DashboardLayout;