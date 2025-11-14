import TimeslotPicker from './TimeslotPicker';
import { headers } from 'next/headers';

async function fetchTimeslots(serviceId: string) {
  const headersList = await headers();
  const host = headersList.get('host') || 'localhost:3000';
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  
  const url = `${protocol}://${host}/api/timeslots?serviceId=${serviceId}`;

  const res = await fetch(url, { cache: 'no-store' });
  
  if (!res.ok) throw new Error('Failed to fetch timeslots');
  
  const data = await res.json();
  return data.timeslots;
}

export default async function TimeslotPage({ serviceId }: { serviceId: string }) {
  const timeslots = await fetchTimeslots(serviceId);

  return <TimeslotPicker timeslots={timeslots} serviceId={serviceId} />;
}