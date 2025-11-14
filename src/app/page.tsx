import { getServices } from '@/lib/data/services';
import ServiceLink from '@/components/ui/ServiceLink';

export default async function Home() {
  const services = await getServices();

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Book an Appointment</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(service =>
          <ServiceLink
            key={service.id}
            id={service.id}
            name={service.name}
            description={service.description}
            duration={service.duration}
            price={service.price}
          />
        )}
        </div>
      </div>
    </main>
  );
}