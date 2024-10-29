import { type Request, type Response } from 'express';
import { OpenAI } from '@langchain/openai';
import dotenv from 'dotenv';


dotenv.config();

// Get the OpenAI API key from the environment variables
const apiKey = process.env.OPENAI_API_KEY;
let model: OpenAI;
if (apiKey) {
  // Initialize the OpenAI model if the API key is provided
  model = new OpenAI({ temperature: 0, openAIApiKey: apiKey, modelName: 'gpt-3.5-turbo' });
} else {
  console.error('OPENAI_API_KEY is not configured.');
}
// Call the OpenAI API to get a response to the formatted prompt
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
// Handle the POST request to provide translations for the user's text
export const getTranslations = async (req: Request, res: Response): Promise<void> => {
  const userText: string = req.body.text;
  try {
    if (!userText) {
      res.status(400).json({ text: null, response: 'Please provide text in the request body.' });
      return;
    }
    const translation: string = await promptFunc(userText);
    res.json({ text: userText, response: translation });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error:', error.message);
    }
    res.status(500).json({ text: userText, response: 'Internal Server Error' });
  }
};
