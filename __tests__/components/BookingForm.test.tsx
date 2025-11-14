import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TimeslotPicker from '@/app/booking/[serviceId]/TimeslotPicker';
import { Timeslot } from '@/types';

const mockTimeslots: Timeslot[] = [
  {
    id: 'slot-1',
    time: '2025-11-15T09:00:00.000Z',
    available: true,
  },
  {
    id: 'slot-2',
    time: '2025-11-15T10:00:00.000Z',
    available: true,
  },
  {
    id: 'slot-3',
    time: '2025-11-15T11:00:00.000Z',
    available: false,
  },
  {
    id: 'slot-4',
    time: '2025-11-15T14:00:00.000Z',
    available: true,
  },
];

describe('TimeslotPicker', () => {
  beforeEach(() => {
    render(<TimeslotPicker timeslots={mockTimeslots} serviceId="facial" />);
  });

  it('does not render unavailable timeslots', () => {
    const radioButtons = screen.getAllByRole('radio');
    expect(radioButtons).toHaveLength(3);
  });

  it('shows booking form after selecting a timeslot', async () => {
    const user = userEvent.setup();

    expect(screen.queryByLabelText(/name/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/email/i)).not.toBeInTheDocument();
    
    const firstRadio = screen.getAllByRole('radio')[0];
    await user.click(firstRadio);
    
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /confirm booking/i })).toBeInTheDocument();
  });

  it('removes timeslot from list after successful booking', async () => {
    const user = userEvent.setup();
    
    const initialRadios = screen.getAllByRole('radio');
    expect(initialRadios).toHaveLength(3);
    
    await user.click(initialRadios[0]);
    
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    await user.type(nameInput, 'John Doe');
    await user.type(emailInput, 'john@example.com');
    
    const submitButton = screen.getByRole('button', { name: /confirm booking/i });
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/booking confirmed/i)).toBeInTheDocument();
    });
    
    const closeButton = screen.getByRole('button', { name: /close/i });
    await user.click(closeButton);
    
    await waitFor(() => {
      const remainingRadios = screen.getAllByRole('radio');
      expect(remainingRadios).toHaveLength(2);
    });
  });
});