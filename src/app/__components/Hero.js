"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import myvideo from "../../../public/first.mp4";
function Hero() {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <video autoPlay muted loop className="object-cover w-full h-full">
          <source src={myvideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Decentralized Knowledge Sovereignty{" "}
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            A Tokenized Research Ecosystem Empowered by GenAI
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Unlock a new era of research management. Store your papers securely
            in a decentralized system, mint research tokens for access, and
            engage with a GenAI-powered chatbot for personalized insights and
            summaries. Enjoy full control, privacy, and AI-driven knowledge at
            your fingertips.
          </p>
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              Connect Wallet
            </motion.button>
          </Link>
          <Link href="/dashboard" className="m-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              Dashboard
            </motion.button>
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <svg
          className="animate-bounce w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </div>
  );
}

export default Hero;
