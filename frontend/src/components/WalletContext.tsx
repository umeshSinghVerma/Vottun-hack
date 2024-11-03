/* eslint-disable */
'use client'
import React, { createContext, useContext, ReactNode, useState, useCallback } from "react";
import Web3 from "web3";

declare global {
    interface Window {
        ethereum?: any;
        web3?: any;
    }
}

interface WalletContextType {
    isConnected: boolean;
    ethBalance: string;
    account: string;
    connectWallet: () => Promise<void>;
    disconnectWallet: () => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isConnected, setIsConnected] = useState(false);
    const [ethBalance, setEthBalance] = useState<string>("");
    const [account, setAccount] = useState<string>("");

    const detectCurrentProvider = useCallback(() => {
        if (typeof window !== "undefined") {
            if (window.ethereum) {
                return window.ethereum;
            } else if (window.web3) {
                return window.web3.currentProvider;
            } else {
                console.log("Non-ethereum browser detected. Please install MetaMask.");
            }
        }
        return null;
    }, []);

    const connectWallet = useCallback(async () => {
        const provider = detectCurrentProvider();
        if (provider) {
            try {
                await provider.request({ method: "eth_requestAccounts" });
                const web3 = new Web3(provider);
                const accounts = await web3.eth.getAccounts();
                if (accounts.length > 0) {
                    const balance = await web3.eth.getBalance(accounts[0]);
                    setAccount(accounts[0]);
                    setEthBalance(web3.utils.fromWei(balance, "ether"));
                    setIsConnected(true);
                }
            } catch (error) {
                console.error("Connection error", error);
            }
        }
    }, [detectCurrentProvider]);

    const disconnectWallet = useCallback(() => {
        setIsConnected(false);
        setEthBalance("");
        setAccount("");
    }, []);

    return (
        <WalletContext.Provider value={{ isConnected, ethBalance, account, connectWallet, disconnectWallet }}>
            {children}
        </WalletContext.Provider>
    );
};

export const useWalletContext = (): WalletContextType => {
    const context = useContext(WalletContext);
    if (!context) {
        throw new Error("useWalletContext must be used within a WalletProvider");
    }
    return context;
};
