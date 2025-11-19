import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the query translation engine for a Log Analytics Chatbot.
Your goal is to translate natural language questions from engineers into a SQL-like Domain Specific Language (DSL) query based on the following schema:

Table: 'rollups' (for long term aggregates)
Table: 'logs' (for recent raw logs)

Schema Fields:
- event_id (UUID)
- timestamp (ISO8601)
- service (String, e.g., 'auth', 'payment', 'backend')
- env (String, e.g., 'prod', 'staging')
- severity (String, e.g., 'INFO', 'ERROR', 'FATAL')
- message (String)

Rules:
1. Return a JSON object with two keys: "dsl" (the SQL query) and "explanation" (brief logic).
2. For "count" queries over long periods (> 24h), use 'rollups'.
3. For "recent" or "latest" log lists, use 'logs'.
4. Always include a limit for log lists.
5. If the user asks something irrelevant, gently guide them back to log analytics.

Example User: "How many errors in auth service yesterday?"
Example Output:
{
  "dsl": "SELECT count(*) FROM rollups WHERE service='auth' AND severity='ERROR' AND timestamp >= now() - INTERVAL 1 DAY",
  "explanation": "Aggregating error counts from pre-computed rollups for the last 24 hours."
}
`;

export const generateDslFromPrompt = async (userPrompt: string) => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      return {
        dsl: "-- API Key missing",
        explanation: "Please configure your Google Gemini API Key to use the live prototype."
      };
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        responseMimeType: "application/json",
      }
    });

    const text = response.text;
    if (!text) return { dsl: "-- No response", explanation: "Model returned empty response." };
    
    return JSON.parse(text);

  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      dsl: "-- Error generating query",
      explanation: "An error occurred while contacting the AI model."
    };
  }
};
