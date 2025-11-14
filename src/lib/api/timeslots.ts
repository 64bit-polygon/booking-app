import { Timeslot } from '@/types';

// the mock API to get the timeslots
export async function getTimeslots(serviceId: string): Promise<Timeslot[]> {
  await new Promise(resolve => setTimeout(resolve, 500));

  const timeslots: Timeslot[] = [];
  
  const now = new Date();
  // we'll assume they're all in EST for simplicity's sake
  const estDate = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
  
  for (let day = 0; day < 7; day++) {
    for (let hour = 9; hour < 17; hour++) {
      const slotTime = new Date(estDate);
      slotTime.setDate(estDate.getDate() + day);
      slotTime.setHours(hour, 0, 0, 0);

      timeslots.push({
        id: crypto.randomUUID(),
        time: slotTime.toISOString(),
        available: Math.random() > 0.75 // 25% are availible
      });
    }
  }

  return timeslots;
}