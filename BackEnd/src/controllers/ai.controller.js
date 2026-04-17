const aiService = require('../services/ai.service');

module.exports.getReview = async (req, res) => {
    try {
        const code = req.body.code;

        if (!code) {
            return res.status(400).json({ error: "Prompt is required" });
        }

        const response = await aiService.generateContent(code);
        res.send(response);
    } catch (error) {
        console.error('Error generating response:', error.message);
        console.error('Full error:', error);
        res.status(500).json({ error: 'Internal server error', details: error.message });
    }
}