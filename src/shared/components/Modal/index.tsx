import React, { Fragment, type ReactNode } from 'react';
import Container from '../Container';

export interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  className?: string;
  closable?: boolean;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, className, closable }: ModalProps) => {
  return (
    <Fragment>
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${
          isOpen || 'hidden'
        }`}
      >
        <div className={`bg-white rounded-lg ${className}`}>
          {closable && (
            <div className="flex items-start justify-between p-4 rounded-t dark:border-gray-600">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
          )}

          <div className="max-h-auto">
            <Container>{children}</Container>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Modal.defaultProps = {
  className: '',
  closable: true,
};

export default Modal;
