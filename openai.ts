import { Configuration, OpenAI } from "openai";

// const config = new OpenAI({
//     organization: process.env.OPEN_AI_ORGANIZATION,
//     apiKey: process.env.OPWN_AI_KEY
// });

const configuration = new Configuration({
    organization:process.env.OPEN_AI_ORGANIZATION,
    apiKey: process.env.OPWN_AI_KEY,
});
const openai = new OpenAI(configuration);

export default openai;