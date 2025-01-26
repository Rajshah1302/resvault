"use client";

import React from "react";
import Link from "next/link";
// import { ConnectButton } from "@rainbow-me/rainbowkit";

export function Header() {
  return (
    <div className="fixed w-full h-16 top-0 z-20 flex items-center shadow-md border-b border-neutral-700 bg-neutral-900 backdrop-blur-md">
      <div className="flex w-full max-w-7xl mx-auto px-6 items-center justify-between">
        {/* Logo/Title */}
        <Link href="/" className="text-lg font-semibold text-white">
          Resvault
        </Link>

        {/* Connect Button */}
        <div>
          {/* <ConnectButton /> */}
        </div>
      </div>
    </div>
  );
}
