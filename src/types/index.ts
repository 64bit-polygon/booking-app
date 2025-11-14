export interface Service {
  id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
}

export interface Timeslot {
  id: string;
  time: string;
  available: boolean;
}

export interface BookingFormData {
  name: string;
  email: string;
  serviceId: string;
  timeslotId: string;
}