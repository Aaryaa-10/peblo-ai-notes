import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY!
);

export async function POST(req: Request) {
  try {
    const { content } = await req.json();

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const prompt = `
Summarize this note clearly.

Also provide:
1. Key points
2. Action items
3. Suggested title

Note:
${content}
`;

    const result =
      await model.generateContent(prompt);

    const response =
      result.response.text();

    return Response.json({
      summary: response,
    });
  } catch (error: any) {
    console.log(error);

    return Response.json(
      {
        message: "AI summary failed",
        error: error.message,
      },
      { status: 500 }
    );
  }
}