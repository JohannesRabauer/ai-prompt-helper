'use client';

import { usePromptBuilder } from '../hooks/usePromptBuilder';
import { Button } from './Button';
import { Select } from './Select';
import { TextInput } from './TextInput';
import { buildPrompt, copyToClipboard } from '../utils/promptBuilder';
import { useState } from 'react';
import { PromptCategory, ToneModifier } from '../types';

const categories = [
  { value: 'text', label: 'Text Generation' },
  { value: 'image', label: 'Image Generation' },
  { value: 'json', label: 'JSON Generation' },
  { value: 'code', label: 'Code Generation' },
];

const tones = [
  { value: 'neutral', label: 'Neutral' },
  { value: 'skeptical', label: 'Skeptical' },
  { value: 'critical', label: 'Critical' },
  { value: 'positive', label: 'Positive' },
  { value: 'encouraging', label: 'Encouraging' },
];

export const PromptBuilder = () => {
  const { state, setCategory, setTone, updateUserInput } = usePromptBuilder();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const prompt = buildPrompt(state);
    const success = await copyToClipboard(prompt);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">AI Prompt Builder</h1>
      
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <Select
            label="Select Category"
            value={state.category}
            onChange={(value) => setCategory(value as PromptCategory)}
            options={categories}
          />
          
          <Select
            label="Select Tone"
            value={state.tone}
            onChange={(value) => setTone(value as ToneModifier)}
            options={tones}
          />
        </div>

        {state.blocks.map((block) => (
          <TextInput
            key={block.id}
            label={block.label}
            placeholder={block.placeholder}
            value={state.userInputs[block.id] || ''}
            onChange={(e) => updateUserInput(block.id, e.target.value)}
            required={block.required}
          />
        ))}

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Generated Prompt</h2>
          <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
            {buildPrompt(state) || 'Your prompt will appear here...'}
          </div>
          
          <div className="mt-4 flex justify-end">
            <Button
              onClick={handleCopy}
              variant="primary"
              className="flex items-center"
            >
              {copied ? 'Copied!' : 'Copy to Clipboard'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};