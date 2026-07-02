"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function RoadmapsPage() {
  const [goal, setGoal] = useState("");
  const [currentSkills, setCurrentSkills] = useState("");
  const [roadmap, setRoadmap] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const generateRoadmap = async () => {
    if (!goal) return;
    setIsLoading(true);

    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://ai-chatbot02.onrender.com";
      const response = await fetch(`${API_URL}/api/v1/roadmap/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          goal: goal,
          current_skills: currentSkills.split(",").map(s => s.trim()) 
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setRoadmap(data.roadmap);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] space-y-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">🗺️ AI Roadmap Generator</h1>
        <p className="text-gray-500 mb-8">Generate a custom learning path based on your current skills and career goals.</p>
        
        <div className="grid gap-6 max-w-2xl">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Career Goal</label>
            <Input 
              placeholder="e.g. Full Stack Developer, Data Scientist..." 
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Current Skills (comma separated)</label>
            <Input 
              placeholder="e.g. HTML, CSS, basic Python" 
              value={currentSkills}
              onChange={(e) => setCurrentSkills(e.target.value)}
            />
          </div>
          <Button onClick={generateRoadmap} disabled={isLoading || !goal}>
            {isLoading ? "Generating Roadmap..." : "Generate Roadmap"}
          </Button>
        </div>
      </div>

      {roadmap && (
        <div className="flex-1 overflow-y-auto bg-white rounded-lg shadow-sm border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">{roadmap.goal} Roadmap</h2>
          <div className="space-y-6">
            {roadmap.phases?.map((phase: any, index: number) => (
              <Card key={index} className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle>{phase.phase}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    {phase.tasks.map((task: string, i: number) => (
                      <li key={i} className="text-gray-600">{task}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
