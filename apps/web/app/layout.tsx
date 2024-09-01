import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@portfolio/ui/src/styles/globals.css";
import { Header, ThemeProvider } from "@portfolio/ui";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hitish Rao P",
  description: "Hitish Rao P's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-y-scroll`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark">
          <Header />
          <main className="container pt-16 sm:pt-32 pb-10">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
