import { Block } from '../types';

export const blocks: Block[] = [
  // Purpose Blocks
  {
    id: 'list-best',
    category: 'purpose',
    title: 'List Best Options',
    description: 'Get a list of the best solutions or options',
    promptText: 'Show me the best ways to',
    hasCustomInput: true,
    customInputPlaceholder: 'What do you want to find the best options for?'
  },
  {
    id: 'create-json',
    category: 'purpose',
    title: 'Create JSON Structure',
    description: 'Generate a JSON data structure',
    promptText: 'Create a JSON structure for',
    hasCustomInput: true,
    customInputPlaceholder: 'What kind of data do you need in JSON?'
  },
  {
    id: 'step-by-step',
    category: 'purpose',
    title: 'Step-by-Step Guide',
    description: 'Get detailed step-by-step instructions',
    promptText: 'Create a step-by-step guide to',
    hasCustomInput: true,
    customInputPlaceholder: 'What do you need instructions for?'
  },

  // Style Blocks
  {
    id: 'style-skeptical',
    category: 'style',
    title: 'Skeptical Approach',
    description: 'Analyze with a skeptical and critical mindset',
    promptText: 'Be very skeptical and realistic in your analysis. Don\'t hype new trends without solid evidence.'
  },
  {
    id: 'style-thorough',
    category: 'style',
    title: 'Thorough Analysis',
    description: 'Provide a comprehensive and detailed analysis',
    promptText: 'Be very thorough and detailed in your response, covering all important aspects.'
  },
  {
    id: 'style-practical',
    category: 'style',
    title: 'Practical Focus',
    description: 'Focus on practical, implementable solutions',
    promptText: 'Focus on practical, real-world solutions that can be implemented easily.'
  },

  // Format Blocks
  {
    id: 'format-steps',
    category: 'format',
    title: 'Numbered Steps',
    description: 'Present information in numbered steps',
    promptText: 'Present your response in',
    hasCustomInput: true,
    customInputPlaceholder: 'How many steps? (e.g., 5, 10)'
  },
  {
    id: 'format-qa',
    category: 'format',
    title: 'Q&A Format',
    description: 'Include relevant questions and answers',
    promptText: 'Include relevant questions and detailed answers to clarify important points.'
  },
  {
    id: 'format-structured',
    category: 'format',
    title: 'Structured Output',
    description: 'Organize information in clear sections',
    promptText: 'Organize your response in clear, well-structured sections with headings.'
  },

  // Parameters Blocks
  {
    id: 'param-amount',
    category: 'parameters',
    title: 'Specify Amount',
    description: 'Set the number of items/examples',
    promptText: 'Provide',
    hasCustomInput: true,
    customInputPlaceholder: 'How many items? (e.g., 5, 10, 20)'
  },
  {
    id: 'param-depth',
    category: 'parameters',
    title: 'Detail Level',
    description: 'Specify how detailed the response should be',
    promptText: 'Make sure each point is explained in',
    hasCustomInput: true,
    customInputPlaceholder: 'Level of detail (e.g., brief, detailed, comprehensive)'
  }
];