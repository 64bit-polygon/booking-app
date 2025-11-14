import { Timeslot } from '@/types';

// the mock API to get the timeslots
export async function getTimeslots(serviceId: string): Promise<Timeslot[]> {
  await new Promise(resolve => setTimeout(resolve, 500));

  const timeslots: Timeslot[] = [];
  
  for (let day = 0; day < 7; day++) {
    for (let hour = 9; hour < 17; hour++) {
      const date = new Date();
      date.setDate(date.getDate() + day);
      
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const dayStr = String(date.getDate()).padStart(2, '0');
      const hourStr = String(hour).padStart(2, '0');
      
      // for simplicity's sake we'll just be doing est
      const isoString = `${year}-${month}-${dayStr}T${hourStr}:00:00-05:00`;
      const slotTime = new Date(isoString);

      timeslots.push({
        id: crypto.randomUUID(),
        time: slotTime.toISOString(),
        available: Math.random() > 0.75 // 25% are available
      });
    }
  }

  return timeslots;
}