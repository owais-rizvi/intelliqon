import ProductGrid from '../../components/Products/ProductGrid';

export const metadata = {
  title: 'Protected Products & Solutions | Intelliqon',
  description: 'Secure access to Intelliqon enterprise solutions.',
};

// THIS is the part Next.js was looking for! It must say "export default function"
export default function ProductsPage() {
  return (
    <main>
      <ProductGrid />
    </main>
  );
}