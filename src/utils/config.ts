import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  scrollSepolia,
  sepolia,
} from "wagmi/chains";
import {
  getDefaultConfig,
  RainbowKitProvider,
  darkTheme,
  Chain,
} from "@rainbow-me/rainbowkit";
import * as chains from "wagmi/chains";

const AllChains: readonly [Chain, ...Chain[]] = [
  ...(Object.values(chains) as Chain[]),
] as unknown as readonly [Chain, ...Chain[]];

export const config = getDefaultConfig({
  appName: "Nexus",
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID ?? "",
  chains: AllChains,
  ssr: true,
});
