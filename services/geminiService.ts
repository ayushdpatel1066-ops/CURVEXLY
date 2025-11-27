import { GoogleGenAI } from "@google/genai";
import { AI_TOOLS } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getToolRecommendation = async (query: string): Promise<string> => {
  // We provide a summarized list of tools to the model context
  const toolsContext = AI_TOOLS.map(t => `- ${t.name} (${t.category}): ${t.description}`).join('\n');

  const systemInstruction = `
    You are the Curvexly Concierge, an expert advisor for a premium AI tools directory.
    
    Your goal is to recommend the best tools from the provided list based on the user's request.
    
    Rules:
    1. Be helpful, concise, and professional with a premium tone.
    2. Prioritize tools from the "Available Tools" list below.
    3. If the user asks for something not in the list, you can mention general industry knowledge, but try to bring it back to the list.
    4. Provide the names of the tools clearly.
    5. Keep responses under 100 words unless detailed explanation is requested.
    
    Available Tools:
    ${toolsContext}
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: query,
      config: {
        systemInstruction: systemInstruction,
        thinkingConfig: { thinkingBudget: 0 } // Low latency preferred for chat
      }
    });

    return response.text || "I'm having trouble connecting to the Curvexly database. Please try again.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I am currently offline or experiencing high traffic. Please browse the library manually.";
  }
};