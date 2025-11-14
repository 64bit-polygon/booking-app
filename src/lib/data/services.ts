import { Service } from '@/types';

const services: Service[] = [
  {
    id: 'facial',
    name: 'Facial Treatment',
    description: 'Rejuvenating facial treatment for all skin types',
    duration: 60,
    price: 120,
  },
  {
    id: 'botox',
    name: 'Botox Consultation',
    description: 'Professional consultation for Botox treatment',
    duration: 30,
    price: 200,
  },
  {
    id: 'hair-removal',
    name: 'Laser Hair Removal',
    description: 'Safe and effective laser hair removal',
    duration: 45,
    price: 150,
  },
  {
    id: 'massage',
    name: 'Therapeutic Massage',
    description: 'Deep tissue massage therapy',
    duration: 90,
    price: 180,
  },
];

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function getServices(): Promise<Service[]> {
  await delay(300);
  return services;
}

export async function getServiceById(id: string): Promise<Service | undefined> {
  await delay(300);
  return services.find(service => service.id === id);
}