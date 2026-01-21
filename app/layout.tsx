import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: {
        default: "Developer Portfolio | AI-Powered Cross-Platform Solutions",
        template: "%s | Developer Portfolio",
    },
    description:
        "Building AI-powered cross-platform solutions. Explore my collection of Android, iOS, Windows, macOS, and Web applications.",
    keywords: [
        "developer",
        "portfolio",
        "AI",
        "Android",
        "iOS",
        "cross-platform",
        "Kotlin",
        "Python",
        "mobile apps",
    ],
    authors: [{ name: "Developer" }],
    creator: "Developer",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://yoursite.com",
        siteName: "Developer Portfolio",
        title: "Developer Portfolio | AI-Powered Cross-Platform Solutions",
        description:
            "Building AI-powered cross-platform solutions. Explore my collection of Android, iOS, Windows, macOS, and Web applications.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Developer Portfolio | AI-Powered Cross-Platform Solutions",
        description:
            "Building AI-powered cross-platform solutions. Explore my collection of Android, iOS, Windows, macOS, and Web applications.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
