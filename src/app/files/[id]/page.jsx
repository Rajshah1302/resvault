'use client'

import ChatBot from "@/app/__components/ChatBot"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import axios from "axios";
import { useState, useEffect } from "react";
import { use } from 'react';  // Import React.use()
import { Sidebar } from "@/components/ui/sidebar";
import { SidebarDemo } from "@/app/__components/Sidebar";

// Fetch file data by ID
const fetchFileById = async (fileId) => {
  try {
    const response = await axios.get(`http://localhost:4000/api/files/${fileId}`); // Replace with your backend URL
    return response.data; // Return the file data
  } catch (error) {
    console.error("Error fetching file:", error);
    throw error;
  }
};

export default function ResearchPage({ params }) {
  // Use React.use() to unwrap the params Promise
  const { id } = use(params);  // Access the `id` property properly

  const [file, setFile] = useState(null); // Set initial state as null
  const [loading, setLoading] = useState(true); // Start with loading state

  // Fetch file data when id is available
  useEffect(() => {
    if (id) {
      setLoading(true); // Start loading
      fetchFileById(id)
        .then((data) => {
          setFile(data); // Set the fetched file data
          setLoading(false); // Stop loading
        })
        .catch((error) => {
          console.error("Error loading file:", error);
          setLoading(false); // Stop loading even on error
        });
    }
  }, [id]);

  // Ensure hydration occurs only on the client side
  if (typeof window === 'undefined') {
    return null; // Prevent SSR mismatch during server-side rendering
  }

  // Handle loading and error states
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (!file) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        <p>File not found</p>
      </div>
    );
  }

  return (
    <div className="flex  bg-neutral-900 text-neutral-100"> 
        <SidebarDemo/>  
      <div className=" mx-auto max-w-4xl  bg-white rounded-3xl shadow-2xl  text-black justify-center items-center">
        <div className="p-8 space-y-6">
          <h1 className="text-4xl font-extrabold text-center bg-clip-text  text-black">
            {file.name || "Research Paper"}
          </h1>

          <p className="text-xl text-center text-gray-600 max-w-2xl mx-auto">
            {file.description || "Description unavailable"}
          </p>

          <div className="flex justify-center">
            <a
              href={`http://localhost:5000/files/download/${file._id}`} // Replace with your download endpoint
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="group relative overflow-hidden rounded-full pl-8 pr-6 py-3 bg-gradient-to-r text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                <span className="relative z-10">Download Research Paper</span>
                <Download className="w-5 h-5 ml-2 inline-block transition-transform group-hover:translate-y-1" />
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Button>
            </a>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-t-3xl p-6">
            <h2 className="text-2xl font-bold mb-4 text-center text-black">Research Assistant Chatbot</h2>
            <div className="bg-gray-100 rounded-2xl p-4 shadow-inner">
              <ChatBot description={file.description}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
