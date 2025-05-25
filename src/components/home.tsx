import { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import VideoGrid from "./VideoGrid";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Close mobile sidebar when screen size changes from mobile to larger
  useEffect(() => {
    if (!isMobile) {
      setShowMobileSidebar(false);
    }
  }, [isMobile]);

  return (
    <div className="flex h-screen flex-col bg-background">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        {/* Mobile sidebar overlay */}
        {showMobileSidebar && (
          <div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setShowMobileSidebar(false)}
          />
        )}

        {/* Sidebar */}
        <Sidebar
          collapsed={isTablet}
          showMobile={isMobile && showMobileSidebar}
        />

        {/* Main content */}
        <main
          className={cn(
            "flex-1 overflow-y-auto transition-[margin] duration-300",
            isTablet ? "sm:ml-[72px]" : "lg:ml-64"
          )}
        >
          {/* Mobile menu button */}
          <div className="sticky top-0 z-30 flex items-center bg-background p-2 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowMobileSidebar(!showMobileSidebar)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>

          {/* Video grid */}
          <VideoGrid />
        </main>
      </div>
    </div>
  );
}

export default Home;
