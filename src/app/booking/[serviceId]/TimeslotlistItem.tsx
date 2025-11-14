import cx from 'classnames';
import { ReactNode } from 'react';

interface TimeslotPickerProps {
  timeslotId: string;
  isSelected: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  children: ReactNode;
}

export default function TimeslotListItem({ timeslotId, isSelected, onChange, children }: TimeslotPickerProps) {
  const labelClasses = cx('w-full p-3 text-left border rounded block relative',
    isSelected ? ['border-blue-600', 'bg-blue-50'] : ['border-gray-300', 'hover:border-gray-400']
  )

  const inputClasses = cx('absolute w-full h-full opacity-0 top-0 left-0',
    {'cursor-default': isSelected, 'cursor-pointer': !isSelected}
  )

  return (
    <label className={labelClasses}>
      {children}
      <input
        type="radio"
        value={timeslotId}
        name="timeSlots"
        className={inputClasses}
        checked={isSelected}
        onChange={onChange}
      />
    </label>
  );
}