import { useState } from "react";
import VideoCard from "./VideoCard";
import { Button } from "./ui/button";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

const CATEGORIES = [
  "All",
  "Music",
  "Mixes",
  "Podcasts",
  "Cinema",
  "Ambient",
  "News",
  "Playlists",
  "Meditation",
  "Interstellar",
  "Web Development",
  "AI",
  "Live",
  "Computers",
  "Asian music",
  "Tourist destinations",
];

const VIDEOS = [
  {
    id: 1,
    thumbnail:
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
    title: "Creating a Modern UI with React and Tailwind CSS",
    channel: "React Masters",
    channelAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=channel1",
    views: "120K views",
    timestamp: "3 days ago",
    duration: "15:30",
    comments: 342,
    likes: 12500,
  },
  {
    id: 2,
    thumbnail:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    title: "Advanced TypeScript Tips for React Developers",
    channel: "TypeScript Guru",
    channelAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=channel2",
    views: "85K views",
    timestamp: "1 week ago",
    duration: "22:45",
    comments: 156,
    likes: 8700,
  },
  {
    id: 3,
    thumbnail:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    title: "Building a Full-Stack App with NextJS and Supabase",
    channel: "Web Dev Simplified",
    channelAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=channel3",
    views: "210K views",
    timestamp: "2 weeks ago",
    duration: "32:10",
    comments: 487,
    likes: 19800,
  },
  {
    id: 4,
    thumbnail:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    title: "Mastering CSS Grid Layout in 2023",
    channel: "CSS Wizards",
    channelAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=channel4",
    views: "65K views",
    timestamp: "5 days ago",
    duration: "18:22",
    comments: 213,
    likes: 5400,
  },
  {
    id: 5,
    thumbnail:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80",
    title: "Creating Stunning Animations with Framer Motion",
    channel: "Animation Hub",
    channelAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=channel5",
    views: "92K views",
    timestamp: "4 days ago",
    duration: "14:15",
    comments: 178,
    likes: 7600,
  },
  {
    id: 6,
    thumbnail:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80",
    title: "State Management in React: Context API vs Redux",
    channel: "React Masters",
    channelAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=channel1",
    views: "150K views",
    timestamp: "1 month ago",
    duration: "28:40",
    comments: 412,
    likes: 14300,
  },
  {
    id: 7,
    thumbnail:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    title: "Building a Real-Time Chat App with Firebase",
    channel: "Firebase Experts",
    channelAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=channel6",
    views: "78K views",
    timestamp: "2 weeks ago",
    duration: "24:55",
    comments: 245,
    likes: 6800,
  },
  {
    id: 8,
    thumbnail:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&q=80",
    title: "Responsive Design Best Practices for 2023",
    channel: "UX/UI Masters",
    channelAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=channel7",
    views: "112K views",
    timestamp: "3 weeks ago",
    duration: "19:30",
    comments: 298,
    likes: 9200,
  },
];

export default function VideoGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="flex flex-col">
      <div className="sticky top-0 z-10 bg-background pb-2 pt-2">
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex gap-2 px-4">
            {CATEGORIES.map((category) => (
              <Button
                key={category}
                variant={
                  selectedCategory === category ? "secondary" : "outline"
                }
                className="rounded-full px-3 py-1 text-sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      <div className="grid auto-rows-fr grid-cols-1 gap-4 p-4 xs:grid-cols-2 sm:gap-6 sm:p-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {VIDEOS.map((video) => (
          <VideoCard
            key={video.id}
            thumbnail={video.thumbnail}
            title={video.title}
            channel={video.channel}
            channelAvatar={video.channelAvatar}
            views={video.views}
            timestamp={video.timestamp}
            duration={video.duration}
            comments={video.comments}
            likes={video.likes}
          />
        ))}
      </div>
    </div>
  );
}
