import { connectDB } from "@/lib/db";
import Note from "@/models/notes";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const body = await req.json();

    const updatedNote = await Note.findByIdAndUpdate(
      params.id,
      {
        title: body.title,
        content: body.content,
        tags: body.tags,
        category: body.category,
      },
      {
        new: true,
      }
    );

    return Response.json(
      {
        message: "Note updated",
        updatedNote,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error);

    return Response.json(
      {
        message: "Failed to update note",
        error: error.message,
      },
      { status: 500 }
    );
  }
}