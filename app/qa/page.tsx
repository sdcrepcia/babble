"use client";
import { WORDS } from "../../lib/words";

export default function QAPage() {
  return (
    <main className="min-h-screen bg-gray-900 p-6">
      <h1 className="text-3xl font-black text-white mb-6">
        🔍 Babble Image QA — {WORDS.length} words
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {WORDS.map((w) => (
          <div key={w.word} className="flex flex-col items-center gap-1 bg-gray-800 rounded-2xl p-2">
            <img
              src={w.image}
              alt={w.word}
              className="w-full aspect-square object-cover rounded-xl"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://placehold.co/200x200/ff0000/white?text=BROKEN";
              }}
            />
            <p className="text-white font-bold text-sm uppercase">{w.word}</p>
            <p className="text-gray-400 text-xs">{w.category}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
