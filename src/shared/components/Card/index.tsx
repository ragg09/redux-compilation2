export interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className, children }: CardProps) => {
  return (
    <div className={`p-6 border border-gray-100 rounded-lg shadow mb-2 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
