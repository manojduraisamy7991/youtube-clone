import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface VideoCardProps {
  thumbnail: string;
  title: string;
  channel: string;
  channelAvatar: string;
  views: string;
  timestamp: string;
  duration: string;
}

export default function VideoCard({
  thumbnail = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
  title = "Amazing Video Title",
  channel = "Channel Name",
  channelAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=channel1",
  views = "100K views",
  timestamp = "3 days ago",
  duration = "10:30",
}: VideoCardProps) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <img
          src={thumbnail}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-110"
        />
        <div className="absolute bottom-1 right-1 rounded bg-black bg-opacity-80 px-1 py-0.5 text-xs text-white">
          {duration}
        </div>
        {isHovering && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
            <div className="rounded-full bg-black bg-opacity-70 p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </div>
          </div>
        )}
      </div>
      <div className="mt-2 flex gap-3">
        <Avatar className="h-9 w-9">
          <AvatarImage src={channelAvatar} />
          <AvatarFallback>{channel.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="line-clamp-2 font-medium">{title}</h3>
          <p className="text-sm text-muted-foreground">{channel}</p>
          <p className="text-sm text-muted-foreground">
            {views} • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}
