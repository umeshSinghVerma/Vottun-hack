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
