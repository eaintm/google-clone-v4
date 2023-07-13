import Footer from "./components/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="relative min-h-screen">{children}
      {/*Footer*/}
      <Footer />
      </body>
    </html>
  )
}
