"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";

export default function NotesPage() {
    const [notes, setNotes] = useState([]);

    const [selectedNote, setSelectedNote] =
        useState<any>(null);

    const [searchQuery, setSearchQuery] =
        useState("");

    const [aiSummary, setAiSummary] =
        useState("");

    const [loading, setLoading] =
        useState(true);

    const fetchNotes = async () => {
  setLoading(true);

  try {
    const userId = "6a06e978d95b9ecef9a853ca";

    const response = await axios.get(
      `/api/notes?userId=${userId}`
    );

    setNotes(response.data);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};

    useEffect(() => {
        fetchNotes();
    }, []);

    const createNewNote = async () => {
        try {
            const userId = "6a06e978d95b9ecef9a853ca";

            await axios.post("/api/notes", {
                userId,

                title: "Untitled Note",

                content: "",

                tags: [],

                category: "General",
            });

            fetchNotes();
        } catch (error) {
            console.log(error);
        }
    };

    const saveNote = async (updatedNote: any) => {
  try {
    await axios.patch(
      `/api/notes/${updatedNote._id}`,
      {
        title: updatedNote.title,
        content: updatedNote.content,
      }
    );
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  if (!selectedNote) return;

  const timeout = setTimeout(() => {
    saveNote(selectedNote);
  }, 1000);

  return () => clearTimeout(timeout);
}, [selectedNote]);

const filteredNotes = notes.filter(
  (note: any) =>
    note.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase()) ||

    note.content
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
);


const generateAISummary = async () => {
  if (!selectedNote) return;

  try {
    setAiSummary("Generating summary...");

    const response = await axios.post(
      "/api/ai-summary",
      {
        content: selectedNote.content,
      }
    );

    setAiSummary(response.data.summary);

    toast.success("AI Summary generated");
  } catch (error) {
    console.log(error);

    toast.error("AI generation failed");
  }
};

const shareNote = async () => {
  if (!selectedNote) return;

  try {
    const response = await axios.patch(
      `/api/notes/share/${selectedNote._id}`
    );

    const shareUrl =
      `${window.location.origin}/share/${response.data.shareId}`;

    navigator.clipboard.writeText(shareUrl);

    toast.success("Share link copied!");
  } catch (error) {
    console.log(error);

    toast.error("Failed to share note");
  }
};
    return (
        <main className="h-screen bg-gradient-to-br from-black via-zinc-950 to-purple-950 text-white flex">
            {/* SIDEBAR */}

            <div className="w-[320px] border-r border-zinc-800 p-4">
                <div className="flex items-center justify-between mb-6">
                    {loading && (
                        <div className="text-gray-500 text-center mt-10">
                            Loading notes...
                        </div>
                    )}
                    <h1 className="text-2xl font-bold">
                        Notes
                    </h1>

                    <button
                        onClick={createNewNote}
                        className="bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:scale-105 transition-all px-4 py-2 rounded-lg"
                    >
                        +
                    </button>
                </div>

                <input
                    type="text"
                    placeholder="Search notes..."
                    value={searchQuery}
                    onChange={(e) =>
                        setSearchQuery(e.target.value)
                    }
                    className="w-full mb-4 p-3 rounded-lg bg-zinc-900 border border-zinc-800 outline-none"
                />

                <div className="space-y-3">

                    {filteredNotes.length === 0 && (
                        <div className="text-center text-gray-500 mt-10">
                            No notes found.
                        </div>
                    )}
                    {filteredNotes.map((note: any) => (
                        
                        <div
                            key={note._id}
                            onClick={() => setSelectedNote(note)}
                            className="bg-zinc-900 p-4 rounded-xl cursor-pointer hover:bg-zinc-800"
>
                        
                            <h2 className="font-semibold">
                                {note.title}
                            </h2>

                            <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                                {note.content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* EDITOR */}

            <div className="flex-1 p-8">
  <div className="h-full bg-zinc-900 rounded-2xl p-6">
    {selectedNote ? (
      <>
                            <input
                                type="text"
                                value={selectedNote.title}
                                onChange={(e) =>
                                    setSelectedNote({
                                        ...selectedNote,
                                        title: e.target.value,
                                    })
                                }
                                className="w-full bg-transparent text-4xl font-bold outline-none mb-6"
                            />

                            <button
                                onClick={generateAISummary}
                                className="mb-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:scale-105 transition-all px-4 py-2 rounded-lg"
                            >
                                Generate AI Summary
                            </button>

                            <button
                                onClick={shareNote}
                                className="mb-4 ml-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:scale-105 transition-all px-4 py-2 rounded-lg"
                            >
                                Share Note
                            </button>
                            <textarea
                                value={selectedNote.content}
                                onChange={(e) =>
                                    setSelectedNote({
                                        ...selectedNote,
                                        content: e.target.value,
                                    })
                                }
                                className="w-full h-[80%] bg-white/5 border border-purple-500/20 focus:border-purple-400 rounded-2xl p-4 outline-none text-lg text-gray-200 resize-none backdrop-blur-md transition-all duration-300 focus:shadow-[0_0_25px_rgba(168,85,247,0.35)]"
                            />
                            {aiSummary && (
                                <div className="mt-6 bg-zinc-800 p-4 rounded-xl whitespace-pre-wrap">
                                    <h2 className="font-bold mb-2">
                                        AI Insights
                                    </h2>

                                    <p className="text-gray-300">
                                        {aiSummary}
                                    </p>
                                </div>
                            )}
                        </>
                    ) : (
                        <>
                            <h1 className="text-3xl font-bold mb-4">
                                Select a note
                            </h1>

                            <p className="text-gray-400">
                                Your note content will appear here.
                            </p>
                        </>
                    )}
                </div>
            </div>
        </main>
    );
}