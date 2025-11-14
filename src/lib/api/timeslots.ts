import { Timeslot } from '@/types';

// the mock API to get the timeslots
export async function getTimeslots(serviceId: string): Promise<Timeslot[]> {
  await new Promise(resolve => setTimeout(resolve, 500));

  const timeslots: Timeslot[] = [];
  const today = new Date();

  // generates timeslots for next 7 days, 9 AM to 5 PM
  for (let day = 0; day < 7; day++) {
    for (let hour = 9; hour < 17; hour++) {
      const date = new Date();
      date.setDate(date.getDate() + day);
      
      // format as EST time string
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const dayStr = String(date.getDate()).padStart(2, '0');
      const hourStr = String(hour).padStart(2, '0');
      
      // ISO string for EST timezone
      const estDate = new Date(`${year}-${month}-${dayStr}T${hourStr}:00:00-05:00`);

      timeslots.push({
        id: crypto.randomUUID(),
        time: estDate.toISOString(),
        available: Math.random() > 0.3,
      });
    }
  }

  return timeslots;
}