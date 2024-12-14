import React from "react";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import { wildfireAlerts } from "./wildfireData";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import { FaBackspace } from "react-icons/fa";

const WildfireMap = () => {
  const showToast = (alert) => {
    toast(`Wildfire Alert: ${alert.location}`, {
      description: `Status: ${alert.status} - Reported at ${alert.time}`,
    });
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-white">
      <div className="absolute top-4 left-4">
        <Link
          to="/"
          className="p-2 bg-gray-700 rounded-full shadow-lg hover:bg-gray-600 transition-all duration-200"
        >
          <FaBackspace className="h-6 w-6 text-white" />
        </Link>
      </div>

      {/* Header Section */}
      <header className="p-6 bg-gradient-to-r from-red-500 to-orange-500 shadow-lg">
        <h1 className="text-3xl font-extrabold text-center">
          <span className="text-white">Active Wildfires in</span>{" "}
          <span className="text-gray-100">Ifrane, Morocco</span>
        </h1>
      </header>

      {/* Map Section */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="rounded-xl shadow-2xl overflow-hidden bg-gray-700 border border-gray-600">
          <MapContainer
            center={[33.5338, -5.1051]}
            zoom={11}
            style={{ height: "450px", width: "100%" }}
            className="rounded-t-xl"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              maxZoom={19}
            />
            {wildfireAlerts.map((alert) => (
              <CircleMarker
                key={alert.id}
                center={[alert.lat, alert.lng]}
                radius={10}
                pathOptions={{
                  fillColor: alert.status === "Active" ? "#FF5733" : "#6C757D",
                  color: alert.status === "Active" ? "#FF4500" : "#6C757D",
                  weight: 2,
                  opacity: 1,
                  fillOpacity: 0.8,
                }}
                eventHandlers={{
                  click: () => showToast(alert),
                }}
              >
                <Popup>
                  <div className="p-2 text-sm">
                    <h3 className="font-bold text-lg text-gray-900">
                      {alert.location}
                    </h3>
                    <p className="mt-1">
                      <strong>Status:</strong>{" "}
                      <span
                        className={`${
                          alert.status === "Active"
                            ? "text-red-500 font-semibold"
                            : "text-gray-500"
                        }`}
                      >
                        {alert.status}
                      </span>
                    </p>
                    <p className="mt-1">
                      <strong>Reported:</strong> {alert.time}
                    </p>
                  </div>
                </Popup>
              </CircleMarker>
            ))}
          </MapContainer>
        </div>
      </div>

      {/* Alerts Section */}
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 border-b border-gray-600 pb-2">
          Current Alerts
        </h2>
        <div className="space-y-4">
          {wildfireAlerts.map((alert) => (
            <div
              key={alert.id}
              className={`p-5 rounded-lg shadow-lg ${
                alert.status === "Active"
                  ? "bg-gradient-to-r from-red-500 to-orange-500 text-white"
                  : "bg-gray-700 text-gray-300"
              }`}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-extrabold">
                  {alert.status === "Active"
                    ? "🔥 Active Wildfire"
                    : "🛑 Inactive Wildfire"}
                </h3>
                <span className="text-sm">
                  {new Date(alert.time).toLocaleString()}
                </span>
              </div>
              <p className="mt-2 text-lg">{alert.location}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-center py-4 text-gray-500 mt-6">
        <p className="text-sm">
          © 2024 Ghabaty. All rights reserved. | Protecting Nature, Together.
        </p>
      </footer>
    </div>
  );
};

export default WildfireMap;
