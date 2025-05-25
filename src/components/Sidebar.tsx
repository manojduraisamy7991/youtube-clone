import {
  Home,
  Flame,
  Library,
  History,
  Clock,
  ThumbsUp,
  PlaySquare,
  Clapperboard,
  Newspaper,
  Gamepad2,
  Trophy,
  Lightbulb,
  Music2,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
  icon: React.ReactNode;
  title: string;
  active?: boolean;
  compact?: boolean;
}

function SidebarItem({
  icon,
  title,
  active = false,
  compact = false,
}: SidebarItemProps) {
  return (
    <div
      className={cn(
        "flex cursor-pointer items-center rounded-lg hover:bg-secondary",
        compact ? "flex-col gap-1 px-2 py-4" : "gap-5 px-3 py-3",
        active && "font-medium bg-secondary",
      )}
    >
      <div className={cn("text-xl", compact && "mb-1")}>{icon}</div>
      <span className={cn("text-xs", compact && "text-center")}>{title}</span>
    </div>
  );
}

interface SidebarProps {
  collapsed?: boolean;
  showMobile?: boolean;
}

export default function Sidebar({
  collapsed = false,
  showMobile = false,
}: SidebarProps) {
  // Tablet shows compact sidebar
  // Desktop shows full sidebar
  // Mobile sidebar is shown when showMobile is true

  if (collapsed) {
    return (
      <aside
        className={`fixed top-[57px] ${showMobile ? "block" : "hidden"} h-[calc(100vh-57px)] w-[72px] overflow-y-auto border-r bg-background p-1 z-50 sm:block lg:hidden`}
      >
        <div className="flex flex-col">
          <SidebarItem icon={<Home size={24} />} title="Home" active compact />
          <SidebarItem icon={<Flame size={24} />} title="Trending" compact />
          <SidebarItem icon={<Library size={24} />} title="Library" compact />
          <SidebarItem icon={<History size={24} />} title="History" compact />
        </div>
      </aside>
    );
  }

  return (
    <aside
      className={`fixed top-[57px] ${showMobile ? "block" : "hidden"} h-[calc(100vh-57px)] w-64 overflow-y-auto border-r bg-background p-2 z-50 lg:block`}
    >
      <div className="mb-4 flex flex-col gap-1">
        <SidebarItem icon={<Home size={24} />} title="Home" active />
        <SidebarItem icon={<Flame size={24} />} title="Trending" />
        <SidebarItem icon={<Library size={24} />} title="Subscriptions" />
      </div>

      <div className="mb-4 border-t pt-4">
        <div className="mb-2 px-3 text-sm font-medium">You</div>
        <div className="flex flex-col gap-1">
          <SidebarItem icon={<History size={24} />} title="History" />
          <SidebarItem icon={<PlaySquare size={24} />} title="Your videos" />
          <SidebarItem icon={<Clock size={24} />} title="Watch later" />
          <SidebarItem icon={<ThumbsUp size={24} />} title="Liked videos" />
        </div>
      </div>

      <div className="mb-4 border-t pt-4">
        <div className="mb-2 px-3 text-sm font-medium">Explore</div>
        <div className="flex flex-col gap-1">
          <SidebarItem icon={<Music2 size={24} />} title="Music" />
          <SidebarItem icon={<Trophy size={24} />} title="Sports" />
          <SidebarItem icon={<Gamepad2 size={24} />} title="Gaming" />
          <SidebarItem icon={<Clapperboard size={24} />} title="Movies" />
          <SidebarItem icon={<Newspaper size={24} />} title="News" />
          <SidebarItem icon={<Lightbulb size={24} />} title="Learning" />
        </div>
      </div>
    </aside>
  );
}
