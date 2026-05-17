"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function DashboardPage() {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const userId = "6a06e978d95b9ecef9a853ca";

      const response = await axios.get(
        `/api/dashboard?userId=${userId}`
      );

      setStats(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!stats) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-purple-950 text-white flex items-center justify-center">
        Loading...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-purple-950 text-white p-8">
      <h1 className="text-5xl font-bold mb-10">
        Productivity Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-6">
        <div className="bg-zinc-900 p-6 rounded-2xl">
          <p className="text-gray-400">
            Total Notes
          </p>

          <h2 className="text-5xl font-bold mt-3">
            {stats.totalNotes}
          </h2>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          <p className="text-gray-400">
            Archived Notes
          </p>

          <h2 className="text-5xl font-bold mt-3">
            {stats.archivedNotes}
          </h2>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          <p className="text-gray-400">
            AI Summaries
          </p>

          <h2 className="text-5xl font-bold mt-3">
            {stats.aiGeneratedNotes}
          </h2>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          <p className="text-gray-400">
            Most Used Tag
          </p>

          <h2 className="text-3xl font-bold mt-3">
            {stats.mostUsedTag}
          </h2>
        </div>
      </div>
    </main>
  );
}