const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const API_KEY = process.env.API_KEY;

const configuration = new Configuration({
    organization: "org-2zzhwlOHMImqPqptt9wePOlO",
    apiKey: API_KEY
});

const openai = new OpenAIApi(configuration);


const response = async () => {
    return await openai.listEngines();
}

