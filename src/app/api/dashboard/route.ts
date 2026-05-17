import { connectDB } from "@/lib/db";
import Note from "@/models/notes";

export async function GET(req: Request) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);

    const userId = searchParams.get("userId");

    const notes = await Note.find({ userId });

    const totalNotes = notes.length;

    const archivedNotes = notes.filter(
      (note) => note.archived
    ).length;

    const aiGeneratedNotes = notes.filter(
      (note) => note.aiSummary
    ).length;

    const allTags = notes.flatMap(
      (note) => note.tags
    );

    const tagCount: Record<string, number> = {};

    allTags.forEach((tag) => {
      tagCount[tag] = (tagCount[tag] || 0) + 1;
    });

    const mostUsedTag =
      Object.keys(tagCount).sort(
        (a, b) => tagCount[b] - tagCount[a]
      )[0] || "None";

    return Response.json({
      totalNotes,
      archivedNotes,
      aiGeneratedNotes,
      mostUsedTag,
    });
  } catch (error: any) {
    console.log(error);

    return Response.json(
      {
        message: "Failed to fetch dashboard stats",
        error: error.message,
      },
      { status: 500 }
    );
  }
}