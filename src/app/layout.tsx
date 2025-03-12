import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bombig.net",
  description: "Bombig.net - Internationalized Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
