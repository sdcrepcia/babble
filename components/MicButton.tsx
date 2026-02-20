"use client";
import { useRef, useState } from "react";
import Fuse from "fuse.js";
import { WORDS, Word } from "../lib/words";

const fuse = new Fuse(WORDS, { keys: ["word"], threshold: 0.3 });

type Props = {
  onMatch: (word: Word) => void;
};

function speakWord(word: string) {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-US";
  utterance.rate = 0.7;   // slightly slower = clearer for toddlers
  utterance.pitch = 1.2;  // slightly higher = friendlier sound
  window.speechSynthesis.cancel(); // stop any previous speech first
  window.speechSynthesis.speak(utterance);
}

export default function MicButton({ onMatch }: Props) {
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef<any>(null);

  const startListening = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) return alert("Speech recognition not supported!");

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 3;

    recognition.onresult = (event: any) => {
      const alternatives = Array.from(event.results[0]).map(
        (r: any) => r.transcript.trim().toLowerCase()
      );
      for (const spoken of alternatives) {
        const results = fuse.search(spoken);
        if (results.length > 0) {
          const matched = results[0].item;
          onMatch(matched);
        setTimeout(() => speakWord(matched.word), 3000); // 🔊 say the word back!
          break;
        }
      }
    };

    recognition.onend = () => setListening(false);
    recognition.start();
    recognitionRef.current = recognition;
    setListening(true);
  };

  return (
    <button
      onClick={startListening}
      disabled={listening}
      className={`text-8xl transition-transform ${listening ? "animate-pulse scale-110" : "hover:scale-110"}`}
    >
      {listening ? "👂" : "🎤"}
    </button>
  );
}
