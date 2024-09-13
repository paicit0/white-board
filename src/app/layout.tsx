import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chat from "./chat/Chat";
import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body>
      <Navbar />
      <Chat />
        {children}
      <Footer />
      </body>
    </html>
  );
}
