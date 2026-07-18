import React from "react";
import AppTile from "../components/AppTile.jsx";

export default function PortalHome({ apps }) {
  return (
    <div
      className="p-4"
      style={{
        background: "#f4f7fb",
        minHeight: "100%",
      }}
    >
      <h4 className="mb-4 fw-semibold">Your Applications</h4>

      <div className="row">
        {apps.map((app) => (
          <div key={app.key} className="col-md-4">
            <AppTile
              title={app.title}
              description={app.description}
              icon={app.icon}
              onOpen={() => window.location.assign(app.url)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
