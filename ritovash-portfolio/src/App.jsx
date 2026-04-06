import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.24),transparent_25%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.20),transparent_20%),linear-gradient(180deg,#eff6ff,#bae6fd_45%,#dbeafe)]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-emerald-600 via-emerald-500 to-transparent" />
        <div className="absolute inset-0 opacity-90">
          <div className="absolute top-10 left-8 h-20 w-40 rounded-full bg-white/80 blur-3xl" />
          <div className="absolute top-24 right-20 h-24 w-44 rounded-full bg-white/80 blur-3xl" />
          <div className="absolute top-36 left-1/3 h-12 w-28 rounded-full bg-white/70 blur-3xl" />
          <div className="absolute bottom-24 left-12 h-28 w-32 rounded-t-full bg-emerald-500" />
          <div className="absolute bottom-32 right-12 h-24 w-24 rounded-t-full bg-emerald-500" />
          <div className="absolute top-44 left-20 h-4 w-4 rounded-full bg-yellow-300 border-2 border-yellow-400 animate-[floatUpDown_3s_ease-in-out_infinite]" />
          <div className="absolute top-64 right-32 h-4 w-4 rounded-full bg-yellow-300 border-2 border-yellow-400 animate-[floatUpDown_3s_ease-in-out_infinite]" />
          <div className="absolute bottom-40 left-1/2 h-4 w-4 rounded-full bg-yellow-300 border-2 border-yellow-400 animate-[floatUpDown_3s_ease-in-out_infinite]" />
        </div>
      </div>

      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
