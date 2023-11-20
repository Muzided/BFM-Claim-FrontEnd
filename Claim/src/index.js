import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "@rainbow-me/rainbowkit/styles.css";

import { WagmiConfig, configureChains, createConfig } from 'wagmi';
import { bsc, bscTestnet } from 'wagmi/chains';
import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit';
import { publicProvider } from 'wagmi/providers/public';
import { darkTheme, Theme } from "@rainbow-me/rainbowkit";

const { publicClient, chains } = configureChains([bscTestnet], [publicProvider()]);

const { connectors } = getDefaultWallets({
  appName: 'rexx_presale_app',
  projectId: 'bb584e1ceffc1bf58f8ec61540791bc6',
  chains,
});

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient
  })


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WagmiConfig  config={wagmiConfig}>
      <RainbowKitProvider
    initialChain={bsc}
      coolMode
      theme={darkTheme({
        accentColor: '#18242A',
        accentColorForeground: 'white',
        borderRadius: 'large',
        fontStack: 'system',
        overlayBlur: 'large',
      })} chains={chains}>
<App />
</RainbowKitProvider>
    </WagmiConfig>
      

      

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
