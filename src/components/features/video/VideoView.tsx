"use client";

import { Play, Bookmark, Volume2 } from "lucide-react";

const mockVideos = [
  {
    id: "1",
    title: "Salam & Ungkapan Emosi",
    variety: "Fusha",
    arabic: "أَشْعُرُ بِالْخَوْفِ",
    translation: "Saya merasa takut",
    duration: "0:45",
  },
  {
    id: "2",
    title: "Percakapan Keseharian",
    variety: "Egyptian",
    arabic: "أُحِبُّهُ مِنْ كُلِّ قَلْبِي",
    translation: "Aku mencintainya sepenuh hatiku",
    duration: "1:15",
  },
  {
    id: "3",
    title: "Sapaan Pagi & Ramah Tamah",
    variety: "Levantine",
    arabic: "صَبَاحُ الْخَيْرِ يَا صَدِيقِي",
    translation: "Selamat pagi wahai sahabatku",
    duration: "0:50",
  },
];

export default function VideoView() {
  return (
    <div className="flex flex-col gap-4 p-4 pb-24">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold font-display text-neutral-800">
          Video Kontekstual
        </h2>
        <span className="text-xs text-neutral-500">Input Bahasa Otentik</span>
      </div>

      <div className="flex flex-col gap-4">
        {mockVideos.map((video) => (
          <div
            key={video.id}
            className="flex flex-col bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            {/* Video Thumbnail Placeholder with Play Button */}
            <div className="relative aspect-video bg-neutral-900 flex items-center justify-center group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-[#FF8904]/90 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 fill-white translate-x-0.5" />
              </div>

              {/* Dialect Variety Badge */}
              <span className="absolute top-3 left-3 px-2 py-1 bg-black/60 backdrop-blur-sm text-white text-[10px] font-semibold rounded-md">
                {video.variety}
              </span>

              {/* Duration */}
              <span className="absolute bottom-3 right-3 px-1.5 py-0.5 bg-black/70 text-white text-[10px] font-medium rounded">
                {video.duration}
              </span>
            </div>

            {/* Subtitle & Translation Segment (Figma style) */}
            <div className="p-3.5 flex flex-col gap-2 bg-[#FFF7ED]/30">
              <div className="flex items-start justify-between gap-2">
                <div className="flex flex-col gap-0.5 flex-1">
                  <span className="font-arabic text-lg text-right text-neutral-900 leading-loose">
                    {video.arabic}
                  </span>
                  <span className="text-xs text-neutral-500 italic">
                    “{video.translation}”
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-neutral-100 text-xs">
                <button className="flex items-center gap-1.5 text-neutral-600 hover:text-neutral-900">
                  <Volume2 className="w-4 h-4 text-[#FF8904]" />
                  <span>Dengar Ulang</span>
                </button>
                <button className="flex items-center gap-1 text-neutral-400 hover:text-orange-500">
                  <Bookmark className="w-4 h-4" />
                  <span>Simpan</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
