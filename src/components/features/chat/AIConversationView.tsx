"use client";

import { Mic, StopCircle, Globe, Sparkles } from "lucide-react";

export default function AIConversationView() {
  return (
    <div className="flex flex-col h-[calc(100vh-120px)] p-4 pb-20 justify-between">
      {/* Top AI Avatar Card (Direct from Figma #14:767) */}
      <div className="flex flex-col items-center gap-3 pt-2">
        <div className="relative">
          {/* Glowing rings */}
          <div className="w-28 h-28 rounded-full bg-[#FFD6A8]/40 flex items-center justify-center animate-pulse">
            <div className="w-24 h-24 rounded-full bg-[#FFB86A]/60 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-[#FF8904] flex items-center justify-center shadow-lg border-4 border-white">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="font-display font-bold text-neutral-800 text-base">
            Dhou AI Partner
          </h3>
          <div className="flex items-center gap-1.5 text-xs text-neutral-500 mt-0.5">
            <Globe className="w-3.5 h-3.5 text-[#FF8904]" />
            <span>Dialek: Fusha (Modern Standard)</span>
          </div>
        </div>
      </div>

      {/* Chat Bubbles Container */}
      <div className="flex flex-col gap-3 my-4 overflow-y-auto px-1">
        {/* AI Message */}
        <div className="self-start max-w-[85%] bg-[#51A2FF] text-white p-3.5 rounded-2xl rounded-tl-sm shadow-sm">
          <p className="font-arabic text-base text-right leading-loose">
            مَا الَّذِي تُرِيدُ أَنْ تُحَقِّقَهُ فِي الْمُسْتَقْبَلِ؟
          </p>
          <span className="text-[11px] text-blue-100 mt-1 block">
            Apa yang ingin kamu capai di masa depan?
          </span>
        </div>

        {/* User Message */}
        <div className="self-end max-w-[85%] bg-[#8EC5FF]/30 border border-[#8EC5FF] text-neutral-800 p-3.5 rounded-2xl rounded-tr-sm shadow-sm">
          <p className="font-arabic text-base text-right leading-loose text-blue-950 font-medium">
            أَطْمَحُ إِلَى أَنْ أُصْبِحَ شَخْصًا نَاجِحًا، وَأَنْ أَسْتَفِيدَ مِنْ مَعْرِفَتِي.
          </p>
          <span className="text-[11px] text-neutral-500 mt-1 block text-right">
            Saya bercita-cita menjadi orang sukses...
          </span>
        </div>
      </div>

      {/* Action / Recording Bar (Figma button style) */}
      <div className="flex items-center gap-2 pt-2">
        <button className="flex-1 py-3 px-4 rounded-xl bg-[#FF8904] hover:bg-[#ED7500] text-white font-semibold text-sm shadow-md border-b-2 border-[#ED7500] flex items-center justify-center gap-2 active:scale-[0.98] transition-all">
          <Mic className="w-5 h-5" />
          <span>Tahan untuk Bicara</span>
        </button>
        <button className="p-3 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-600 hover:bg-neutral-100">
          <StopCircle className="w-5 h-5 text-neutral-500" />
        </button>
      </div>
    </div>
  );
}
