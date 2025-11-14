import { getServiceById } from '@/lib/data/services';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import TimeslotPage from './TimeslotPage';
import SlotShimmer from '@/components/ui/SlotShimmer'

interface BookingPageProps {
  params: Promise<{ serviceId: string }>;
}

export default async function BookingPage({ params }: BookingPageProps) {
  const { serviceId } = await params;
  const service = await getServiceById(serviceId);
 
  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">{service.name}</h1>
        <p className="text-gray-600 mb-8">{service.description}</p>
        
        <div className="bg-white rounded-lg p-6 shadow">
          <h2 className="text-2xl font-semibold mb-4">Select a Time</h2>
          
          <Suspense fallback={<SlotShimmer />}>
            <TimeslotPage serviceId={serviceId} />
          </Suspense>
        </div>
      </div>
    </main>
  );
}