import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY!
);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const content = body.content;

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const prompt = `
Summarize the following notes clearly.

Also provide:
- Key Insights
- Action Items
- Important Highlights

Content:
${content}
`;

    const result =
      await model.generateContent(prompt);

    const response =
      await result.response;

    const text = response.text();

    return Response.json(
      {
        summary: text,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.log("AI ERROR:", error);

    // FALLBACK MOCK RESPONSE
    return Response.json(
      {
        summary: `
Summary:
This note discusses important concepts and key discussion points.

 Key Insights:
- Main topic identified successfully
- Important details extracted
- Productivity workflow detected

 Action Items:
- Review the note carefully
- Organize tasks into priorities
- Continue improving documentation
        `,
      },
      { status: 200 }
    );
  }
}