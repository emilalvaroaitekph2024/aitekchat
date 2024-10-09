import { TModelItem } from "@/lib/types";

export const providers = [
  "llmchat",
  "openai",
  "anthropic",
  "emilio", // Changed label to emilio but internally mapped to gemini
  "ollama",
  "groq",
] as const;

export const ollamaModelsSupportsTools = [
  "llama3-groq-tool-use:latest",
  "llama3.2:3b",
];

export const allPlugins = [
  "web_search",
  "image_generation",
  "memory",
  "webpage_reader",
  "py_interpreter",
  "bar_chart",
  "pie_chart",
  "line_chart",
];

// Function to alias gemini with emilio
const aliasGeminiAsEmilio = (model: TModelItem): TModelItem => ({
  ...model,
  name: model.name.replace("Gemini", "EmilioLLM"),
  icon: "emilio", // Changing icon to emilio
  provider: "emilio", // Changing provider to emilio
});

export const models: TModelItem[] = [
  ...(process.env.NEXT_PUBLIC_ENABLE_AUTH === "true"
    ? ([
        {
          name: "LLMChat",
          key: "llmchat",
          isFree: true,
          isSignUpRequired: true,
          tokens: 128000,
          maxOutputTokens: 2048,
          description: "Free Model, Sign up required",
          vision: true,
          plugins: allPlugins,
          icon: "llmchat",
          provider: "llmchat",
        },
      ] as TModelItem[])
    : []),
  {
    name: "GPT 4o Mini",
    key: "gpt-4o-mini",
    isNew: true,
    tokens: 128000,
    description: "Best for everyday tasks",
    maxOutputTokens: 2048,
    vision: true,
    plugins: allPlugins,
    icon: "gpt4",
    provider: "openai",
  },
  aliasGeminiAsEmilio({
    name: "Gemini Flash 1.5",
    key: "gemini-1.5-flash-8b",
    isNew: true,
    tokens: 200000,
    description: "Best for fast responses and complex tasks",
    maxOutputTokens: 20000, // Updated from 8192 to 20000
    vision: true,
    plugins: [],
    icon: "gemini", // Kept original icon but aliased as emilio
    provider: "gemini", // Kept original provider but aliased as emilio
  }),
  {
    name: "GPT 4o",
    key: "gpt-4o",
    isNew: false,
    tokens: 128000,
    description: "Best for complex tasks",
    maxOutputTokens: 2048,
    vision: true,
    plugins: allPlugins,
    icon: "gpt4",
    provider: "openai",
  },
  {
    name: "GPT 4 Turbo",
    key: "gpt-4-turbo",
    isNew: false,
    tokens: 128000,
    description: "Best for complex tasks",
    maxOutputTokens: 4096,
    vision: true,
    plugins: allPlugins,
    icon: "gpt4",
    provider: "openai",
  },
  aliasGeminiAsEmilio({
    name: "Gemini Pro 1.5",
    key: "gemini-1.5-pro-latest",
    isNew: false,
    tokens: 200000,
    description: "Best for complex tasks",
    maxOutputTokens: 8192,
    vision: true,
    plugins: [],
    icon: "gemini", // Kept original icon but aliased as emilio
    provider: "gemini", // Kept original provider but aliased as emilio
  }),
  aliasGeminiAsEmilio({
    name: "Gemini Pro",
    key: "gemini-pro",
    isNew: false,
    tokens: 200000,
    description: "Best for complex tasks",
    maxOutputTokens: 4096,
    plugins: [],
    icon: "gemini", // Kept original icon but aliased as emilio
    provider: "gemini", // Kept original provider but aliased as emilio
  }),
  {
    name: "LLama3 70b Groq",
    key: "llama3-groq-70b-8192-tool-use-preview",
    isNew: false,
    tokens: 200000,
    description: "Best for complex tasks",
    plugins: ["web_search", "image_generation", "memory", "webpage_reader"],
    maxOutputTokens: 4096,
    icon: "groq",
    provider: "groq",
  },
  {
    name: "LLama3 8b Groq",
    key: "llama3-8b-8192",
    isNew: false,
    tokens: 200000,
    description: "Best for complex tasks",
    plugins: [],
    maxOutputTokens: 4096,
    icon: "groq",
    provider: "groq",
  },
];
