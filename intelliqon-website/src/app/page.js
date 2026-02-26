import MainBanner from '../components/Home/MainBanner';
import ServicesGrid from '../components/Home/ServicesGrid'; 
import ProductGrid from '../components/Products/ProductGrid'

// This handles the strict SEO requirement from your manager
export const metadata = {
  title: 'Protected Products & Solutions | Intelliqon',
  description: 'Secure access to Intelliqon enterprise solutions including Financial Automation, Police Solutions, AI, Cybersecurity, and RPA.',
};

export default function Home() {
  return (
    <>
      <MainBanner />
      <ServicesGrid />
      <ProductGrid />
    </>
  );
}