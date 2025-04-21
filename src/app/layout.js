import Navbar from "@/components/Navbar";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";



// import font

// Old
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// New
const inter = Inter({ subsets: ["latin"]})
const roboto = Roboto({ weight: ['400', '500', '700', '900'], subsets: ["latin"]})

export const metadata = {
  title: {
    default: "Next Hero",
    template: "%s | Next Hero"
  },
  description: "Super Powerful Next Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body
      // font setup
      className={roboto.className}
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        
        {children}
        {/* Footer Section */}
        <div className="my-24">
          <footer className="bg-blue-400 font-semibold text-center py-4">
            ----- THIS IS FOOTER ------
          </footer>
        </div>

      </body>
    </html>
  );
}
