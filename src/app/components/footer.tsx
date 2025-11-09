import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-8 text-center text-gray-500">
      <p
        className="mb-2 text-orange-500 text-xl font-serif"
        style={{
          fontFamily: "Cinzel, serif",
          fontWeight: "600",
          letterSpacing: "0.15em",
        }}
      >
        HIKARI SUSHI
      </p>
      <p
        className="text-sm"
        style={{ fontFamily: "Montserrat, sans-serif", fontWeight: "300" }}
      >
        © 2025 Hikari Sushi — All Rights Reserved.
      </p>
    </footer>
  );
}