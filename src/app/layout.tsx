import type { Metadata } from "next";
import { geistSans, geistMono } from "@/shared/lib";
import { APP_CONFIG } from "@/shared/config";
import "@/shared/styles/globals.css";

export const metadata: Metadata = {
  title: APP_CONFIG.metadata.title,
  description: APP_CONFIG.metadata.description,
};

interface RootLayoutProps {
  readonly children: React.ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps): React.ReactElement {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ fontFeatureSettings: '"kern" 1, "liga" 1' }}
      >
        {children}
      </body>
    </html>
  );
}
