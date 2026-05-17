import { connectDB } from "@/lib/db";
import Note from "@/models/notes";

export async function PATCH(
  req: Request,
  context: any
) {
  try {
    await connectDB();

    const id = context.params.id;

    const updatedNote = await Note.findByIdAndUpdate(
      id,
      {
        isPublic: true,
        shareId: crypto.randomUUID(),
      },
      {
        new: true,
      }
    );

    return Response.json({
      message: "Note shared successfully",
      shareId: updatedNote.shareId,
    });
  } catch (error: any) {
    console.log(error);

    return Response.json(
      {
        message: "Failed to share note",
        error: error.message,
      },
      { status: 500 }
    );
  }
}