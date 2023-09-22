import { toast } from 'react-toastify';
import type { ToastOptions, ToastPosition } from 'react-toastify';

const defaultAlertOptions: ToastOptions = {
  position: 'bottom-left' as ToastPosition,
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: 'light'
};

export const alertError = (message: string, position?: ToastPosition): any => {
  const options = { ...defaultAlertOptions, position: position ?? defaultAlertOptions.position };
  return toast.error(message, options);
};

export const alertWarning = (message: string, position?: ToastPosition): any => {
  const options = { ...defaultAlertOptions, position: position ?? defaultAlertOptions.position };
  return toast.warn(message, options);
};

export const alertSuccess = (message: string, position?: ToastPosition): any => {
  const options = { ...defaultAlertOptions, position: position ?? defaultAlertOptions.position };
  return toast.success(message, options);
};
