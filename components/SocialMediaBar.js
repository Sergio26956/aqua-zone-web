import React from "react";

export default function SocialMediaBar() {
  const icons = [
    { href: "https://wa.me/1234567890", src: "/icons/whatsapp-icon.svg", alt: "WhatsApp", bg: "#25d366" },
    { href: "https://facebook.com", src: "/icons/facebook-icon.svg", alt: "Facebook", bg: "#4267B2" },
    { href: "https://instagram.com", src: "/icons/instagram-icon.svg", alt: "Instagram", bg: "#E1306C" },
  ];

  return (
    <div style={{ position: "fixed", bottom: "20px", left: "20px", zIndex: 1000, display: "flex", flexDirection: "column", gap: "10px" }}>
      {icons.map((icon, index) => (
        <a
          key={index}
          href={icon.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: icon.bg,
            borderRadius: "50%",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            transition: "all 0.3s ease-in-out",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <img src={icon.src} alt={icon.alt} style={{ width: "30px", height: "30px" }} />
        </a>
      ))}
    </div>
  );
}
