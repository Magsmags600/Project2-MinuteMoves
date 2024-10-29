import { type Request, type Response } from 'express';
import { OpenAI } from '@langchain/openai';
import { PromptTemplate } from '@langchain/core/prompts';
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.OPENAI_API_KEY;
let model: OpenAI;

if (apiKey) {
  model = new OpenAI({ temperature: 0, openAIApiKey: apiKey, modelName: 'gpt-3.5-turbo' });
} else {
  console.error('OPENAI_API_KEY is not configured.');
}

// Prompt to generate recipes matching given nutritional targets
const promptTemplate = new PromptTemplate({
  template: `
    Create simple meal suggestions that match the following daily goals:
    - Calories: {calories}
    - Protein: {protein}g
    - Carbs: {carbs}g
    - Fat: {fat}g
    Provide 2-3 meal ideas with ingredients and preparation steps.
  `,
  inputVariables: ['calories', 'protein', 'carbs', 'fat'],
});

const formatPrompt = async (nutritionalGoals: { calories: number, protein: number, carbs: number, fat: number }): Promise<string> => {
  return await promptTemplate.format(nutritionalGoals);
};

const promptFunc = async (input: string): Promise<string> => {
  try {
    if (model) {
      return await model.invoke(input);
    }
    return 'No OpenAI API key provided. Unable to provide a response.';
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// Endpoint for meal recommendations based on goals
export const getMealRecommendations = async (req: Request, res: Response): Promise<void> => {
  const { calories, protein, carbs, fat } = req.body;

  try {
    if (!calories || !protein || !carbs || !fat) {
      res.status(400).json({ error: 'Please provide calories, protein, carbs, and fat goals.' });
      return;
    }

    const formattedPrompt: string = await formatPrompt({ calories, protein, carbs, fat });
    const result: any = await promptFunc(formattedPrompt);
    res.json({ result });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error:', error.message);
    }
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
