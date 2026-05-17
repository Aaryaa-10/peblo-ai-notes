import mongoose, { Schema, models } from "mongoose";

const NoteSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      default: "Untitled Note",
    },

    content: {
      type: String,
      default: "",
    },

    tags: {
      type: [String],
      default: [],
    },

    category: {
      type: String,
      default: "General",
    },

    archived: {
      type: Boolean,
      default: false,
    },

    isPublic: {
      type: Boolean,
      default: false,
    },

    shareId: {
      type: String,
      default: null,
    },

    aiSummary: {
      type: String,
      default: "",
    },

    actionItems: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Note =
  models.Note || mongoose.model("Note", NoteSchema);

export default Note;