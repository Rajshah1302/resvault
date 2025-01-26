"use client";

import React from "react";
import { config } from "@/utils/config";
import {
  getDefaultConfig,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";

const queryClient = new QueryClient();

export const WalletProvider = ({ children }) => (
  <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <RainbowKitProvider
        theme={darkTheme({
          accentColor: "hsl(var(--primary))",
          accentColorForeground: "white",
          borderRadius: "medium",
          overlayBlur: "small",
        })}
        modalSize="compact" // Added this line
      >
        {children}
      </RainbowKitProvider>
    </QueryClientProvider>
  </WagmiProvider>
);
