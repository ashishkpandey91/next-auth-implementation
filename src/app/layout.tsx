import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "@/context/AuthProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-slate-950"
      >
        <AuthProvider>
          <main className="flex justify-center items-start p-6 min-h-screen ">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
