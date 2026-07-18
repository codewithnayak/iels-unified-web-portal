import React from "react";

export default function PortalFooter() {
  return (
    <footer
      className="text-center py-3"
      style={{
        background: "#ffffff",
        borderTop: "1px solid #e0e6eb",
        fontSize: "0.85rem",
        color: "#6c757d",
      }}
    >
      © {new Date().getFullYear()} Electronic Litigation System · Government of
      India
    </footer>
  );
}
