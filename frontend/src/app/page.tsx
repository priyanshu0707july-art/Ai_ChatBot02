"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [messages, setMessages] = useState<{role: 'user' | 'ai', content: string}[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!inputValue.trim()) return;
    
    const userMsg = inputValue;
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setInputValue("");
    setIsLoading(true);

    try {
      // Adjust this URL if your backend runs on a different port
      const response = await fetch("http://localhost:8000/api/v1/chat/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // "Authorization": `Bearer ${token}` // TODO: Add auth token later
        },
        body: JSON.stringify({ message: userMsg }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessages(prev => [...prev, { role: 'ai', content: data.response }]);
      } else {
        console.error("Failed to fetch from backend");
        setMessages(prev => [...prev, { role: 'ai', content: "Sorry, I encountered an error. Please try again." }]);
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'ai', content: "Failed to connect to the server." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      <div className="flex-1 overflow-y-auto bg-white rounded-lg shadow-sm border border-gray-100 p-6 space-y-6">
        
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl">
              🤖
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Welcome to SkillBridge AI</h2>
            <p className="text-gray-500 max-w-md">
              Your personal career mentor. Ask me about careers, roadmaps, resume feedback, or interview prep!
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <Button variant="outline" className="text-left justify-start h-auto p-4" onClick={() => setInputValue("What skills do I need for AI Engineer?")}>
                <span className="truncate">What skills do I need for AI Engineer?</span>
              </Button>
              <Button variant="outline" className="text-left justify-start h-auto p-4" onClick={() => setInputValue("Review my resume for ATS")}>
                <span className="truncate">Review my resume for ATS</span>
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-6 pb-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-lg p-4 ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-gray-100 text-gray-800 rounded-bl-none'}`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-lg p-4 bg-gray-100 text-gray-800 rounded-bl-none animate-pulse">
                  SkillBridge AI is typing...
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="mt-4 flex gap-2">
        <Input 
          placeholder="Message SkillBridge AI..." 
          className="flex-1 h-12 text-base border-gray-200" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          disabled={isLoading}
        />
        <Button className="h-12 px-8" onClick={sendMessage} disabled={isLoading || !inputValue.trim()}>
          Send
        </Button>
      </div>
    </div>
  );
}
