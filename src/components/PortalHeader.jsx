import React from "react";

export default function PortalHeader({ user }) {
  return (
    <header
      className="d-flex justify-content-between align-items-center px-4 py-2"
      style={{
        background: "#ffffff",
        borderBottom: "1px solid #e0e6eb",
      }}
    >
      <div className="fw-bold" style={{ fontSize: "1.2rem" }}>
        ELS · Unified Portal
      </div>

      <div className="fw-semibold text-muted">
        {user.station} · {user.role} · {user.name}
      </div>
    </header>
  );
}
