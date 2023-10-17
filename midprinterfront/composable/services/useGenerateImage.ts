import OpenAI from "openai";

interface IUseGenerateImage {
  generate1024ImageFromText: (
    promptText: string
  ) => Promise<string | undefined>;
  generate1024ImageFromTextAndImage: (
    promptText: string,
    image: File
  ) => Promise<string | undefined>;
}

export function useGenerateImage(): IUseGenerateImage {
  const runtimeConfig = useRuntimeConfig();
  const key = runtimeConfig.public.openAiKey;
  const openai = new OpenAI({
    apiKey: key, // defaults to process.env["OPENAI_AI_KEY"]
    dangerouslyAllowBrowser: true,
  });

  const generate1024ImageFromText = async (promptText: string) => {
    const response = await openai.images.generate({
      prompt: promptText,
      n: 1,
      size: "1024x1024",
    });
    return response.data[0].url;
  };

  const generate1024ImageFromTextAndImage = async (
    promptText: string,
    image: File
  ) => {
    const response = await openai.images.edit({
      image: image,
      prompt: promptText,
      n: 1,
      size: "1024x1024",
    });
    return response.data[0].url;
  };
  return { generate1024ImageFromText, generate1024ImageFromTextAndImage };
}
