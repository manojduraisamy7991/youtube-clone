import { Home, Flame, Library } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
  icon: React.ReactNode;
  title: string;
  active?: boolean;
}

function SidebarItem({ icon, title, active = false }: SidebarItemProps) {
  return (
    <div
      className={cn(
        "flex cursor-pointer items-center gap-5 rounded-lg px-3 py-3 hover:bg-secondary",
        active && "font-medium bg-secondary",
      )}
    >
      <div className="text-xl">{icon}</div>
      <span>{title}</span>
    </div>
  );
}

export default function Sidebar() {
  return (
    <aside className="sticky top-[57px] h-[calc(100vh-57px)] w-64 overflow-y-auto border-r bg-background p-2">
      <div className="flex flex-col gap-1">
        <SidebarItem icon={<Home size={24} />} title="Home" active />
        <SidebarItem icon={<Flame size={24} />} title="Trending" />
        <SidebarItem icon={<Library size={24} />} title="Subscriptions" />
      </div>
    </aside>
  );
}
