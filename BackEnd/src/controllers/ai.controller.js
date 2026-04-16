const aiService = require('../services/ai.service');

module.exports.getResponse = async (req, res) => {
    try {
        const prompt = req.query.prompt;

        if (!prompt) {
            return res.status(400).json({ error: "Prompt is required" });
        }

        const response = await aiService.generateContent(prompt);
        res.json({ response });
    } catch (error) {
        console.error('Error generating response:', error.message);
        console.error('Full error:', error);
        res.status(500).json({ error: 'Internal server error', details: error.message });
    }
}