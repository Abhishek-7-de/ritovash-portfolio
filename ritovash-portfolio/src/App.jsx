import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="min-h-screen bg-sky-100 text-slate-900">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-200 via-sky-300 to-slate-100" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-emerald-600 via-emerald-500 to-transparent" />
        <div className="absolute inset-0 opacity-60">
          <div className="absolute top-10 left-8 w-20 h-10 rounded-full bg-white/70 blur-xl" />
          <div className="absolute top-24 right-20 w-24 h-12 rounded-full bg-white/70 blur-xl" />
          <div className="absolute top-36 left-1/3 w-14 h-7 rounded-full bg-white/70 blur-xl" />
          <div className="absolute bottom-24 left-12 w-28 h-14 bg-emerald-500 rounded-t-full" />
          <div className="absolute bottom-32 right-12 w-20 h-12 bg-emerald-500 rounded-t-full" />
          <div className="absolute top-44 left-20 w-4 h-4 rounded-full bg-yellow-300 border-2 border-yellow-400" />
          <div className="absolute top-64 right-32 w-4 h-4 rounded-full bg-yellow-300 border-2 border-yellow-400" />
          <div className="absolute bottom-40 left-1/2 w-4 h-4 rounded-full bg-yellow-300 border-2 border-yellow-400" />
        </div>
      </div>

      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
