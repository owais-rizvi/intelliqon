// src/app/layout.js
import './globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export const metadata = {
  title: 'Intelliqon',
  description: 'Empowering Growth through Expert Consulting',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Navbar sits at the absolute top level */}
        <Navbar />
        
        {/* Page content gets injected here */}
        <main>{children}</main>
        
        <Footer />
      </body>
    </html>
  );
}