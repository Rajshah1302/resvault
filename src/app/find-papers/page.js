"use client";
import React, { useEffect, useState } from "react";
import { SidebarDemo } from "../__components/Sidebar";
import { PaperCard } from "../__components/paper-card";
import Link from "next/link";
const ResearchPapersPage = () => {
  const [files, setFiles] = useState([]);
  const userAddress = "abc"; // Replace with the actual user address
  
  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/api/files`
        );
        const data = await response.json();

        if (response.ok) {
          setFiles(data);
        } else {
          console.error("Error fetching files:", data.error || data.message);
        }
      } catch (error) {
        console.error("Error fetching files:", error);
      }
    };

    fetchFiles();
  }, [userAddress]);
  if(!userAddress) return (<div className="text-white text-center text-2xl font-bold mt-20">
    Please connect Wallet
  </div>);
  return (
    <div className="flex h-screen bg-neutral-900 text-neutral-100">
      {/* Sidebar */}
        <SidebarDemo />

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto bg-neutral-800">
        <h1 className="text-3xl font-bold mb-6">Latest Research Papers</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {files.map((file) => (
            <Link key={file._id} href={`/files/${file._id}`} passHref>
              <PaperCard {...file} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchPapersPage;
