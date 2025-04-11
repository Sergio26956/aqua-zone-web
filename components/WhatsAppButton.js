import React from "react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/34649002658"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110"
      title="Contáctanos por WhatsApp"
    >
      <img src="/images/whatsapp-icon.png" alt="WhatsApp" className="w-8 h-8" />
    </a>
  );
}
