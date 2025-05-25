import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  MessageSquare,
  ThumbsUp,
  Clock,
  Share2,
  MoreVertical,
} from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

interface VideoCardProps {
  thumbnail: string;
  title: string;
  channel: string;
  channelAvatar: string;
  views: string;
  timestamp: string;
  duration: string;
  comments?: number;
  likes?: number;
}

export default function VideoCard({
  thumbnail = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
  title = "Amazing Video Title",
  channel = "Channel Name",
  channelAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=channel1",
  views = "100K views",
  timestamp = "3 days ago",
  duration = "10:30",
  comments = 0,
  likes = 0,
}: VideoCardProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  return (
    <>
      <div
        className="group cursor-pointer"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={() => setShowDialog(true)}
      >
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <img
            src={thumbnail}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-110"
            loading="lazy"
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
        <div className="mt-2 flex gap-2 sm:gap-3">
          <Avatar className="h-8 w-8 shrink-0 sm:h-9 sm:w-9">
            <AvatarImage src={channelAvatar} />
            <AvatarFallback>{channel.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="line-clamp-2 text-sm font-medium sm:text-base">
              {title}
            </h3>
            <p className="text-xs text-muted-foreground sm:text-sm">
              {channel}
            </p>
            <p className="text-xs text-muted-foreground sm:text-sm">
              {views} • {timestamp}
            </p>
          </div>
        </div>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto p-0 sm:rounded-lg">
          <div className="relative aspect-video w-full">
            <img
              src={thumbnail}
              alt={title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-full bg-black bg-opacity-70 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
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
          </div>

          <div className="p-4">
            <h2 className="mb-2 text-xl font-semibold">{title}</h2>

            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src={channelAvatar} />
                  <AvatarFallback>{channel.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{channel}</p>
                  <p className="text-sm text-muted-foreground">
                    1.2M subscribers
                  </p>
                </div>
                <Button className="ml-2 rounded-full" variant="secondary">
                  Subscribe
                </Button>
              </div>

              <div className="flex items-center gap-1">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1 rounded-full"
                >
                  <ThumbsUp className="h-4 w-4" />
                  <span>{likes.toLocaleString()}</span>
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  <Clock className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="mb-6 rounded-lg bg-secondary/50 p-3">
              <p className="mb-1 text-sm">
                <span className="font-medium">{views}</span> •{" "}
                <span>{timestamp}</span>
              </p>
              <p className="text-sm">
                This is a description of the video that explains what the viewer
                will learn or experience by watching this content.
              </p>
            </div>

            <div>
              <div className="mb-4 flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                <h3 className="text-lg font-medium">
                  {comments.toLocaleString()} Comments
                </h3>
              </div>

              <div className="mb-4 flex items-start gap-3">
                <Avatar className="mt-1">
                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user1" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="mb-1 flex items-center gap-2">
                    <span className="font-medium">User123</span>
                    <span className="text-xs text-muted-foreground">
                      2 days ago
                    </span>
                  </div>
                  <p className="text-sm">
                    This tutorial was exactly what I needed! The explanations
                    are clear and the examples are practical. Thanks for
                    sharing!
                  </p>
                  <div className="mt-1 flex items-center gap-3">
                    <Button variant="ghost" size="sm" className="h-auto p-0">
                      <ThumbsUp className="mr-1 h-3 w-3" /> 42
                    </Button>
                    <Button variant="ghost" size="sm" className="h-auto p-0">
                      Reply
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Avatar className="mt-1">
                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user2" />
                  <AvatarFallback>D</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="mb-1 flex items-center gap-2">
                    <span className="font-medium">DevExpert</span>
                    <span className="text-xs text-muted-foreground">
                      1 week ago
                    </span>
                  </div>
                  <p className="text-sm">
                    Great content! I'd love to see a follow-up video that goes
                    deeper into advanced techniques.
                  </p>
                  <div className="mt-1 flex items-center gap-3">
                    <Button variant="ghost" size="sm" className="h-auto p-0">
                      <ThumbsUp className="mr-1 h-3 w-3" /> 18
                    </Button>
                    <Button variant="ghost" size="sm" className="h-auto p-0">
                      Reply
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
