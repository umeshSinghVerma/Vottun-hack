"use client";

import React, { useState } from "react";
import {
  LayoutDashboard,
  User,
  Settings,
  Briefcase,
  LogOut,
  BadgeCent,
} from "lucide-react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import Logo from "../../../public/logo.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useWalletContext } from "../WalletContext";

const links = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Projects",
    href: "/dashboard/projects",
    icon: Briefcase,
  },
  {
    label: "Profile",
    href: "/dashboard/profile",
    icon: User,
  },
  {
    label: "Settings",
    href: "#",
    icon: Settings,
  },
  {
    label: "NFT Market",
    href: "#",
    icon: BadgeCent,
  },
];

const DashboardSidebar = ({}) => {
  const [open, setOpen] = useState(false);
  const {disconnectWallet} = useWalletContext();

  return (
    <div className="fixed h-full border-r border-grey-600 flex flex-col z-10 bg-opacity-50 backdrop-blur-2xl">
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between p-0">
          <div className="w-full h-[73px] border-b flex items-center gap-x-2 justify-center">
            <Image src={Logo} alt="Logo" width={30} height={30} />
            {open && (
              <span className="text-white text-xl font-secondary">App</span>
            )}
          </div>
          <div className="flex mt-4 flex-col flex-1 overflow-y-auto overflow-x-hidden p-4">
            <div
              className={cn("flex flex-col gap-2 items-center", {
                "items-start": open,
              })}
            >
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div className="w-full flex justify-center px-4 mb-4">
            {open ? (
                <Button variant="destructive" className="w-full" onClick={disconnectWallet}>
                  Disconnect Wallet <LogOut className="h-4 w-4 ml-2" />
                </Button>
            ) : (
                <Button variant="destructive" size="icon" onClick={disconnectWallet}>
                  <LogOut className="h-4 w-4" />
                </Button>
            )}
          </div>
        </SidebarBody>
      </Sidebar>
    </div>
  );
};

export default DashboardSidebar;
