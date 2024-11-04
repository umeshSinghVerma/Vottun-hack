import { transferERC20Token } from '@/lib/sellToken';
import { NextRequest, NextResponse } from "next/server";

interface TransferRequestBody {
    contractAddress: string;
    recipient: string;
    network: number;
    amount: number;
    gasLimit?: number;
}

interface TransferResponse {
    success: boolean;
    txHash?: string;
    error?: string;
}

export async function POST(req: NextRequest) {
    if (req.method !== 'POST') {
        return NextResponse.json({error:"Method not allowed"},{ status: 400 })
    }

    const { recipient, network, amount, gasLimit } = await req.json() as TransferRequestBody;

    if (!recipient || !network || !amount) {
        return NextResponse.json({error:"Missing Fields detected"},{ status: 400 })
    }

    try {
        const response = await transferERC20Token( recipient, network, amount, gasLimit);
        return NextResponse.json({ success: true, transactionHash: response.txHash },{status:200});
    } catch (error: any) {
        return NextResponse.json(error, { status: 200 })
    }
}
