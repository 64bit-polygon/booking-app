import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

interface ErrorData {
  name: string;
  email: string;
}

interface BookingFormProps {
  name: string;
  email: string;
  handleSubmit: (e: React.FormEvent) => void;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  errors: ErrorData;
  isSubmitting: boolean;
  clearForm: () => void;
}

const BookingForm = ({
  name,
  email,
  onChange,
  handleSubmit,
  errors,
  isSubmitting,
  clearForm
}: BookingFormProps) =>  
  <form className="space-y-4">
    <Input
      label="Name"
      value={name}
      onChange={onChange}
      error={errors.name}
      required
    />

    <Input
      label="Email"
      type="email"
      value={email}
      onChange={onChange}
      error={errors.email}
      required
    />

    <div className="flex gap-2">
      <Button type="submit" disabled={isSubmitting} fullWidth onClick={handleSubmit}>
        {isSubmitting ? 'Booking...' : 'Confirm Booking'}
      </Button>
      <Button variant="secondary" onClick={clearForm}>
        Cancel
      </Button>
    </div>
  </form>

export default BookingForm;