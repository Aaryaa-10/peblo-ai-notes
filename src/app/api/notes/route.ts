import { connectDB } from "@/lib/db";
import Note from "@/models/notes";

export async function GET(req: Request) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);

    const userId = searchParams.get("userId");

    const notes = await Note.find({
      userId,
    }).sort({
      updatedAt: -1,
    });

    return Response.json(notes);
  } catch (error: any) {
    console.log(error);

    return Response.json(
      {
        message: "Failed to fetch notes",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const newNote = await Note.create({
      userId: body.userId,
      title: body.title,
      content: body.content,
      tags: body.tags,
      category: body.category,
    });

    return Response.json(newNote, {
      status: 201,
    });
  } catch (error: any) {
    console.log(error);

    return Response.json(
      {
        message: "Failed to create note",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  context: any
) {
  try {
    await connectDB();

    const params = await context.params;

    const id = params.id;

    await Note.findByIdAndDelete(id);

    return Response.json(
      {
        message: "Note deleted",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error);

    return Response.json(
      {
        message: "Failed to delete note",
        error: error.message,
      },
      { status: 500 }
    );
  }
}