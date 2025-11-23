import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FarmPrecise - 農業資料儀表板",
  description: "台灣農業資料開放平台儀表板",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
