import React from 'react';

interface ContainerProps {
  children: any;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ className, children }: ContainerProps) => {
  return <div className={`container mx-auto px-20 mt-4 p-4 ${className}`}>{children}</div>;
};

export default Container;
