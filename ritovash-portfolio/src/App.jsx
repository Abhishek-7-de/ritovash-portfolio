import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="min-h-screen bg-base text-white">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_24%),linear-gradient(to_bottom,#0a0a0b,#101219,#0a0a0b)]" />
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:36px_36px]" />
      </div>

      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
