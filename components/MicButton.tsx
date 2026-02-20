"use client";
import { useRef, useState } from "react";
import Fuse from "fuse.js";
import { WORDS, Word } from "../lib/words";

const fuse = new Fuse(WORDS, { keys: ["word"], threshold: 0.3 });

function speakWord(word: string) {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-US";
  utterance.rate = 0.8;
  utterance.pitch = 1.2;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

type Props = { onMatch: (word: Word) => void };

export default function MicButton({ onMatch }: Props) {
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef<any>(null);

  const stopListening = () => {
    recognitionRef.current?.stop();
    recognitionRef.current = null;
    setListening(false);
  };

  const startListening = () => {
    // If stuck in listening mode, tap again to reset
    if (listening) {
      stopListening();
      return;
    }

    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) return alert("Speech recognition not supported!");

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.continuous = false;
    recognition.maxAlternatives = 3;

    // Safety timeout — force stop after 8 seconds if stuck
    const timeout = setTimeout(() => stopListening(), 8000);

    recognition.onresult = (event: any) => {
      clearTimeout(timeout);
      const alternatives = Array.from(event.results[0]).map(
        (r: any) => r.transcript.trim().toLowerCase()
      );
      for (const spoken of alternatives) {
        const results = fuse.search(spoken);
        if (results.length > 0) {
          const matched = results[0].item;
          onMatch(matched);
          setTimeout(() => speakWord(matched.word), 3000);
          break;
        }
      }
      stopListening();
    };

    recognition.onerror = () => {
      clearTimeout(timeout);
      stopListening();
    };

    recognition.onend = () => {
      clearTimeout(timeout);
      setListening(false);
    };

    recognition.start();
    recognitionRef.current = recognition;
    setListening(true);
  };

  return (
    <button
      onClick={startListening}
      className={`text-8xl transition-transform ${listening ? "animate-pulse scale-110" : "hover:scale-110"}`}
    >
      {listening ? "👂" : "🎤"}
    </button>
  );
}
