import { connectDB } from "@/lib/db";
import Note from "@/models/notes";
import { v4 as uuidv4 } from "uuid";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const shareId = uuidv4();

    const updatedNote = await Note.findByIdAndUpdate(
      params.id,
      {
        isPublic: true,
        shareId,
      },
      {
        new: true,
      }
    );

    return Response.json(
      {
        message: "Share link generated",
        shareId,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error);

    return Response.json(
      {
        message: "Failed to generate share link",
        error: error.message,
      },
      { status: 500 }
    );
  }
}