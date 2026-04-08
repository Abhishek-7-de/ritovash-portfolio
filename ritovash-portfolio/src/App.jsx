import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="relative min-h-screen bg-base text-gray-300 overflow-hidden font-sans">
      {/* Premium Gamified Dark Background */}
      <div className="fixed inset-0 z-[-1] bg-base">
        {/* Core dark gradient blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[30%] h-[50%] rounded-full bg-accent/10 blur-[120px] animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px] animate-blob" style={{ animationDelay: '4s' }}></div>
        
        {/* Retro Grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4wMyIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIj48cGF0aCBkPSJNMCAwdjYwaDYwIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>

        {/* Gamified Neon Floating Elements */}
        {/* Star / Coin 1 */}
        <div className="absolute top-32 left-1/4 w-4 h-6 bg-retroCoin pixel-borders shadow-neonCoin animate-mario-spin opacity-80" />
        {/* Star / Coin 2 */}
        <div className="absolute top-64 right-1/4 w-4 h-6 bg-retroCoin pixel-borders shadow-neonCoin animate-mario-spin opacity-70" style={{ animationDelay: '0.7s'}} />
        {/* Retro Block */}
        <div className="absolute bottom-1/4 left-16 w-8 h-8 bg-surface border border-primary/50 shadow-[0_0_15px_rgba(59,130,246,0.5)] animate-mario-float" style={{ animationDuration: '3s' }}>
           <div className="w-full h-full border border-white/10 flex items-center justify-center">
             <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
           </div>
        </div>
        {/* Glowing Pipe silhouette */}
        <div className="absolute bottom-0 right-32 w-24 h-32 bg-retroGreen/10 border-t-4 border-retroGreen/40 pixel-borders blur-[2px]"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Home />
        </main>
        <Footer />
      </div>
    </div>
  );
}
