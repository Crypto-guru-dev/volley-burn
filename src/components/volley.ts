import { defineChain } from 'viem'

export const volley = /*#__PURE__*/ defineChain({
    id: 9981,
    name: 'Volley',
    network: "Volley",
    nativeCurrency: { name: 'V2X', symbol: 'V2X', decimals: 18 },
    rpcUrls: {
        default: {
        http: ['https://main-rpc.volleychain.com'],
        // webSocket: ['wss://test-wss.bytexc.org/ws'],
        },
        public: {
        http: ['https://main-rpc.volleychain.com'],
        // webSocket: ['wss://test-wss.bytexc.org/ws'],
        },
    },
    blockExplorers: {
        default: {
        name: 'VolleyScan',
        url: 'https://volleyscan.io',
        },
    },
    contracts: {
        
      },
      testnet: false,
})

