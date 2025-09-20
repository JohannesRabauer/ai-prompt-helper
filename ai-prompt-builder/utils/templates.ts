import { PromptTemplate } from '@/types';

export const defaultTemplates: PromptTemplate[] = [
  {
    id: 'text-creative',
    category: 'text',
    name: 'Creative Writing',
    description: 'Generate creative writing content',
    blocks: [
      {
        id: 'genre',
        type: 'input',
        label: 'Genre',
        value: '',
        placeholder: 'e.g., science fiction, fantasy, mystery',
        required: true
      },
      {
        id: 'length',
        type: 'input',
        label: 'Length (words)',
        value: '',
        placeholder: 'e.g., 500, 1000, 2000',
        required: true
      },
      {
        id: 'theme',
        type: 'input',
        label: 'Theme/Topic',
        value: '',
        placeholder: 'What should the content be about?',
        required: true
      }
    ]
  },
  {
    id: 'image-detailed',
    category: 'image',
    name: 'Detailed Image',
    description: 'Generate detailed image descriptions',
    blocks: [
      {
        id: 'subject',
        type: 'input',
        label: 'Main Subject',
        value: '',
        placeholder: 'What is the main focus of the image?',
        required: true
      },
      {
        id: 'style',
        type: 'input',
        label: 'Art Style',
        value: '',
        placeholder: 'e.g., realistic, cartoon, oil painting',
        required: true
      },
      {
        id: 'details',
        type: 'input',
        label: 'Additional Details',
        value: '',
        placeholder: 'Lighting, background, mood, etc.',
        required: false
      }
    ]
  },
  {
    id: 'json-schema',
    category: 'json',
    name: 'JSON Schema',
    description: 'Generate JSON data structure',
    blocks: [
      {
        id: 'structure',
        type: 'input',
        label: 'Data Structure',
        value: '',
        placeholder: 'Describe the data structure you need',
        required: true
      },
      {
        id: 'examples',
        type: 'input',
        label: 'Example Values',
        value: '',
        placeholder: 'Provide example values for the fields',
        required: false
      }
    ]
  },
  {
    id: 'code-function',
    category: 'code',
    name: 'Function Generator',
    description: 'Generate code functions',
    blocks: [
      {
        id: 'language',
        type: 'input',
        label: 'Programming Language',
        value: '',
        placeholder: 'e.g., JavaScript, Python, Java',
        required: true
      },
      {
        id: 'functionality',
        type: 'input',
        label: 'Function Purpose',
        value: '',
        placeholder: 'What should the function do?',
        required: true
      },
      {
        id: 'parameters',
        type: 'input',
        label: 'Parameters',
        value: '',
        placeholder: 'What inputs should the function accept?',
        required: false
      }
    ]
  }
];