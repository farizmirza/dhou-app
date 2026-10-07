"use client";

import { Play, Sparkles, CheckCircle2 } from "lucide-react";

export default function LearnView() {
  return (
    <div className="flex flex-col gap-5 p-4 pb-24">
      {/* Unit Banner Card (Directly mapped from Figma #16:936) */}
      <div className="bg-[#FF8904] text-white p-5 rounded-2xl shadow-md border-b-4 border-[#ED7500] flex flex-col gap-2 relative overflow-hidden">
        <div className="flex items-center justify-between text-xs font-semibold text-orange-100">
          <span>Bagian 1, Unit 2</span>
          <span className="bg-white/20 px-2 py-0.5 rounded-full text-[10px] tracking-wide uppercase font-bold">
            Aktif
          </span>
        </div>
        <h2 className="text-xl font-bold font-display tracking-tight text-white">
          Dasar Bahasa Arab
        </h2>
        <p className="text-xs text-orange-50 font-normal leading-relaxed max-w-[90%]">
          Ungkapan dan kosakata dasar untuk memulai percakapan sederhana dalam bahasa Arab.
        </p>

        {/* Decorative background element */}
        <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-white/10 rounded-full pointer-events-none" />
      </div>

      {/* Gamified Learning Path Nodes (Duolingo-style tree) */}
      <div className="flex flex-col items-center gap-6 py-4">
        {/* Node 1 - Completed */}
        <div className="flex flex-col items-center gap-1.5">
          <button className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg border-b-4 border-emerald-700 active:translate-y-1 transition-all">
            <CheckCircle2 className="w-8 h-8" />
          </button>
          <span className="text-xs font-semibold text-neutral-600">Salam & Sapaan</span>
        </div>

        {/* Node 2 - Active (Bouncing / Highlighted) */}
        <div className="flex flex-col items-center gap-1.5 -translate-x-6">
          <div className="relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF8904] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow whitespace-nowrap">
              Mulai!
            </span>
            <button className="w-16 h-16 rounded-full bg-[#FF8904] text-white flex items-center justify-center shadow-lg border-b-4 border-[#ED7500] active:translate-y-1 transition-all">
              <Play className="w-7 h-7 fill-white translate-x-0.5" />
            </button>
          </div>
          <span className="text-xs font-semibold text-neutral-800">Perkenalan Diri</span>
        </div>

        {/* Node 3 - Locked */}
        <div className="flex flex-col items-center gap-1.5 translate-x-6">
          <button className="w-14 h-14 rounded-full bg-neutral-200 text-neutral-400 flex items-center justify-center border-b-4 border-neutral-300 cursor-not-allowed">
            <Sparkles className="w-6 h-6" />
          </button>
          <span className="text-xs font-medium text-neutral-400">Di Restoran</span>
        </div>
      </div>
    </div>
  );
}
