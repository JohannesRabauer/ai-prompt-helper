import { PromptBlock, PromptState, ToneModifier } from '@/types';

const getTonePrefix = (tone: ToneModifier): string => {
  const tonePrefixes = {
    skeptical: 'Analyze this critically and skeptically:',
    critical: 'Provide a critical analysis of the following:',
    positive: 'Looking at this from a positive perspective:',
    encouraging: 'With an encouraging and supportive approach:',
    neutral: '',
  };
  return tonePrefixes[tone];
};

export const buildPrompt = (state: PromptState): string => {
  const { tone, blocks, userInputs } = state;
  const tonePrefix = getTonePrefix(tone);
  
  let promptParts: string[] = [];
  if (tonePrefix) {
    promptParts.push(tonePrefix);
  }

  blocks.forEach((block: PromptBlock) => {
    if (block.type === 'template') {
      promptParts.push(block.value);
    } else if (block.type === 'input' && userInputs[block.id]) {
      promptParts.push(userInputs[block.id]);
    }
  });

  return promptParts.join('\n\n');
};

export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error('Failed to copy:', error);
    return false;
  }
};