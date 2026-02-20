"use client";
import { useState } from "react";
import MicButton from "../components/MicButton";
import WordCard from "../components/WordCard";
import CelebrationOverlay from "../components/CelebrationOverlay";
import { Word } from "../lib/words";

function speakWord(word: string) {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-US";
  utterance.rate = 0.8;
  utterance.pitch = 1.2;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

export default function Home() {
  const [matchedWord, setMatchedWord] = useState<Word | null>(null);
  const [celebrate, setCelebrate] = useState(false);

  const handleMatch = (word: Word) => {
    setMatchedWord(word);
    setCelebrate(false);
    setTimeout(() => setCelebrate(true), 50);
    setTimeout(() => speakWord(word.word), 800);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-500 to-blue-400 flex flex-col items-center justify-center gap-6 p-4">
      <h1 className="text-3xl font-black text-white drop-shadow-lg text-center">
        🗣️ Say a Word!
      </h1>

      {matchedWord ? (
        <WordCard word={matchedWord} />
      ) : (
        <p className="text-lg text-white/80 font-bold animate-pulse text-center">
          Press the mic and say something! 🎉
        </p>
      )}

      <MicButton onMatch={handleMatch} />
      <CelebrationOverlay trigger={celebrate} />
    </main>
  );
}
