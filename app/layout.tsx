import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "~/app/components/themeProvider";
import {cn} from "~/lib/utils";
import {ModeToggle} from "~/components/ui/modeToggle";
import Link from "next/link";
import {NavBar} from "~/app/components/layouts/navBar";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "ZipChat",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "w-full")}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <NavBar />
          <div className="px-1 sm:px-10">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
