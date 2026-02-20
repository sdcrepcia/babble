"use client";
import { useState } from "react";
import MicButton from "../components/MicButton";
import WordCard from "../components/WordCard";
import CelebrationOverlay from "../components/CelebrationOverlay";
import { Word } from "../lib/words";

export default function Home() {
  const [matchedWord, setMatchedWord] = useState<Word | null>(null);
  const [celebrate, setCelebrate] = useState(false);

  const handleMatch = (word: Word) => {
    setMatchedWord(word);
    setCelebrate(false);
    setTimeout(() => setCelebrate(true), 50);
    const audio = new Audio("/sounds/success.mp3");
    audio.play().catch(() => {});
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-500 to-blue-400 flex flex-col items-center justify-center gap-8 p-6">
      <h1 className="text-5xl font-black text-white drop-shadow-lg text-center">
        🗣️ Say a Word!
      </h1>

      {matchedWord ? (
        <WordCard word={matchedWord} />
      ) : (
        <p className="text-2xl text-white/80 font-bold animate-pulse">
          Press the mic and say something! 🎉
        </p>
      )}

      <MicButton onMatch={handleMatch} />
      <CelebrationOverlay trigger={celebrate} />
    </main>
  );
}
