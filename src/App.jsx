import React, { useState } from "react";
import PortalHeader from "./components/PortalHeader.jsx";
import PortalSidebar from "./components/PortalSidebar.jsx";
import PortalHome from "./pages/PortalHome.jsx";
import PortalFooter from "./components/PortalFooter.jsx";

export default function App() {
  const [section, setSection] = useState("home");

  const user = {
    name: "Officer Sharma",
    role: "Investigating Officer",
    station: "PS Rohini",
  };

  const apps = [
    {
      key: "police",
      title: "Police Portal",
      description: "FIR, investigation, evidence, chargesheet.",
      icon: "👮‍♂️",
      url: "https://police-portal.example.com",
    },
    {
      key: "court",
      title: "Court Portal",
      description: "Hearings, orders, digital case files.",
      icon: "⚖️",
      url: "https://court-portal.example.com",
    },
    {
      key: "forensic",
      title: "Forensic Portal",
      description: "Lab requests, reports, chain-of-custody.",
      icon: "🔬",
      url: "https://forensic-portal.example.com",
    },
    {
      key: "hq",
      title: "HQ Portal",
      description: "MI dashboards, workload, risk, escalations.",
      icon: "📊",
      url: "https://hq-portal.example.com",
    },
  ];

  return (
    <div>
      <PortalHeader user={user} />

      <div className="d-flex">
        <PortalSidebar onSelect={setSection} />

        <main style={{ flex: 1, minHeight: "calc(100vh - 56px)" }}>
          {section === "home" && <PortalHome apps={apps} />}
          {section === "mi" && (
            <div className="p-4">MI Dashboard placeholder</div>
          )}
          {section === "ai" && (
            <div className="p-4">AI Assistant placeholder</div>
          )}
        </main>
      </div>

      <PortalFooter />
    </div>
  );
}
