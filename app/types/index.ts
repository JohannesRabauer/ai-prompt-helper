export type BlockCategory =
  | 'purpose'
  | 'style'
  | 'format'
  | 'parameters'
  | 'tone'
  | 'output'
  | 'template'
  | 'critical-thinking' // Added new category
  | 'how-tos' // Added new category
  | 'hacks'; // Added new category

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
  highlight?: boolean; // Added to track highlighted blocks
}

export interface PromptTemplate {
  id: string;
  name: string;
  description: string;
  blocks: BlockSelection[];
}