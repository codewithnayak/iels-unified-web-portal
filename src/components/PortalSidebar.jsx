import React from "react";
import { House, BarChart, Robot } from "react-bootstrap-icons";

export default function PortalSidebar({ onSelect, active }) {
  const items = [
    { key: "home", label: "Home", icon: <House size={18} /> },
    { key: "mi", label: "MI Dashboard", icon: <BarChart size={18} /> },
    { key: "ai", label: "AI Assistant", icon: <Robot size={18} /> },
  ];

  return (
    <aside
      style={{
        width: "240px",
        background: "#0A1A2F",
        minHeight: "calc(100vh - 56px)",
        color: "#fff",
      }}
      className="p-3"
    >
      <div className="mb-4 fw-semibold" style={{ opacity: 0.8 }}>
        Navigation
      </div>

      {items.map((item) => (
        <div
          key={item.key}
          onClick={() => onSelect(item.key)}
          className="d-flex align-items-center gap-2 mb-2 px-3 py-2"
          style={{
            cursor: "pointer",
            borderRadius: "8px",
            background: active === item.key ? "#1E3A5F" : "transparent",
            transition: "0.2s",
          }}
        >
          {item.icon}
          <span>{item.label}</span>
        </div>
      ))}
    </aside>
  );
}
