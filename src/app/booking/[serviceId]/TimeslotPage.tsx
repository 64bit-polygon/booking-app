import TimeslotPicker from './TimeslotPicker';

async function fetchTimeslots(serviceId: string) {
  const res = await fetch(
    `http://localhost:3000/api/timeslots?serviceId=${serviceId}`,
    { cache: 'no-store' }
  );
  
  if (!res.ok) throw new Error('Failed to fetch timeslots');
  
  const data = await res.json();
  return data.timeslots;
}

export default async function TimeslotPage({ serviceId }: { serviceId: string }) {
  const timeslots = await fetchTimeslots(serviceId);

  return <TimeslotPicker timeslots={timeslots} serviceId={serviceId} />;
}