const express = require('express');
const bodyParser = require('body-parser');
const OpenAI = require('openai-api');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const openai = new OpenAI(process.env.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);

app.post('/generate-pitches', async (req, res) => {
	try {
		const persona = req.body.persona;
		const action = req.body.action;
		const description = req.body.description;
		const prompt = `Write 3 different compelling product pitches that speak directly to the "${persona}" and encourage them to ${action} on the "${description}".`;
		const completions = await openai.completions.create({
			engine: 'davinci',
			prompt: prompt,
			max_tokens: 1024,
			n: 3,
			stop: ['\n', 'Pitch:', '1.', '2.', '3.']
		});
		const pitches = completions.choices.map(choice => choice.text.trim());
		res.json({ pitches: pitches });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'An error occurred' });
	}
});

app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`);
});
