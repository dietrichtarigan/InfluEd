'use client';

import React, { useState } from "react";

const questions = [
  { key: "nama", label: "Nama Anda" },
  { key: "tujuan", label: "Apa tujuan Anda membangun kelas online?" },
  { key: "kurikulum", label: "Apakah Anda sudah punya kurikulum?" },
  { key: "audiens", label: "Target audiens Anda?" },
];

type Answers = {
  nama?: string;
  tujuan?: string;
  kurikulum?: string;
  audiens?: string;
};

const ChatbotModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [input, setInput] = useState("");
  const [done, setDone] = useState(false);

  const handleNext = () => {
    setAnswers((prev) => ({ ...prev, [questions[step].key]: input }));
    setInput("");
    if (step === questions.length - 1) {
      setDone(true);
    } else {
      setStep(step + 1);
    }
  };

  const handleRestart = () => {
    setStep(0);
    setAnswers({});
    setInput("");
    setDone(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md relative animate-fadeIn">
        <button onClick={onClose} className="absolute top-3 right-3 text-black/60 hover:text-primary-red text-xl">×</button>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">🤖</span>
          <span className="font-bold text-lg text-primary-red">InfluED Assistant</span>
        </div>
        {!done ? (
          <div>
            <div className="mb-4 text-black font-semibold">{questions[step].label}</div>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-accent-blue mb-4"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') handleNext(); }}
              autoFocus
            />
            <button
              className="bg-primary-red text-white px-5 py-2 rounded font-semibold hover:bg-[#b82809] transition w-full"
              onClick={handleNext}
              disabled={!input.trim()}
            >
              Lanjut
            </button>
          </div>
        ) : (
          <div className="text-center">
            <div className="mb-4 text-black font-semibold">Terima kasih, {answers.nama || "User"}!</div>
            <div className="mb-2 text-black/80">Ringkasan jawaban Anda:</div>
            <ul className="text-left text-black/70 mb-4">
              {questions.map((q) => (
                <li key={q.key}><span className="font-semibold">{q.label}:</span> {answers[q.key as keyof Answers]}</li>
              ))}
            </ul>
            <button className="bg-accent-blue text-white px-5 py-2 rounded font-semibold hover:bg-[#099bb2] transition mr-2" onClick={handleRestart}>Ulangi</button>
            <button className="bg-primary-red text-white px-5 py-2 rounded font-semibold hover:bg-[#b82809] transition" onClick={onClose}>Tutup</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatbotModal; 