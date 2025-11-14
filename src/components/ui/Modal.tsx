import { ReactNode } from 'react';
import Button from './Button';

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ onClose, children }: ModalProps) =>
  <div className="fixed inset-0 bg-black/33 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-2xl">
      {children}
      <Button onClick={onClose} className="mt-4">
        Close
      </Button>
    </div>
  </div>

export default Modal;