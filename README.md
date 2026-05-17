This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Peblo AI Notes

Peblo AI Notes is a modern AI-powered collaborative workspace built with Next.js, MongoDB, and Gemini AI.

The application allows users to create, edit, organize, summarize, and publicly share notes with a polished SaaS-style interface.

---

# Features

## Authentication
- User Signup
- User Login
- JWT Authentication
- Password Hashing using bcrypt

## Notes Workspace
- Create Notes
- Edit Notes
- Autosave Functionality
- Search Notes
- Real-time Note Updates

## AI Features
- AI-generated Summaries
- Key Point Extraction
- Action Item Generation
- Suggested Titles
- Gemini AI Integration

## Public Sharing
- Public Shareable Links
- Shared Note Viewer

## Dashboard Analytics
- Total Notes Count
- Archived Notes
- AI Generated Notes
- Most Used Tags

## UI/UX
- Modern Dark SaaS Theme
- Glassmorphism UI
- Smooth Animations
- Responsive Layout
- Toast Notifications

---

# Tech Stack

## Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion

## Backend
- Next.js API Routes
- MongoDB
- Mongoose

## Authentication
- JWT
- bcryptjs

## AI
- Google Gemini AI API

---

# Installation

## Clone Repository

```bash
git clone <your-repo-url>
```

## Navigate to Project

```bash
cd peblo-ai-notes
```

## Install Dependencies

```bash
npm install
```

## Setup Environment Variables

Create a `.env.local` file and add:

```env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
```

## Run Development Server

```bash
npm run dev
```

---

# Project Structure

```bash
src/
 ├── app/
 │    ├── api/
 │    ├── dashboard/
 │    ├── login/
 │    ├── notes/
 │    ├── share/
 │    └── signup/
 │
 ├── components/
 ├── lib/
 ├── models/
 └── services/
```

---

# Future Improvements

- Real-time collaboration
- Rich text editor
- Note folders and workspaces
- AI chat assistant
- File uploads
- Theme customization

---

# Author

Arya Amoriya

---