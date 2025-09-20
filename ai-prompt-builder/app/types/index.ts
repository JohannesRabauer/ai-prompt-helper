export type BlockCategory =
  | 'purpose'
  | 'style'
  | 'format'
  | 'parameters'
  | 'tone'
  | 'output'
  | 'template';

export interface Block {
  id: string;
  category: BlockCategory;
  title: string;
  description: string;
  promptText: string;
  hasCustomInput?: boolean;
  customInputPlaceholder?: string;
}

export interface BlockSelection {
  blockId: string;
  customInput?: string;
}

export interface PromptTemplate {
  id: string;
  name: string;
  description: string;
  blocks: BlockSelection[];
}