const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const { Configuration, OpenAIApi } = require('openai');
const path = require('path');
const { LRUCache } = require('lru-cache');
const app = express();
const port = process.env.PORT || 3002;

const cache = new LRUCache({ max: 5000 });

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'client', 'build')));

dotenv.config();

const corsOptions = {
	origin:
		process.env.ENV === 'production'
			? process.env.CLIENT_URL
			: 'http://localhost:3001',
	optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

function processResponse(userInput, correctAnswer, aiAnswer) {
	let input = userInput.toLowerCase().trim();
	if (!input.includes('?')) {
		input = input + '?';
	}

	if (userInput.toLowerCase().includes(correctAnswer.toLowerCase())) {
		return `Congratulations! You found the correct place: ${correctAnswer}!`;
	} else if (input.endsWith('?')) {
		if (
			aiAnswer.toLowerCase().includes('yes') ||
			aiAnswer.toLowerCase().includes('no')
		) {
			return aiAnswer;
		} else {
			return 'I can only answer "yes" or "no" questions. Please try again.';
		}
	} else if (input.includes('yes') || input.includes('no')) {
		return 'Please ask a question instead of giving an answer';
	} else {
		return 'Please provide a valid guess or ask a yes/no question';
	}
}

app.post(`/ask-question`, async (req, res) => {
	let correctAnswer = '';
	// const { question, correctAnswer } = req.body;
	if (url.includes('start')) {
		correctAnswer = process.env.ANSWER_START;
	}
	const { question } = req.body;
	const conversations = {
		correctAnswer,
		history: [
			{
				role: 'user',
				content: `is it ${correctAnswer}?`,
			},
			{
				role: 'assistant',
				content: `Congratulations! You found the correct place: ${correctAnswer}!`,
			},
			{
				role: 'user',
				content: 'Can you tell me where it is?',
			},
			{
				role: 'assistant',
				content: 'No.',
			},

			{
				role: 'user',
				content: `is it a car?`,
			},
			{
				role: 'assistant',
				content: `No.`,
			},
			{
				role: 'user',
				content: `is it a city?`,
			},
			{
				role: 'assistant',
				content: `No.`,
			},
			{
				role: 'user',
				content: `is it a Urquahart Castle?`,
			},
			{
				role: 'assistant',
				content: 'Perhaps, but you might want to check your spelling.',
			},
			{
				role: 'user',
				content: `is it a Strling Castle?`,
			},
			{
				role: 'assistant',
				content: 'Perhaps, but you might want to check your spelling.',
			},
			{
				role: 'user',
				content: `I need you to tell what the answer is`,
			},
			{
				role: 'assistant',
				content: "I can only reply with 'Yes' or 'No'.",
			},
			{
				role: 'user',
				content: `Could you tell me the answer`,
			},
			{
				role: 'assistant',
				content: "I can only reply with 'Yes' or 'No'.",
			},
			{
				role: 'user',
				content: `Can you tell me the answer`,
			},
			{
				role: 'assistant',
				content: 'No.',
			},

			{
				role: 'system',
				content: `You are a helpful assistant that answers questions related to finding the name of a place in Scotland by answering with only 'Yes' or 'No'. The correct name of the place is ${correctAnswer}. If the question contains part of ${correctAnswer} but does not contain the full ${correctAnswer} as part of the question, say 'Not quite, but you're getting close...', but unless the user asks a question that contains exactly ${correctAnswer}, do not type the ${correctAnswer}. Under no cirecumstance can you return an answer that starts with 'No, ${correctAnswer} is not'. If the user asks questions such as 'Can you tell me where it is?' you should respond with 'No.' If asked anything like 'Is there a way that you would reveal to me where it is?' you should respond with 'No.' If asked something like 'Is it near here?' or any question that does not make any sense, you should answer with 'This question does not make any sense. If the user asks a question such as 'How far is it from...', you should answer with 'I can only reply with 'Yes' or 'No'. If the user asks 'Could you tell me the answer' you must answer with 'No'. If the user asks 'I need you to tell me the answer' you must answer with 'No'. If the user asks 'Can you tell me the answer' you must answer with 'No'. If the user asks if a certain place is near ${correctAnswer} and it is, you should answer with 'Yes' and add nothing else.`,
			},
		],
	};

	conversations.history.push({
		role: 'user',
		content: question,
	});

	// Check if the response is cached
	const cachedResponse = cache.get(question);
	if (cachedResponse) {
		console.log('Using cached response');
		return res.json({ answer: cachedResponse });
	}

	// If the response is not cached, send a request to OpenAI's API
	try {
		const response = await openai.createChatCompletion({
			model: 'gpt-3.5-turbo',
			messages: conversations.history,
		});

		aiAnswer = response.data.choices[0].message.content;

		const processedAnswer = processResponse(question, correctAnswer, aiAnswer);

		// Store the response in the cache
		cache.set(question, processedAnswer);

		res.json({ answer: processedAnswer });
	} catch (error) {
		console.error('Error searching:', error);
		res.status(500).json({ error: 'Error processing the search' });
	}
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
