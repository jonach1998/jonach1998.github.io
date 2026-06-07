import type { Metadata } from "next";
import { geistSans, geistMono } from "@/shared/lib";
import { APP_CONFIG } from "@/shared/config";
import "@/shared/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jonach.me"),
  title: APP_CONFIG.metadata.title,
  description: APP_CONFIG.metadata.description,
  keywords: [
    "Jonathan Chavarria",
    "Python Developer",
    "DevOps Engineer",
    "Cloud Engineer",
    "CI/CD",
    "Automation",
    "AI",
    "AI Engineering",
    "LLM",
    "AWS",
    "Terraform",
    "FastAPI",
    "Docker",
    "Homelab",
    "Costa Rica",
  ],
  authors: [{ name: "Jonathan Chavarria", url: "https://github.com/jonach1998" }],
  alternates: {
    canonical: "https://jonach.me",
  },
  openGraph: {
    type: "website",
    url: "https://jonach.me",
    title: APP_CONFIG.metadata.title,
    description: APP_CONFIG.metadata.description,
    siteName: "Jonathan Chavarria",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Jonathan Chavarria — Python Developer & DevOps Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: APP_CONFIG.metadata.title,
    description: APP_CONFIG.metadata.description,
    images: ["/opengraph-image.png"],
  },
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
