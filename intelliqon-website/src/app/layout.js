import './globals.css';
import Navbar from '../components/Layout/Navbar.jsx';
import Footer from '../components/Layout/Footer';

export const metadata = {
  title: 'Intelliqon: Empowering Business with Innovative Solutions | intelliqon',
  description: 'Premier consulting firm specializing in AI, Machine Learning, Cybersecurity, Chatbot Development, Data Analysis, and RPA.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}