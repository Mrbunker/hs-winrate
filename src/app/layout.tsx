import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "战绩",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body className="antialiased bg-[#F4F4F4]">
        <div className="min-h-screen mx-auto">
          <main className="">{children}</main>
        </div>
      </body>
    </html>
  );
}
