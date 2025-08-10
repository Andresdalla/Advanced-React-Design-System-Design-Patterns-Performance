import React from 'react';

interface SplitScreenProps {
  Left: React.ComponentType <{width: number}>;
  Right: React.ComponentType <{ width: number }>;
  rightWidth?: number; 
  leftWidth?: number;
}

export const SplitScreen = ({ Left, Right, leftWidth = 1, rightWidth = 1 }: SplitScreenProps) => {
  return (
    <div className='flex'>
      <div
        className="bg-amber-400 rounded-l-2xl p-5"
        style={{ flex: leftWidth }} 
      >
        <Left width={leftWidth} />
      </div>

      <div
        className="bg-amber-800 rounded-r-2xl p-5"
        style={{ flex: rightWidth }} 
      >
        <Right width={rightWidth} />
      </div>
    </div>
  );
}