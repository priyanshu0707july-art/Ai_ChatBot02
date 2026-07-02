"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  const stats = [
    { title: "XP Earned", value: "2,450", icon: "✨" },
    { title: "Current Streak", value: "7 Days", icon: "🔥" },
    { title: "Roadmaps Completed", value: "3", icon: "🗺️" },
    { title: "Resumes Analyzed", value: "5", icon: "📄" },
  ];

  const badges = [
    { name: "Career Explorer", icon: "🚀", color: "bg-blue-100 text-blue-800" },
    { name: "Roadmap Master", icon: "🗺️", color: "bg-green-100 text-green-800" },
    { name: "Resume Expert", icon: "📄", color: "bg-purple-100 text-purple-800" },
  ];

  return (
    <div className="flex flex-col space-y-6 max-w-6xl mx-auto h-[calc(100vh-8rem)] overflow-y-auto pr-2 pb-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">📈 Analytics & Profile</h1>
        <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-bold">
          Level 5 Achiever
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className="border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">{stat.title}</CardTitle>
              <div className="text-2xl">{stat.icon}</div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-800">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* Badges Section */}
        <Card className="border-gray-100 shadow-sm">
          <CardHeader>
            <CardTitle>🏆 Earned Badges</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              {badges.map((badge, i) => (
                <div key={i} className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium ${badge.color}`}>
                  <span className="text-2xl">{badge.icon}</span>
                  {badge.name}
                </div>
              ))}
              <div className="flex items-center gap-2 px-4 py-3 rounded-lg font-medium bg-gray-50 text-gray-400 border border-dashed border-gray-200">
                <span className="text-2xl">🔒</span>
                Interview Warrior
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skill Progress Section */}
        <Card className="border-gray-100 shadow-sm">
          <CardHeader>
            <CardTitle>🎯 Skill Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between mb-1 text-sm font-medium text-gray-700">
                <span>Python</span>
                <span>80%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1 text-sm font-medium text-gray-700">
                <span>Machine Learning</span>
                <span>45%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1 text-sm font-medium text-gray-700">
                <span>Data Structures</span>
                <span>90%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
