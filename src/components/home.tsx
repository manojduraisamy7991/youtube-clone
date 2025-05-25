import Header from "./Header";
import Sidebar from "./Sidebar";
import VideoGrid from "./VideoGrid";

function Home() {
  return (
    <div className="flex h-screen flex-col bg-background">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <VideoGrid />
        </main>
      </div>
    </div>
  );
}

export default Home;
