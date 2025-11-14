'use client';

import { useState } from 'react';
import { Timeslot } from '@/types';
import BookingForm from './BookingForm';
import TimeslotListItem from './TimeslotlistItem';
import Modal from '@/components/ui/Modal';
import { bookingFormSchema } from '@/lib/validations/booking';
import { EMAIL, NAME } from '@/lib/constants';
import { createBooking } from '@/lib/api/bookings';

interface TimeslotPickerProps {
  timeslots: Timeslot[];
  serviceId: string;
}

const formatTime = (isoString?: string) => {
  if (!isoString) return '';

  return   new Date(Date.now()).toLocaleString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

export default function TimeslotPicker({ timeslots: initialTimeslots, serviceId }: TimeslotPickerProps) {
  const [timeslots, setTimeslots] = useState(initialTimeslots);
  const [selectedSlotId, setSelectedSlotId] = useState<string | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>();
  const [showModal, setShowModal] = useState(false);
  const [formValues, setFormValues] = useState({ [NAME]: '', [EMAIL]: '' });
  const [errors, setErrors] = useState({ [NAME]: '', [EMAIL]: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const availableSlots = timeslots.filter(slot => slot.available);

  const updateForm = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const key = ev.target.type === 'email' ? EMAIL : NAME;
    if (errors[key]) {
      setErrors(prev => ({...prev, [key]: ''}));
    }
    setFormValues(prev => ({ ...prev, [key]: ev.target.value }))
  }

  const clearForm = () => {
    setFormValues({ [NAME]: '', [EMAIL]: '' })
    setErrors({ [NAME]: '', [EMAIL]: '' })
    setSelectedSlotId(null);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    const result = bookingFormSchema.safeParse(formValues);
  
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};

      for (const error of result.error.issues) {
        if (!error.path[0]) continue;
        fieldErrors[error.path[0].toString()] = error.message;
      }

      setErrors(prev => ({...prev, ...fieldErrors}));
      setIsSubmitting(false);
      return;
    }

    setSelectedTimeSlot(timeslots.find(slot => slot.id === selectedSlotId)?.time)
  
    // Simulate API call to create booking
    // returns an updated list of timeslots
    const updatedTimeslots = await createBooking({
      userData: formValues,
      serviceId,
      timeslotId: selectedSlotId!,
      timeslots
    });
  
    setIsSubmitting(false);
    setShowModal(true);
    setTimeslots(updatedTimeslots);
    clearForm();
  };

  return (
    <div>
      <div className="space-y-2 mb-6">
      {availableSlots.map(slot => (
        <TimeslotListItem
          key={slot.id}
          timeslotId={slot.id}
          isSelected={selectedSlotId === slot.id}
          onChange={ev => setSelectedSlotId(ev.target.value)}
        >
          {formatTime(slot.time)}
        </TimeslotListItem>
      ))}
      </div>

    {selectedSlotId && (
      <BookingForm
        name={formValues.name}
        email={formValues.email}
        onChange={ev => updateForm(ev)}
        errors={errors}
        isSubmitting={isSubmitting}
        handleSubmit={handleSubmit}
        clearForm={clearForm}
      />
    )}

    {showModal && (
      <Modal onClose={() => setShowModal(false)}>
        <h3 className="text-xl font-bold mb-2">Booking Confirmed!</h3>
        <p className="text-gray-600">
          Your appointment has been successfully booked for {formatTime(selectedTimeSlot)}.
        </p>
      </Modal>
    )}
    </div>
  );
}