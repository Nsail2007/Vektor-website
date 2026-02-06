// Простейшая админ-панель с iframe Plausible (замените ссылку на свою)
import React from "react";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-transparent flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold text-white mb-6">Vektor Analytics</h1>
      <iframe
        src="https://plausible.io/share/vektor.ai?auth=YOUR_TOKEN&embed=true&theme=dark"
        style={{ width: "100%", maxWidth: 1200, height: 700, border: 0, borderRadius: 12, background: "#181a20" }}
        allowFullScreen
        title="Plausible Analytics Dashboard"
      />
      <div className="text-white/60 text-sm mt-4">Доступ к панели можно ограничить через .env или пароль (добавить при необходимости).</div>
    </div>
  );
}
