import React from "react";

export default function AppTile({ title, description, icon, onOpen }) {
  return (
    <div
      onClick={onOpen}
      style={{
        cursor: "pointer",
        background: "rgba(255,255,255,0.9)",
        borderRadius: "12px",
        padding: "20px",
        border: "1px solid #dce3eb",
        boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
        transition: "all 0.2s ease",
      }}
      className="mb-4"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0px)";
        e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.08)";
      }}
    >
      <div className="d-flex align-items-center mb-3">
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "10px",
            background: "#e8f0fe",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "12px",
            fontSize: "22px",
          }}
        >
          {icon}
        </div>

        <h5 className="m-0">{title}</h5>
      </div>

      <p className="text-muted" style={{ fontSize: "0.9rem" }}>
        {description}
      </p>
    </div>
  );
}
