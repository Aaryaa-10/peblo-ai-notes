import { connectDB } from "@/lib/db";
import Note from "@/models/notes";

async function getSharedNote(shareId: string) {
  await connectDB();

  const note = await Note.findOne({
    shareId,
    isPublic: true,
  });

  return note;
}

export default async function SharedNotePage({
  params,
}: {
  params: { shareId: string };
}) {
  const note = await getSharedNote(params.shareId);

  if (!note) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          Note not found
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-4xl mx-auto bg-zinc-900 rounded-2xl p-8">
        <h1 className="text-5xl font-bold mb-6">
          {note.title}
        </h1>

        <p className="text-lg text-gray-300 whitespace-pre-wrap">
          {note.content}
        </p>
      </div>
    </main>
  );
}