export type PromptCategory = 'text' | 'image' | 'json' | 'code';

export type ToneModifier = 'skeptical' | 'critical' | 'positive' | 'encouraging' | 'neutral';

export interface PromptBlock {
  id: string;
  type: 'category' | 'tone' | 'input' | 'template';
  value: string;
  label: string;
  placeholder?: string;
  options?: string[];
  required?: boolean;
}

export interface PromptTemplate {
  id: string;
  category: PromptCategory;
  name: string;
  blocks: PromptBlock[];
  description: string;
}

export interface PromptState {
  category: PromptCategory;
  tone: ToneModifier;
  blocks: PromptBlock[];
  userInputs: Record<string, string>;
}