"use client";

import { Footprints, Clapperboard, MessageSquare, BookmarkCheck } from "lucide-react";
import { NavTab } from "@/types";

interface BottomNavProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
}

export default function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const tabs = [
    { id: "learn" as NavTab, label: "Belajar", icon: Footprints },
    { id: "video" as NavTab, label: "Video", icon: Clapperboard },
    { id: "ai" as NavTab, label: "Dhou AI", icon: MessageSquare },
    { id: "review" as NavTab, label: "Review", icon: BookmarkCheck },
  ];

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[420px] z-30 bg-white border-t border-neutral-100 shadow-[0_-4px_12px_rgba(0,0,0,0.04)] rounded-t-2xl safe-bottom">
      <div className="flex items-center justify-around py-2 px-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-xl transition-all ${
                isActive
                  ? "text-[#FF8904] scale-105"
                  : "text-neutral-400 hover:text-neutral-600"
              }`}
            >
              <div
                className={`p-1.5 rounded-xl transition-colors ${
                  isActive ? "bg-[#FFF7ED]" : "bg-transparent"
                }`}
              >
                <Icon
                  className={`w-5 h-5 ${
                    isActive ? "stroke-[#FF8904] stroke-[2.5]" : "stroke-current stroke-[1.8]"
                  }`}
                />
              </div>
              <span
                className={`text-[11px] font-medium tracking-tight mt-0.5 ${
                  isActive ? "font-semibold text-[#FF8904]" : "text-neutral-400"
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
