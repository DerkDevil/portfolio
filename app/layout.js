import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "../components/Header"
import ScrollManager from "../components/ScrollManager";

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weights: [100, 200, 300, 400, 500, 600, 700, 800],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata = {
  title: "Dereck | Web Developer",
  description: "Dereck | Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={JetBrainsMono.variable}>
        <ScrollManager>
          <Header />
          {children}
        </ScrollManager>

        <div id="mobile-nav-root" />
      </body>
    </html>
  );
}
