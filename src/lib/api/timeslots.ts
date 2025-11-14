import { Timeslot } from '@/types';

// the mock API to get the timeslots
export async function getTimeslots(serviceId: string): Promise<Timeslot[]> {
  await new Promise(resolve => setTimeout(resolve, 500));

  const timeslots: Timeslot[] = [];
  const today = new Date();

  // Generate timeslots for next 7 days, 9 AM to 5 PM
  for (let day = 0; day < 7; day++) {
    const date = new Date(today);
    date.setDate(date.getDate() + day);

    for (let hour = 9; hour < 17; hour++) {
      const slotTime = new Date(date);
      slotTime.setHours(hour, 0, 0, 0);

      timeslots.push({
        id: crypto.randomUUID(),
        time: slotTime.toISOString(),
        available: Math.random() > 0.75, // 25% available
      });
    }
  }

  return timeslots;
}