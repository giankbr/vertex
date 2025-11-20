import { Sidebar } from "@/components/sidebar";
import { RightPanel } from "@/components/right-panel";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white">
      <Sidebar />
      <RightPanel />
    </div>
  );
}
