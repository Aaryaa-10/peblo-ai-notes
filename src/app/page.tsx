"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-purple-950 text-white flex flex-col items-center justify-center px-6 overflow-hidden">
      
      <div className="max-w-6xl text-center">
        
        {/* HERO SECTION */}

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-300 bg-clip-text text-transparent"
        >
          Peblo AI Notes
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto"
        >
          Collaborative AI-powered workspace for smarter productivity,
          summaries, insights, and note sharing.
        </motion.p>

        {/* BUTTONS */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="/signup">
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.45)]">
              Get Started
            </button>
          </Link>

          <Link href="/login">
            <button className="bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 hover:bg-white/10">
              Login
            </button>
          </Link>

          <Link href="/notes">
            <button className="bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 hover:bg-white/10">
              Open Workspace
            </button>
          </Link>

          <Link href="/dashboard">
            <button className="bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 hover:bg-white/10">
              Dashboard
            </button>
          </Link>
        </motion.div>

        {/* FEATURE CARDS */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">

          {/* CARD 1 */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{
              scale: 1.05,
              y: -8,
            }}
            className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]"
          >
            <h2 className="text-2xl font-bold mb-3">
              AI Summaries
            </h2>

            <p className="text-gray-400">
              Generate smart summaries and action items instantly.
            </p>
          </motion.div>

          {/* CARD 2 */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{
              scale: 1.05,
              y: -8,
            }}
            className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]"
          >
            <h2 className="text-2xl font-bold mb-3">
              Real-time Workspace
            </h2>

            <p className="text-gray-400">
              Autosaving collaborative notes with a modern editing experience.
            </p>
          </motion.div>

          {/* CARD 3 */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{
              scale: 1.05,
              y: -8,
            }}
            className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(236,72,153,0.35)]"
          >
            <h2 className="text-2xl font-bold mb-3">
              Public Sharing
            </h2>

            <p className="text-gray-400">
              Share notes publicly with unique links.
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}