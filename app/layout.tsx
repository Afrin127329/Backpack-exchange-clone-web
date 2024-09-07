/* eslint-disable @next/next/no-sync-scripts */
import Navbar from "@/packages/components/Nav/Navbar";
import { ThemeProvider } from "@/packages/lib/themeProvider";
import "@/packages/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Backpack exchange web clone",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <Suspense fallback={<Loading />}>{children}</Suspense>

          {/* Footer */}
          <footer className="m-4 text-xs">
            <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col md:flex-row items-center justify-center gap-4">
              <span className=" sm:text-center font-bold">
                © 2024{" "}
                <a
                  href="https://backpack.exchange/"
                  className="hover:opacity-80"
                  target="_blank"
                >
                  Backpack Exchange.
                </a>
              </span>
              <ul className="flex flex-wrap items-center mt-3 font-medium text-muted-foreground sm:mt-0">
                <li>
                  <Link
                    href="https://support.backpack.exchange/en/categories/305665-legal-documents"
                    className="hover:opacity-80 me-4 md:me-6"
                    target="_blank"
                  >
                    Legal
                  </Link>
                </li>
                <li>
                  <a
                    href="https://support.backpack.exchange/en/articles/484353"
                    className="hover:opacity-80 me-4 md:me-6"
                    target="_blank"
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </ThemeProvider>
        <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.js"></script>
      </body>
    </html>
  );
}
