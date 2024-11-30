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
      <body className="antialiased">
        <div className="min-h-screen mx-auto max-w-4xl px-8">
          <header className="pt-4 border-b border-gray-200 dark:border-gray-800">
            <div className="py-4">
              <h1 className="text-3xl font-bold">战绩</h1>
            </div>
          </header>

          <main className="py-6">{children}</main>

          {/* <footer className="border-t border-gray-200 dark:border-gray-800">
            <div className="px-8 py-4 text-sm text-gray-500 dark:text-gray-400">
              <p></p>
            </div>
          </footer> */}
        </div>
      </body>
    </html>
  );
}
