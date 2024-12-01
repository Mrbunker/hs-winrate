"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { GAME_MODES, type Mode } from "@/lib/constants";

const tabs = [
  { id: GAME_MODES.STANDARD, name: "标准模式" },
  { id: GAME_MODES.WILD, name: "狂野模式" },
];

export const Tabs = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentMode =
    (Number(searchParams.get("mode")) as Mode) || GAME_MODES.STANDARD;
  const [activeTab, setActiveTab] = useState<Mode>(currentMode);

  const handleTabChange = (mode: Mode) => {
    setActiveTab(mode);
    router.push(`/records?mode=${mode}`);
  };

  return (
    <div className="bg-white py-2 flex space-x-2">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleTabChange(tab.id)}
          className={`px-4 py-2 rounded-lg text-sm transition-colors ${
            activeTab === tab.id
              ? "bg-gray-100 text-gray-900"
              : "text-gray-500 hover:text-gray-900"
          }`}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
};
