import Footer from "./components/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}
      {/*Footer*/}
      <Footer />
      </body>
    </html>
  )
}
