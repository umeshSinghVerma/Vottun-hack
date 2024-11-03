import { WalletProvider } from "@/components/WalletContext";
import DashboardSidebar from "../../components/SideBar";
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <WalletProvider>
      <div className="flex min-h-screen w-full overflow-x-hidden">
        <div className="w-20 z-50">
          <DashboardSidebar />
        </div>
        <div className="flex-1">{children}</div> {/* Main content area */}
      </div>
    </WalletProvider>
  );
}
