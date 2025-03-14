import { initialMessage } from "../../../data/data";

export const runtime = "edge";

export async function POST(request: Request) {
    try {
        const { messages } = await request.json();
        const lastMessage = messages[messages.length - 1].content;

        console.log("Last message from user:", lastMessage); // Log user's last message
        console.log("Initial message:", initialMessage.content); // Log initial message

        const prompt = `${initialMessage.content}\n\nUser: ${lastMessage}`;
        console.log("Full prompt sent to Gemini:", prompt); // Log the complete prompt

        const apiKey = process.env.GOOGLE_API_KEY;

        if (!apiKey) {
            console.error("GOOGLE_API_KEY is not set in environment variables.");
            return new Response(
                JSON.stringify({
                    error: "API key is missing",
                    details: "GOOGLE_API_KEY environment variable is not set."
                }),
                { status: 500, headers: { 'Content-Type': 'application/json' } }
            );
        }

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-latest:generateContent?key=${apiKey}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: prompt
                        }]
                    }]
                })
            }
        );

        if (!response.ok) {
            const errorBody = await response.text();
            console.error(`Gemini API Error - Status: ${response.status}, Body: ${errorBody}`);
            throw new Error(`API request failed: ${response.status} - ${errorBody}`);
        }

        const data = await response.json();
        console.log("Gemini API Response:", data); // Log the entire API response

        if (!data.candidates || data.candidates.length === 0 || !data.candidates[0].content || !data.candidates[0].content.parts || data.candidates[0].content.parts.length === 0) {
            console.error("Gemini API Response Missing Content:", data);
            throw new Error("Gemini API response is missing expected content.");
        }

        const text = data.candidates[0].content.parts[0].text;

        return new Response(
            JSON.stringify({
                role: "assistant",
                content: text
            }),
            { headers: { 'Content-Type': 'application/json' } }
        );

    } catch (error) {
        console.error("Gemini API Error:", error);
        return new Response(
            JSON.stringify({
                error: "Failed to process request",
                details: error instanceof Error ? error.message : String(error)
            }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}