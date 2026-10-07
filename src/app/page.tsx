"use client";

import { useState } from "react";
import TopBar from "@/components/layout/TopBar";
import BottomNav from "@/components/layout/BottomNav";
import LearnView from "@/components/features/learn/LearnView";
import VideoView from "@/components/features/video/VideoView";
import AIConversationView from "@/components/features/chat/AIConversationView";
import ReviewView from "@/components/features/review/ReviewView";
import { NavTab, ArabicVariety } from "@/types";

export default function Home() {
  const [activeTab, setActiveTab] = useState<NavTab>("learn");
  const [variety, setVariety] = useState<ArabicVariety>("fusha");
  const [streak] = useState(7);
  const [energy] = useState(85);

  return (
    <main className="flex-1 flex flex-col bg-neutral-50/50">
      <TopBar
        streak={streak}
        energy={energy}
        variety={variety}
        onVarietyChange={setVariety}
      />

      <div className="flex-1 overflow-y-auto">
        {activeTab === "learn" && <LearnView />}
        {activeTab === "video" && <VideoView />}
        {activeTab === "ai" && <AIConversationView />}
        {activeTab === "review" && <ReviewView />}
      </div>

      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </main>
  );
}
