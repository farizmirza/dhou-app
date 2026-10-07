"use client";

import { Flame, BatteryCharging, ChevronDown } from "lucide-react";
import { ArabicVariety } from "@/types";

interface TopBarProps {
  streak: number;
  energy: number;
  variety: ArabicVariety;
  onVarietyChange?: (variety: ArabicVariety) => void;
}

const varietyLabels: Record<ArabicVariety, { name: string; badge: string; color: string }> = {
  fusha: { name: "الفصحى (Fusha)", badge: "Fusha", color: "bg-blue-500" },
  egyptian: { name: "المصرية (Mesir)", badge: "Egyptian", color: "bg-orange-500" },
  levantine: { name: "الشامية (Syam)", badge: "Levantine", color: "bg-emerald-500" },
};

export default function TopBar({ streak, energy, variety }: TopBarProps) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between px-4 py-3 bg-white/95 backdrop-blur-sm border-b border-neutral-100 safe-top">
      {/* Dialect selector button */}
      <button
        type="button"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 transition-colors"
      >
        <span className={`w-2.5 h-2.5 rounded-full ${varietyLabels[variety].color}`} />
        <span className="text-xs font-semibold text-neutral-700">
          {varietyLabels[variety].badge}
        </span>
        <ChevronDown className="w-3.5 h-3.5 text-neutral-500" />
      </button>

      {/* Gamification Stats (Streak & Energy) */}
      <div className="flex items-center gap-3">
        {/* Streak */}
        <div className="flex items-center gap-1 text-orange-500 font-display font-semibold text-sm">
          <Flame className="w-5 h-5 fill-orange-500 stroke-orange-500 animate-pulse" />
          <span>{streak}</span>
        </div>

        {/* Energy / Lives */}
        <div className="flex items-center gap-1 text-emerald-500 font-display font-semibold text-sm">
          <BatteryCharging className="w-5 h-5 stroke-emerald-500 fill-emerald-100" />
          <span>{energy}%</span>
        </div>
      </div>
    </header>
  );
}
