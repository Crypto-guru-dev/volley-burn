import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { sepolia } from 'wagmi/chains'
import { ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { volley } from "../components/volley";


const chains = [volley]
console.log('aria chains = ', chains)
const projectId = 'a9680cd05c410ced5a6621e943754fc8'



const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
  enableAnalytics: true // Optional - defaults to your Cloud configuration
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <Component {...pageProps} />
      </WagmiConfig>
      <ToastContainer />
    </>
  );
}
