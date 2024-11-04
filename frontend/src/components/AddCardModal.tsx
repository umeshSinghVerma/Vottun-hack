import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import Banxa from "../../public/banxa.png";
import moonpay_logo from "../../public/Moonpay.png";
import React from "react";

export default function AddCardModal() {
  return (
    <Dialog>
      <DialogTrigger className="mt-6 w-full bg-purple-700 text-white py-3 rounded-full font-medium hover:bg-purple-800 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500">
        Open
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-white text-lg font-light">
            CheckOut With
          </DialogTitle>
          <DialogDescription>
            <div className="flex flex-col gap-6 justify-center items-center p-2">
              <div className="flex flex-row border border-gray-400 rounded-xl p-3 w-full gap-4 hover:scale-105 transition-all duration-150">
                <Image
                  src={Banxa}
                  width={50}
                  height={50}
                  alt="banxa"
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-white text-lg font-bold gap-2">Bamxa</h3>
                  <p className="text-gray-300 text-[0.8rem] font-light">
                    Debit Card
                  </p>
                </div>
              </div>
              <div className="flex flex-row border border-gray-400 rounded-xl p-3 w-full gap-4 hover:scale-105 transition-all duration-150">
                <Image
                  src={moonpay_logo}
                  width={50}
                  height={50}
                  alt="banxa"
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-white text-lg font-bold gap-2">
                    Moon Pay
                  </h3>
                  <p className="text-gray-300 text-[0.8rem] font-light">
                    Debit Card, Apple Pay, Google Pay
                  </p>
                </div>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
