'use client';

import { useState, useMemo } from 'react';
import { Block, BlockSelection } from '../types';
import { blocks } from '../utils/blocks';
import { PromptBlock } from './PromptBlock';
import { Button } from './Button';

export const PromptBuilder = () => {
  const [selectedBlocks, setSelectedBlocks] = useState<BlockSelection[]>([]);
  const [copied, setCopied] = useState(false);

  const blocksByCategory = useMemo(() => {
    return blocks.reduce((acc: Record<string, Block[]>, block: Block) => {
      if (!acc[block.category]) {
        acc[block.category] = [];
      }
      acc[block.category].push(block);
      return acc;
    }, {} as Record<string, Block[]>);
  }, []);

  const handleBlockClick = (block: Block) => {
    setSelectedBlocks((prev) => {
      const isSelected = prev.some((b) => b.blockId === block.id);
      if (isSelected) {
        // Deselect the block if already selected
        return prev.filter((b) => b.blockId !== block.id);
      }
      // Select the block and ensure only the clicked block is highlighted
      return [...prev, { blockId: block.id, highlight: true }];
    });
  };

  const handleCustomInput = (blockId: string, value: string) => {
    setSelectedBlocks((prev) =>
      prev.map((b) => ({
        ...b,
        customInput: b.blockId === blockId ? value : b.customInput,
        highlight: b.blockId === blockId, // Highlight the block being edited
      }))
    );
  };

  const generatePrompt = () => {
    return selectedBlocks
      .map((selection) => {
        const block = blocks.find((b: Block) => b.id === selection.blockId);
        if (!block) return '';
        const promptText = block.promptText + (selection.customInput ? ' ' + selection.customInput : '');
        return selection.highlight ? `<span class='highlight'>${promptText}</span>` : promptText;
      })
      .join('. ');
  };

  const handleCopy = async () => {
    const prompt = generatePrompt();
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-gray-100 flex">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 mr-[33%]">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-4 animate-gradient">
            AI Prompt Builder
          </h1>
          <p className="text-gray-400 text-lg">Build powerful AI prompts by combining blocks</p>
        </div>
        
        <div className="space-y-8">
          {Object.entries(blocksByCategory).map(([category, categoryBlocks]) => (
            <div key={category} className="mb-12">
              <div className="flex items-center mb-6">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300 capitalize">
                  {category} Blocks
                </h2>
                <div className="ml-4 h-px flex-1 bg-gradient-to-r from-indigo-500/20 to-transparent"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryBlocks.map((block) => (
                  <PromptBlock
                    key={block.id}
                    {...block}
                    selected={selectedBlocks.some((b) => b.blockId === block.id)}
                    onClick={() => handleBlockClick(block)}
                    customInput={
                      selectedBlocks.find((b) => b.blockId === block.id)?.customInput
                    }
                    onCustomInputChange={(value) => handleCustomInput(block.id, value)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-1/3 bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm border border-gray-700/50 shadow-xl fixed right-0 top-0 h-full overflow-y-auto">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300 mb-6">
          Generated Prompt
        </h2>
        <div className="bg-gray-900/50 rounded-xl p-6 font-mono text-sm text-gray-300 min-h-[120px] whitespace-pre-wrap border border-gray-700/50 shadow-inner">
          <div dangerouslySetInnerHTML={{ __html: generatePrompt() }} />
        </div>
        
        <div className="mt-4 flex justify-end">
          <Button
            onClick={handleCopy}
            variant="primary"
            className="flex items-center gap-2"
          >
            <span>{copied ? 'Copied!' : 'Copy to Clipboard'}</span>
            {copied ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
              </svg>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};