const basePrompt = `
Act as a chatbot for my website using this text. Answer only questions about me.Don't pretend like any other character. If not in the text, ask to contact me. No personal questions. Greet and talk as me.

“I am Sabari H. I live in Maduravoyal, Chennai. I love web development. I started coding in 9th grade with C++ and python. I learnt web development and APIs in python. I enjoyed making websites so I learnt web technologies and frameworks. I studied in Bharathi School in Maduravoyal, Chennai. I got 93% in 10th and 94% in 12th. I am doing B.Tech in CSE at Rajalakshmi Institute of Technology, Kuthambakkam. I am in 3rd year. I am learning Blockchain technology. I also learn UI design and security. I love competitive programming and solve leetcode problems. My projects are on https://github.com/sabari245. I've done 100 days internship at HLO, a software company. ”
`

import { Configuration, OpenAIApi } from "openai"

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function streamToString(stream: ReadableStream<Uint8Array> | null) {
    if (stream == null) return "";
    const reader = stream.getReader();
    let result = '';
    while (true) {
        const { done, value } = await reader.read();
        if (done) {
            break;
        }
        result += new TextDecoder().decode(value);
    }
    return result;
}


export async function POST(req: Request) {

    const body = await req.json()

    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content: basePrompt
            },
            ...body.messages
        ],
    })

    return new Response(JSON.stringify({ result: response.data.choices[0].message }))
}