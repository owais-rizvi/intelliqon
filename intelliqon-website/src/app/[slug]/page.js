import { servicesData } from '../../data/servicesData';
import ServiceDetail from '../../components/Services/ServiceDetail';

// 1. Add 'async' here
export async function generateMetadata({ params }) {
  // 2. Await the params before using them
  const resolvedParams = await params;
  const service = servicesData[resolvedParams.slug];
  
  if (!service) return { title: 'Not Found' };
  
  return {
    title: `${service.title} | Intelliqon`,
    description: service.heading,
  };
}

// 3. Add 'async' here
export default async function DynamicServicePage({ params }) {
  // 4. Await the params before using them
  const resolvedParams = await params;
  const service = servicesData[resolvedParams.slug];
  
  // 5. Temporary debug screen instead of an instant 404
  if (!service) {
    return (
      <div style={{ padding: '5rem', textAlign: 'center' }}>
        <h1>Data Not Found!</h1>
        <p>Next.js is looking for the exact slug: <strong>"{resolvedParams.slug}"</strong></p>
        <p>But it couldn't find that exact spelling in your servicesData.js file.</p>
      </div>
    ); 
  }

  return <ServiceDetail service={service} />;
}