import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      <div className="flex-1 overflow-y-auto bg-white rounded-lg shadow-sm border border-gray-100 p-6 space-y-6">
        {/* Welcome Message */}
        <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl">
            🤖
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Welcome to SkillBridge AI</h2>
          <p className="text-gray-500 max-w-md">
            Your personal career mentor. Ask me about careers, roadmaps, resume feedback, or interview prep!
          </p>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <Button variant="outline" className="text-left justify-start h-auto p-4">
              <span className="truncate">What skills do I need for AI Engineer?</span>
            </Button>
            <Button variant="outline" className="text-left justify-start h-auto p-4">
              <span className="truncate">Review my resume for ATS</span>
            </Button>
            <Button variant="outline" className="text-left justify-start h-auto p-4">
              <span className="truncate">Create a 3-month DevOps roadmap</span>
            </Button>
            <Button variant="outline" className="text-left justify-start h-auto p-4">
              <span className="truncate">Best government jobs after BTech?</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        <Input 
          placeholder="Message SkillBridge AI..." 
          className="flex-1 h-12 text-base border-gray-200" 
        />
        <Button className="h-12 px-8">Send</Button>
      </div>
    </div>
  );
}
