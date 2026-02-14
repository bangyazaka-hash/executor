import { useState, useEffect, useRef } from "react";
import {
  Globe,
  DiscordLogo,
  TiktokLogo,
  InstagramLogo,
  YoutubeLogo,
  GameController,
  Users,
  Trophy,
  Target,
  Lightning,
  CaretRight,
  Heart,
} from "phosphor-react";

const VALENTINE_MODE = true;

const FadeIn = ({ children, delay = "0ms" }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    }, { threshold: 0.1 });

    const current = domRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: delay }}
    >
      {children}
    </div>
  );
};

export default function App() {
  const ACCENT = VALENTINE_MODE ? "#FF4D6D" : "#15D4C5";
  const ACCENT_RGB = VALENTINE_MODE ? "255, 77, 109" : "21,212,197";
  const BG_COLOR = VALENTINE_MODE ? "#1a0a0f" : "#262729";
  const CARD_BG = VALENTINE_MODE ? "#2a1520" : "#262729";

  const [hearts, setHearts] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Generate hearts
    const newHearts = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 20 + 10,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5,
    }));
    setHearts(newHearts);

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30; // Adjust intensity
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const games = [
    { name: "PUBG Mobile", desc: "Battle royale berbasis squad dengan fokus pada strategi rotasi dan koordinasi tim.", icon: "🎯" },
    { name: "Mobile Legends", desc: "MOBA 5v5 dengan pembagian role dan fokus pada peningkatan rank.", icon: "⚔️" },
    { name: "Valorant", desc: "FPS taktis yang menekankan strategi, kontrol area, dan kerja sama tim.", icon: "🔫" },
    { name: "Free Fire", desc: "Battle royale dengan tempo cepat dan permainan agresif.", icon: "🔥" },
    { name: "Minecraft", desc: "Sandbox survival dengan proyek pembangunan bersama dalam satu server komunitas.", icon: "⛏️" },
    { name: "Clash of Clans", desc: "Game strategi berbasis clan war dengan partisipasi aktif dalam setiap perang.", icon: "🏰" },
  ];

  const stats = [
    { label: "Active Members", value: "20+", icon: Users },
    { label: "Weekly Events", value: "10+", icon: Trophy },
    { label: "Games Supported", value: "7+", icon: GameController },
  ];

  return (
    <div
      style={{ "--accent": ACCENT, "--accent-rgb": ACCENT_RGB, "--bg-color": BG_COLOR }}
      className="min-h-screen text-white font-sans selection:bg-[var(--accent)] selection:text-white relative overflow-x-hidden"
    >

      <style>{`
        @keyframes floatHeart {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { transform: translateY(-20vh) rotate(360deg); opacity: 0; }
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          15% { transform: scale(1.15); }
          30% { transform: scale(1); }
          45% { transform: scale(1.1); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 10px rgba(var(--accent-rgb), 0.4); }
          50% { box-shadow: 0 0 25px rgba(var(--accent-rgb), 0.6); }
        }
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-float-heart { animation: floatHeart linear infinite; }
        .animate-heartbeat { animation: heartbeat 1.5s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulseGlow 3s ease-in-out infinite; }
        .animate-gradient-flow {
          background: linear-gradient(to right, #fff, #FF4D6D, #FF8FAB, #fff);
          background-size: 300% 100%;
          animation: gradientFlow 4s ease infinite;
        }
      `}</style>

      <div className="fixed inset-0 bg-[var(--bg-color)] z-0"></div>

      {/* Floating Hearts */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute text-[var(--accent)] opacity-60 animate-float-heart"
            style={{
              left: `${heart.left}%`,
              width: `${heart.size}px`,
              height: `${heart.size}px`,
              animationDuration: `${heart.duration}s`,
              animationDelay: `${heart.delay}s`,
            }}
          >
            <Heart weight="fill" size={heart.size} />
          </div>
        ))}
      </div>

      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 transition-transform duration-300 ease-out">
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full mix-blend-screen filter blur-[128px] opacity-40" 
          style={{ 
            backgroundColor: ACCENT,
            transform: `translate(${mousePosition.x * 1.5}px, ${mousePosition.y * 1.5}px)`
          }}
        ></div>
        <div 
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full mix-blend-screen filter blur-[128px] opacity-30" 
          style={{ 
            backgroundColor: "#FF8FAB",
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`
          }}
        ></div>

        <div 
          className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full mix-blend-screen filter blur-[100px] opacity-20" 
          style={{ 
            backgroundColor: "#FF4D6D",
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
          }}
        ></div>
      </div>

      <div className="relative z-30 max-w-5xl mx-auto px-6 py-12 space-y-24">

        <section className="text-center space-y-8 -mt-10">
          <div 
            className="inline-flex items-center gap-3 px-5 py-5 rounded-full border text-sm font-medium mb-3 backdrop-blur-sm animate-pulse-glow"
            style={{ 
              backgroundColor: "rgba(255, 77, 109, 0.15)", 
              borderColor: "rgba(255, 77, 109, 0.5)", 
              color: ACCENT 
            }}
          >
            <Heart size={16} weight="fill" className="animate-heartbeat" />
            <span className="font-semibold">Valentine Event 2026</span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-300"></span>
            </span>
          </div>
          
          <h1 
  className="text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text"
  style={{ 
    backgroundImage: "linear-gradient(to right, #fff, #FF4D6D, #FF8FAB, #fff)",
    backgroundSize: "300% 100%",
    animation: "gradientFlow 4s ease infinite" 
  }}
>
  EXECUTOR
</h1>
          
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
            Gaming community yang aktif dan seru untuk para gamer kompetitif dan casual
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href="https://discord.gg/Ugs8ckJS2x"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 font-bold rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(var(--accent-rgb),0.5)]"
              style={{ backgroundColor: "rgba(255, 77, 109, 0.15)", color: "white" }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <DiscordLogo size={24} weight="fill" />
                Join Valentine Event
              </span>
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: ACCENT }}
              ></div>
            </a>
            
            <a
              href="#games"
              className="px-8 py-4 border border-gray-600 hover:border-[var(--accent)]/50 text-gray-300 hover:text-[var(--accent)] font-semibold rounded-xl transition-all hover:scale-105 hover:bg-[var(--accent)]/10"
            >
              Explore Games
            </a>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <FadeIn key={index} delay={`${index * 100}ms`}>
              <div 
                className="group relative p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/30"
                style={{ 
                  background: `linear-gradient(to bottom right, ${CARD_BG}, #1a0a0f)`,
                  borderColor: 'rgba(255, 255, 255, 0.05)'
                }}
              >
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: `linear-gradient(to bottom right, rgba(255, 77, 109, 0.1), transparent)` }}
                ></div>
                <stat.icon size={32} className="mb-4 animate-heartbeat" style={{ color: ACCENT }} weight="duotone" />
                <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            </FadeIn>
          ))}
        </section>

        <FadeIn>
          <section className="relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[var(--accent)] to-transparent rounded-full"></div>
            <div className="pl-8 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3 text-white">
                <Target size={36} style={{ color: ACCENT }} weight="duotone" />
                Tentang Executor
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
                Executor berisi pemain dari berbagai latar belakang game kompetitif dan casual. Komunitas ini menekankan kerja sama tim, komunikasi yang baik, dan perkembangan skill secara bertahap. Setiap member memiliki peran dan kontribusi dalam membangun lingkungan yang aktif.
              </p>
            </div>
          </section>
        </FadeIn>

        <section id="games" className="space-y-8">
          <FadeIn>
            <div className="flex items-center justify-between">
              <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3 text-white">
                <GameController size={36} style={{ color: ACCENT }} weight="duotone" />
                Game yang Dimainkan
              </h2>
              <div className="hidden md:flex items-center gap-2 text-sm font-medium" style={{ color: ACCENT }}>
                <Heart size={16} weight="fill" className="animate-heartbeat" />
                Multi-Game Community
              </div>
            </div>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {games.map((game, index) => (
              <FadeIn key={index} delay={`${index * 100}ms`}>
                <div 
                  className="group relative p-6 rounded-xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)] overflow-hidden h-full"
                  style={{ 
                      backgroundColor: CARD_BG,
                      borderColor: 'rgba(255,255,255,0.05)'
                  }}
                >
                  <div 
                      className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:opacity-60"
                      style={{ backgroundColor: 'rgba(255, 77, 109, 0.1)' }}
                  ></div>
                  <div className="text-3xl mb-3">{game.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--accent)] transition-colors">
                    {game.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {game.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
            
            <FadeIn delay="600ms">
              <div 
                  className="p-6 rounded-xl border-2 border-dashed flex flex-col items-center justify-center text-center hover:bg-[var(--accent)]/10 transition-all cursor-pointer group h-full"
                  style={{ borderColor: 'rgba(255,255,255,0.1)' }}
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">+</div>
                <h3 className="text-lg font-semibold text-gray-400 group-hover:text-[var(--accent)]">
                  Dan masih banyak lagi
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  Kami memainkan game yang kami sukai
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <FadeIn delay="100ms">
            <div 
              className="space-y-6 p-8 rounded-2xl border h-full hover:border-[var(--accent)]/20 transition-colors"
              style={{ background: `linear-gradient(to bottom right, ${CARD_BG}, transparent)`, borderColor: 'rgba(255,255,255,0.05)' }}
            >
              <h2 className="text-2xl font-bold flex items-center gap-3" style={{ color: ACCENT }}>
                <Lightning size={28} weight="duotone" />
                Aktivitas Komunitas
              </h2>
              <ul className="space-y-4">
                {[
                  "Mabar rutin setiap minggu",
                  "Event internal komunitas",
                  "Diskusi strategi dan meta game",
                  "Dokumentasi gameplay melalui media sosial"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 group">
                    <CaretRight size={20} className="mt-0.5 group-hover:translate-x-1 transition-transform" style={{ color: ACCENT }} weight="bold" />
                    <span className="group-hover:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay="200ms">
            <div 
              className="space-y-6 p-8 rounded-2xl border h-full hover:border-[var(--accent)]/20 transition-colors"
              style={{ background: `linear-gradient(to bottom right, ${CARD_BG}, transparent)`, borderColor: 'rgba(255,255,255,0.05)' }}
            >
              <h2 className="text-2xl font-bold flex items-center gap-3" style={{ color: ACCENT }}>
                <Trophy size={28} weight="duotone" />
                Perkembangan Komunitas
              </h2>
              <ul className="space-y-4">
                {[
                  "Member aktif yang seru dan ramah",
                  "Beberapa game aktif dimainkan setiap minggu",
                  "Event internal yang berjalan secara berkala"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 group">
                    <CaretRight size={20} className="mt-0.5 group-hover:translate-x-1 transition-transform" style={{ color: ACCENT }} weight="bold" />
                    <span className="group-hover:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </section>

        <FadeIn>
          <section className="relative overflow-hidden rounded-3xl p-8 md:p-12 border"
              style={{ 
                  background: `linear-gradient(to right, ${CARD_BG}, #3d1530)`,
                  borderColor: 'rgba(255,255,255,0.05)'
              }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -mr-32 -mt-32 opacity-20" style={{ backgroundColor: ACCENT }}></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-white">
                <span 
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "rgba(255, 77, 109, 0.2)", color: ACCENT }}
                >
                  <Globe size={24} weight="duotone" />
                </span>
                Konten dan Media
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  {[
                    "Highlight pertandingan",
                    "Cuplikan momen permainan",
                    "Dokumentasi event komunitas",
                    "Update aktivitas melalui TikTok, Instagram, dan YouTube"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: ACCENT }}></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <p className="text-gray-400">Follow kami untuk konten terbaru</p>
                    <div className="flex justify-center gap-4">
                      {[
                        { icon: TiktokLogo, href: "https://www.tiktok.com/@executorroom" },
                        { icon: InstagramLogo, href: "https://www.instagram.com/executorroom" },
                        { icon: YoutubeLogo, href: "https://www.youtube.com/@executor-s" },
                      ].map((social, i) => (
                        <a
                          key={i}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-xl flex items-center justify-center text-gray-400 transition-all hover:scale-110 hover:bg-[var(--accent)]/20 border border-transparent hover:border-[var(--accent)]/30"
                          style={{ backgroundColor: CARD_BG }}
                        >
                          <social.icon size={24} weight="duotone" className="hover:text-[var(--accent)]" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="text-center space-y-8 py-12">
            <div className="inline-block p-1 rounded-2xl" style={{ background: `linear-gradient(to right, ${ACCENT}, #FF8FAB, ${ACCENT})` }}>
              <div className="rounded-xl px-8 py-6" style={{ backgroundColor: BG_COLOR }}>
                <div className="flex justify-center mb-3">
                   <Heart size={32} weight="fill" className="animate-heartbeat" style={{ color: ACCENT }} />
                </div>
                <h2 className="text-3xl md:text-4xl font-black mb-4 text-white">
                  Siap Bergabung?
                </h2>
                <p className="text-gray-400 mb-6 max-w-lg mx-auto">
                  Jadilah bagian dari komunitas gaming yang terstruktur dan konsisten. Rayakan Valentine bersama Executor!
                </p>
                <a
                  href="https://discord.gg/Ugs8ckJS2x"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 font-bold rounded-xl transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(var(--accent-rgb),0.5)]"
                  style={{ backgroundColor: ACCENT, color: "white" }}
                >
                  <DiscordLogo size={24} weight="fill" />
                  Join Valentine Event
                </a>
              </div>
            </div>
          </section>
        </FadeIn>

        <footer className="pt-12 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">            
            <div className="flex items-center gap-6">
              {[
                { icon: Globe, href: "https://executor-room.vercel.app", label: "Website" },
                { icon: DiscordLogo, href: "https://discord.gg/Ugs8ckJS2x", label: "Discord" },
                { icon: TiktokLogo, href: "https://www.tiktok.com/@executorroom", label: "TikTok" },
                { icon: InstagramLogo, href: "https://www.instagram.com/executorroom", label: "Instagram" },
                { icon: YoutubeLogo, href: "https://www.youtube.com/@executor-s", label: "YouTube" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[var(--accent)] transition-all hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={22} weight="duotone" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            2026 Executor. Made with love.
          </div>
        </footer>

      </div>
    </div>
  );
}