import React from "react";

export default function WhatsAppButton() {
  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }}>
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "block",
          width: "60px",
          height: "60px",
          backgroundColor: "#25d366",
          borderRadius: "50%",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          transition: "all 0.3s ease-in-out",
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <img
          src="/icons/whatsapp-icon.svg"
          alt="WhatsApp"
          style={{ width: "35px", height: "35px", margin: "12.5px auto", display: "block" }}
        />
      </a>
    </div>
  );
}
