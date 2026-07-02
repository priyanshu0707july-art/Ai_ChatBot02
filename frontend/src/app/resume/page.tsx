"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function ResumePage() {
  const [file, setFile] = useState<File | null>(null);
  const [analysis, setAnalysis] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return;
    setIsLoading(true);

    const formData = new FormData();
    formData.append("resume", file);

    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://ai-chatbot02.onrender.com";
      const response = await fetch(`${API_URL}/api/v1/resume/analyze`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setAnalysis(data);
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
        <h1 className="text-3xl font-bold text-gray-800 mb-2">📄 AI Resume Analyzer</h1>
        <p className="text-gray-500 mb-8">Upload your resume for an ATS compatibility check and AI feedback.</p>
        
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-12 bg-gray-50">
          <input 
            type="file" 
            accept=".pdf" 
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="mb-4"
          />
          <Button onClick={handleUpload} disabled={!file || isLoading} className="mt-4">
            {isLoading ? "Analyzing..." : "Analyze Resume"}
          </Button>
        </div>
      </div>

      {analysis && (
        <div className="flex-1 overflow-y-auto bg-white rounded-lg shadow-sm border border-gray-100 p-8 space-y-6">
          <div className="flex items-center justify-between border-b pb-4">
            <h2 className="text-2xl font-bold text-gray-800">Analysis Results</h2>
            <div className="text-right">
              <span className="text-sm text-gray-500">ATS Score</span>
              <div className="text-3xl font-bold text-green-600">{analysis.ats_score}/100</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800">Strengths</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-green-900 space-y-1">
                  {analysis.strengths?.map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-800">Weaknesses</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-red-900 space-y-1">
                  {analysis.weaknesses?.map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50 md:col-span-2">
              <CardHeader>
                <CardTitle className="text-blue-800">Suggestions to Improve</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-blue-900 space-y-1">
                  {analysis.suggestions?.map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
