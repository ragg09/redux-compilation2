/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
export interface FlipCardProps {
  className?: string;
  children: React.ReactNode;
}

const FlippingCard: React.FC<FlipCardProps> = ({ className, children }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = (): void => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="group max-w-[250px] max-h-[350px] h-80 w-49 [perspective:1000px]"
      onClick={handleCardClick}
    >
      <div
        className={`relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        <div className="absolute inset-0">
          <img
            className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
            src="/flip-card/backcard.jpg"
            alt=""
          />
        </div>

        <div className="absolute h-full w-full rounded-xl bg-black/80  text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <img
            className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
            src="https://images.unsplash.com/photo-1562583489-bf23ec64651d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default FlippingCard;
