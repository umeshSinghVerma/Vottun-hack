
 <img src="https://github.com/user-attachments/assets/a4525855-abe4-48bb-b0e3-d28ec2315fcf" alt="graph" width="600"/>

## CryptoSmart

Welcome to our Web3 Exchange, a decentralized marketplace for trading digital assets like tokens and NFTs. Our platform empowers users to seamlessly buy, sell, and trade their assets while leveraging automated backend algorithms to maximize profits.


## About the Project
Our project, CryptoSmart, is a cutting-edge web3 exchange platform designed to empower users with seamless, efficient, and profitable trading of tokens and NFTs. Built on a decentralized foundation, CryptoSmart allows users to buy, sell, and trade digital assets securely. The platform’s intelligent backend algorithm dynamically optimizes asset placement across various virtual machines (VMs), ensuring that each token is positioned in the most profitable environment. By leveraging the power of the Vottun API, CryptoSmart can identify real-time opportunities and automatically shift assets to VMs offering the highest returns, maximizing users’ profit potential. Our intuitive interface lets traders easily monitor their portfolios, access trending assets, and conduct transactions with ease, whether they’re trading high-demand tokens or unique NFTs.

[Demo Youtube Video](https://youtu.be/icFj8-VCzGM)


## Our Mission
At CryptoSmart, our mission is to make digital asset trading smarter, faster, and more profitable. We believe in harnessing the power of decentralized technology to create a platform where users can confidently trade assets, knowing they’re always in the best possible environment for growth. By implementing real-time optimization through cutting-edge algorithms and leveraging blockchain’s transparency and security, we aim to redefine the trading experience, making profit maximization effortless and accessible to all. We envision a future where every transaction and asset decision is optimized for the user’s benefit, empowering traders of all backgrounds to take control of their digital investments with confidence and clarity.

### Key Features

1. **Token & NFT Trading:** Users can buy, sell, and trade a diverse range of tokens and NFTs, tapping into the expanding world of decentralized finance.

2. **Profit Optimization Algorithm:** Our unique backend algorithm continuously analyzes and shifts tokens to the most profitable virtual machine (VM) environment, ensuring optimized returns on assets. This includes monitoring real-time values across VMs like Ethereum, Solana, and more.

3. **Automated Asset Management:** The algorithm uses smart analytics to rebalance tokens in response to market trends, automatically moving them to VMs offering the best rates. This approach maximizes potential gains and minimizes the need for manual intervention.

4. **Vottun API Integration:** By integrating the Vottun API, our platform provides enhanced security, traceability, and compliance features, adding layers of reliability to every transaction.

5. **Decentralized Control & Ownership:** Our exchange is fully decentralized, allowing users full control over their assets and transactions without centralized intermediaries.

6. **Comprehensive Analytics & Dashboard:** The platform offers users an intuitive dashboard displaying live market data, transaction history, and portfolio performance, providing insights into asset value and trading options.

## Work Flow



![Workflow](https://github.com/user-attachments/assets/8600701c-5d14-477b-b0a2-1a6ec6e365fd)



## About the Platform


### 1. The HomePage - giving a small intro about the platform


   
![CreateNextApp-GoogleChrome2024-11-0323-13-08-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/6e5fc819-ce45-435f-8b47-61973ed41875)


### 2. Wallet Connect  

![WhatsAppVideo2024-11-04at00 26 09online-video-cutter com-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/4212564f-517b-4195-a20f-795363438b25)




 ### 3. Dashboard - showcasing the present NFT'S on the platform and the list of all the vm's


   
 ![CreateNextApp-GoogleChrome2024-11-0323-23-44-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/ade0aeb0-2e09-49dc-8e34-8729bad727a8)




### 4. Real-Time Tracking: Users gain insights into market dynamics as they happen, assisting in timely buying/selling decisions.
  <img src="https://github.com/user-attachments/assets/a14ee738-a886-4015-ab22-f1b8e7fd71f0" alt="graph" width="600"/>




  ### 5. Users can buy, sell & swap their tokens

<div align="center">
 <img src="https://github.com/user-attachments/assets/4f6bcfa6-bd89-4e28-b05c-01754fd84438" alt="buy" width="30%">
  <img src="https://github.com/user-attachments/assets/7dfed16c-c233-4c3e-b9ff-08943dad7287" alt="sell" width="30%">
   <img src="https://github.com/user-attachments/assets/0408f132-2032-4973-939d-8a3c3c52c0f6" alt="swap" width="30%">
</div>

### Code Components 

## Wallet Connect 
```interface WalletContextType {
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
```


### Send Transaction
```
import axios, { AxiosResponse } from "axios";

interface TransferResponse {
    success: boolean;
    txHash?: string;
    error?: string;
}

export async function transferERC20Token(
    recipient: string,
    network: number,
    amount: number,
    gasLimit?: number
): Promise<TransferResponse> {
    const headersList = {
        "x-application-vkn": process.env.VOTTUN_APPLICATION_ID || "",
        "Authorization":`Bearer ${process.env.VOTTUN_API_KEY}`,
        "Content-Type": "application/json",
    };
    const contractAddress = process.env.VOTTUN_CONTRACT_ADDRESS;

    const bodyContent = JSON.stringify({
        contractAddress,
        recipient,
        network,
        amount,
        gasLimit,
    });

    
    const reqOptions = {
        url: "https://api.vottun.tech/erc/v1/erc20/transfer",
        method: "POST",
        headers: headersList,
        data: bodyContent,
    };
    
    try {
        console.log("body content",bodyContent);
        const response: AxiosResponse<TransferResponse> = await axios.request(reqOptions);
        return response.data;
    } catch (error: any) {
        console.log(error);
        throw new Error(error.response?.data?.message || "Transfer failed");
    }
}

```
### Setup Instructions
Clone the repo

```git clone  https://github.com/umeshSinghVerma/Vottun-hack```

get into the frontend folder
```cd frontend```

install the dependencies
```npm i ```

set up the .env.local file
```
VOTTUN_API_KEY=
VOTTUN_APPLICATION_ID=""
VOTTUN_CONTRACT_ADDRESS=""
```


