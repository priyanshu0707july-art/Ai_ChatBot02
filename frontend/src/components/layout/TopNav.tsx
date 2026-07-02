import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

export function TopNav() {
  return (
    <div className="h-16 border-b bg-white flex items-center justify-between px-6">
      <div className="w-1/3">
        <Input placeholder="Search chats, roadmaps, skills..." className="w-full bg-gray-50 border-gray-200" />
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>US</AvatarFallback>
          </Avatar>
          <span className="font-medium text-sm">User</span>
        </div>
      </div>
    </div>
  );
}
