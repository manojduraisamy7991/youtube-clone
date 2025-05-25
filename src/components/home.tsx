import { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import VideoGrid from "./VideoGrid";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

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
        {/* Mobile sidebar toggle button */}
        {isMobile && showMobileSidebar && (
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50"
            onClick={() => setShowMobileSidebar(false)}
          />
        )}

        {/* Sidebar - now with showMobile prop */}
        <Sidebar
          collapsed={isTablet}
          showMobile={isMobile && showMobileSidebar}
        />

        <main className="flex-1 overflow-y-auto">
          <div className="sticky top-0 z-30 flex items-center bg-background p-2 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowMobileSidebar(!showMobileSidebar)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
          <VideoGrid />
        </main>
      </div>
    </div>
  );
}

export default Home;
