import { Timeslot } from '@/types';
import { BookingFormData } from '@/lib/validations/booking';

interface CreateBookingParams {
  userData: BookingFormData;
  serviceId: string;
  timeslotId: string;
  timeslots: Timeslot[];
}

// this is to simulate an API call to select a booking.
// we'd pass in userData, the serviceId and the timeslotId
// and we'd get back an updated list of timeslots from
// the BE (removing the one the user signed up for).
// timeslots is being passed in here to help simulate that.
// we wouldn't be passing it normally. also userData and 
// serviceId aren't being used here, if the function
// actually called the API they would be.
export async function createBooking({
  userData,
  serviceId,
  timeslotId,
  timeslots
}: CreateBookingParams): Promise<Timeslot[]> {
  await new Promise(resolve => setTimeout(resolve, 400));
  return timeslots.filter(slot => slot.id !== timeslotId);
}