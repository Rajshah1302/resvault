import React from "react";
import { SidebarDemo } from "../__components/Sidebar";
import { PaperCard } from "../__components/paper-card";
import { researchPapers } from "@/lib/data";
import { Header } from "@/components/Header";

const ResearchPapersPage = () => {
  return (
    <div className="flex flex-col h-screen bg-neutral-900 text-neutral-100">
      {/* Header */}
      <Header />
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Fixed width on left side */}
        <div className="w-64 flex-shrink-0">
          <SidebarDemo />
        </div>
        {/* Main Content Area - Fills remaining width */}
        <div className="flex-1 p-6 overflow-y-auto bg-neutral-800">
          <h1 className="text-3xl font-bold mb-6">Research Papers</h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {researchPapers.map((paper) => (
              <PaperCard key={paper.id} {...paper} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchPapersPage;
