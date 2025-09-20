'use client';

import { useState } from 'react';

interface PromptBlockProps {
  id: string;
  category: string;
  title: string;
  description: string;
  selected: boolean;
  onClick: () => void;
  customInput?: string;
  onCustomInputChange?: (value: string) => void;
  hasCustomInput?: boolean;
}

export const PromptBlock: React.FC<PromptBlockProps> = ({
  title,
  description,
  selected,
  onClick,
  customInput,
  onCustomInputChange,
  hasCustomInput
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={`relative p-6 rounded-xl transition-all duration-200 cursor-pointer border ${
        selected
          ? 'bg-indigo-900/30 border-indigo-500 shadow-lg shadow-indigo-500/20'
          : 'bg-gray-800/50 border-gray-700 hover:border-gray-600 hover:bg-gray-800/80'
      } ${isFocused ? 'ring-2 ring-indigo-500' : ''} backdrop-blur-sm transform hover:scale-[1.02]`}
      onClick={onClick}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      tabIndex={0}
      role="button"
    >
      <h3 className="text-lg font-medium text-gray-100 mb-1">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
      
      {hasCustomInput && selected && (
        <div className="mt-3">
          <input
            type="text"
            value={customInput}
            onChange={(e) => onCustomInputChange?.(e.target.value)}
            className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2.5 text-gray-100 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200 backdrop-blur-sm placeholder-gray-500"
            placeholder="Enter custom value..."
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
      
      {selected && (
        <div className="absolute -top-2 -right-2">
          <div className="bg-indigo-500 rounded-full p-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};