import { useState, useCallback } from 'react';
import { PromptState, PromptCategory, ToneModifier, PromptBlock } from '../types';

const initialState: PromptState = {
  category: 'text',
  tone: 'neutral',
  blocks: [],
  userInputs: {},
};

export const usePromptBuilder = () => {
  const [state, setState] = useState<PromptState>(initialState);

  const setCategory = useCallback((category: PromptCategory) => {
    setState((prev) => ({ ...prev, category }));
  }, []);

  const setTone = useCallback((tone: ToneModifier) => {
    setState((prev) => ({ ...prev, tone }));
  }, []);

  const updateBlocks = useCallback((blocks: PromptBlock[]) => {
    setState((prev) => ({ ...prev, blocks }));
  }, []);

  const updateUserInput = useCallback((blockId: string, value: string) => {
    setState((prev) => ({
      ...prev,
      userInputs: {
        ...prev.userInputs,
        [blockId]: value,
      },
    }));
  }, []);

  const resetState = useCallback(() => {
    setState(initialState);
  }, []);

  return {
    state,
    setCategory,
    setTone,
    updateBlocks,
    updateUserInput,
    resetState,
  };
};