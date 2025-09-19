import "./globals.css";
import ClientLayout from "@/client-layout";
import TopBar from "@/components/TopBar/TopBar";

export const metadata = {
  title: "Bikash Pandey - Portfolio",
  // description: "Monthly Website Template by Codegrid | August 2025",
  description: "Portfolio of Bikash Pandey - Full Stack Developer",
  icon: "/facicon.ico"


};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><link rel="icon" href="/favicon.ico" /></head>
      <body>
        <ClientLayout>
          <TopBar />
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
