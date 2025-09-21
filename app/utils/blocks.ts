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
  },

  // Adding new blocks for critical thinking, how-tos, and hacks

  // Critical Thinking Blocks
  {
    id: 'critical-evaluate',
    category: 'critical-thinking',
    title: 'Evaluate Pros and Cons',
    description: 'Critically evaluate the advantages and disadvantages of a topic',
    promptText: 'Critically evaluate the pros and cons of',
    hasCustomInput: true,
    customInputPlaceholder: 'What topic should be evaluated?'
  },
  {
    id: 'critical-challenges',
    category: 'critical-thinking',
    title: 'Identify Challenges',
    description: 'Highlight potential challenges and risks',
    promptText: 'Identify the challenges and risks associated with',
    hasCustomInput: true,
    customInputPlaceholder: 'What topic should be analyzed for challenges?'
  },

  // How-To Blocks
  {
    id: 'howto-improve',
    category: 'how-tos',
    title: 'How to Improve',
    description: 'Provide actionable steps to improve a process or skill',
    promptText: 'Provide actionable steps to improve',
    hasCustomInput: true,
    customInputPlaceholder: 'What process or skill should be improved?'
  },
  {
    id: 'howto-start',
    category: 'how-tos',
    title: 'How to Start',
    description: 'Guide on starting a new project or task',
    promptText: 'Provide a guide on how to start',
    hasCustomInput: true,
    customInputPlaceholder: 'What project or task should be started?'
  },

  // Hacks Blocks
  {
    id: 'hack-productivity',
    category: 'hacks',
    title: 'Productivity Hacks',
    description: 'Share tips to boost productivity',
    promptText: 'Share productivity hacks for',
    hasCustomInput: true,
    customInputPlaceholder: 'What area should the productivity hacks focus on?'
  },
  {
    id: 'hack-efficiency',
    category: 'hacks',
    title: 'Efficiency Hacks',
    description: 'Provide tips to work more efficiently',
    promptText: 'Provide efficiency hacks for',
    hasCustomInput: true,
    customInputPlaceholder: 'What task or process should be optimized?'
  }
];