import { type Chain } from 'viem'

export const volley = {
    id: 9981,
    name: 'Volley',
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
} as const satisfies Chain