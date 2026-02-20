"use client";
import { Word } from "../lib/words";

function speakWord(word: string) {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-US";
  utterance.rate = 0.8;
  utterance.pitch = 1.2;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

type Props = { word: Word | null };

export default function WordCard({ word }: Props) {
  if (!word) return null;
  return (
    <div className="flex flex-col items-center gap-6">
      <img
        src={word.image}
        alt={word.word}
        onClick={() => speakWord(word.word)}
        className="w-80 h-80 object-cover rounded-3xl shadow-2xl border-4 border-white cursor-pointer active:scale-95 transition-transform"
      />
      <p className="text-7xl font-black uppercase tracking-widest text-white drop-shadow-lg">
        {word.word}
      </p>
      <p className="text-xl text-white/70 uppercase tracking-widest">
        {word.category}
      </p>
    </div>
  );
}
