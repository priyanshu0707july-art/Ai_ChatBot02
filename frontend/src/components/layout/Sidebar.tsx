import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col p-4">
      <div className="text-xl font-bold mb-8 flex items-center gap-2">
        <span>🎓</span>
        <span>SkillBridge AI</span>
      </div>
      
      <div className="space-y-4 flex-1">
        <Link href="/">
          <Button variant="ghost" className="w-full justify-start text-left text-white hover:bg-gray-800">
            💬 New Chat
          </Button>
        </Link>
        <Link href="/dashboard">
          <Button variant="ghost" className="w-full justify-start text-left text-white hover:bg-gray-800">
            📈 Analytics
          </Button>
        </Link>
        <Link href="/history">
          <Button variant="ghost" className="w-full justify-start text-left text-white hover:bg-gray-800">
            🕒 Chat History
          </Button>
        </Link>
        <Link href="/roadmaps">
          <Button variant="ghost" className="w-full justify-start text-left text-white hover:bg-gray-800">
            🗺️ AI Roadmaps
          </Button>
        </Link>
        <Link href="/resume">
          <Button variant="ghost" className="w-full justify-start text-left text-white hover:bg-gray-800">
            📄 Resume Analyzer
          </Button>
        </Link>
        <Link href="/opportunities">
          <Button variant="ghost" className="w-full justify-start text-left text-white hover:bg-gray-800">
            💼 Opportunities
          </Button>
        </Link>
      </div>

      <div className="mt-auto pt-4 border-t border-gray-800">
        <div className="text-sm text-gray-400">
          Beta v1.0
        </div>
      </div>
    </div>
  );
}
