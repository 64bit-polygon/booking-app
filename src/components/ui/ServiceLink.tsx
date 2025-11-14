'use client';

import Link from 'next/link';

// I'm putting this component in the general components
// dir, even though it's only used in the main page.tsx
// b/c if this project were to grow it would most likely
// be used in multiple places

interface ServiceLinkProps {
  id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
}

const ServiceLink = ({ id, name, description, price, duration }: ServiceLinkProps) =>
  <Link 
    href={`/booking/${id}`}
    className="border rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col"
  >
    <h2 className="text-xl font-semibold mb-2">{name}</h2>
    <p className="text-gray-600 mb-4 flex-grow">{description}</p>
    <div className="flex justify-between items-center">
      <span className="text-lg font-bold">${price}</span>
      <span className="text-sm text-gray-500">{duration} min</span>
    </div>
  </Link>

export default ServiceLink;