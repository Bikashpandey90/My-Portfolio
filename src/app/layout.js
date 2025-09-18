import "./globals.css";
import ClientLayout from "@/client-layout";
import TopBar from "@/components/TopBar/TopBar";

export const metadata = {
  title: "Bikash Pandey - Portfolio",
  // description: "Monthly Website Template by Codegrid | August 2025",
  description: "Portfolio of Bikash Pandey - Full Stack Developer",


};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        <ClientLayout>
          <TopBar />
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
