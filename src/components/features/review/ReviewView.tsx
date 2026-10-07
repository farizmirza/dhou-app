"use client";

import { RotateCcw, Check, Sparkles } from "lucide-react";

export default function ReviewView() {
  return (
    <div className="flex flex-col gap-4 p-4 pb-24">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold font-display text-neutral-800">
          Review & Retensi
        </h2>
        <span className="text-xs bg-orange-100 text-orange-600 font-semibold px-2 py-0.5 rounded-full">
          3 Kata Perlu Diulang
        </span>
      </div>

      <div className="bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD4] border border-[#FFD6A8] p-4 rounded-2xl flex flex-col gap-2">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#FF8904]">
          <Sparkles className="w-4 h-4" />
          <span>Spaced Repetition System</span>
        </div>
        <p className="text-xs text-neutral-600 leading-relaxed">
          Kosakata yang Anda simpan dari video atau salah saat kuis dijadwalkan kembali di sini untuk memperkuat ingatan.
        </p>
      </div>

      {/* Review Flashcard Preview */}
      <div className="bg-white border-2 border-neutral-100 rounded-2xl p-5 shadow-sm flex flex-col items-center text-center gap-3 mt-2">
        <span className="text-xs font-semibold px-2.5 py-1 bg-blue-50 text-blue-600 rounded-full">
          Fusha
        </span>
        <h3 className="font-arabic text-2xl text-neutral-900 leading-loose">
          أَشْعُرُ بِالْخَوْفِ
        </h3>
        <p className="text-sm text-neutral-500 font-medium">
          “Saya merasa takut”
        </p>

        <div className="flex w-full gap-2 pt-4 border-t border-neutral-100">
          <button className="flex-1 py-2 rounded-xl border border-neutral-200 text-neutral-600 font-medium text-xs flex items-center justify-center gap-1 hover:bg-neutral-50">
            <RotateCcw className="w-3.5 h-3.5 text-neutral-400" />
            <span>Lupa</span>
          </button>
          <button className="flex-1 py-2 rounded-xl bg-emerald-500 text-white font-medium text-xs flex items-center justify-center gap-1 hover:bg-emerald-600 shadow-sm">
            <Check className="w-3.5 h-3.5" />
            <span>Ingat</span>
          </button>
        </div>
      </div>
    </div>
  );
}
