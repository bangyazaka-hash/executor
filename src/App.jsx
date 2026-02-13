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
} from "phosphor-react";

export default function App() {
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
    <div className="min-h-screen bg-[#262729] text-white font-sans selection:bg-[#15D4C5] selection:text-[#262729]">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#15D4C5] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#15D4C5] rounded-full mix-blend-multiply filter blur-[128px] opacity-10"></div>
      </div>


      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#262729] via-transparent to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#262729]/50 via-transparent to-transparent z-10"></div>
        <img
          src="/banner.png"
          alt="Executor Banner"
          className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700"
        />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#262729] to-transparent z-20"></div>
      </div>

      <div className="relative z-30 max-w-5xl mx-auto px-6 py-12 space-y-24">

        <section className="text-center space-y-8 -mt-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#15D4C5]/10 border border-[#15D4C5]/30 text-[#15D4C5] text-sm font-medium mb-4 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#15D4C5] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#15D4C5]"></span>
            </span>
            Community Active Now
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter bg-gradient-to-r from-white via-[#15D4C5] to-white bg-clip-text text-transparent animate-gradient">
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
              className="group relative px-8 py-4 bg-[#15D4C5] text-[#262729] font-bold rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(21,212,197,0.5)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                <DiscordLogo size={24} weight="fill" />
                Join Discord
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </a>
            
            <a
              href="#games"
              className="px-8 py-4 border border-gray-600 hover:border-[#15D4C5] text-gray-300 hover:text-[#15D4C5] font-semibold rounded-xl transition-all hover:scale-105"
            >
              Explore Games
            </a>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-[#15D4C5]/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-[#15D4C5]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <stat.icon size={32} className="text-[#15D4C5] mb-4" weight="duotone" />
              <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </section>

        <section className="relative">
          <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#15D4C5] to-transparent rounded-full"></div>
          <div className="pl-8 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
              <Target size={36} className="text-[#15D4C5]" weight="duotone" />
              Tentang Executor
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
              Executor berisi pemain dari berbagai latar belakang game kompetitif dan casual. Komunitas ini menekankan kerja sama tim, komunikasi yang baik, dan perkembangan skill secara bertahap. Setiap member memiliki peran dan kontribusi dalam membangun lingkungan yang aktif.
            </p>
          </div>
        </section>

        <section id="games" className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
              <GameController size={36} className="text-[#15D4C5]" weight="duotone" />
              Game yang Dimainkan
            </h2>
            <div className="hidden md:flex items-center gap-2 text-[#15D4C5] text-sm font-medium">
              <Lightning size={16} weight="fill" className="animate-pulse" />
              Multi-Game Community
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {games.map((game, index) => (
              <div 
                key={index}
                className="group relative p-6 rounded-xl bg-gray-800/30 border border-gray-700/30 hover:border-[#15D4C5]/50 hover:bg-gray-800/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#15D4C5]/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-[#15D4C5]/20 transition-all"></div>
                <div className="text-3xl mb-3">{game.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#15D4C5] transition-colors">
                  {game.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {game.desc}
                </p>
              </div>
            ))}
            
            <div className="p-6 rounded-xl border-2 border-dashed border-gray-700 flex flex-col items-center justify-center text-center hover:border-[#15D4C5]/50 hover:bg-[#15D4C5]/5 transition-all cursor-pointer group">
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">+</div>
              <h3 className="text-lg font-semibold text-gray-400 group-hover:text-[#15D4C5]">
                Dan masih banyak lagi
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                Kami memainkan game yang kami sukai
              </p>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6 p-8 rounded-2xl bg-gradient-to-br from-gray-800/30 to-transparent border border-gray-700/30">
            <h2 className="text-2xl font-bold flex items-center gap-3 text-[#15D4C5]">
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
                  <CaretRight size={20} className="text-[#15D4C5] mt-0.5 group-hover:translate-x-1 transition-transform" weight="bold" />
                  <span className="group-hover:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 p-8 rounded-2xl bg-gradient-to-br from-gray-800/30 to-transparent border border-gray-700/30">
            <h2 className="text-2xl font-bold flex items-center gap-3 text-[#15D4C5]">
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
                  <CaretRight size={20} className="text-[#15D4C5] mt-0.5 group-hover:translate-x-1 transition-transform" weight="bold" />
                  <span className="group-hover:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-800 to-gray-900 p-8 md:p-12 border border-gray-700/50">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#15D4C5]/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="w-12 h-12 rounded-xl bg-[#15D4C5]/20 flex items-center justify-center text-[#15D4C5]">
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
                    <div className="w-1.5 h-1.5 rounded-full bg-[#15D4C5]"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-center">
                <div className="text-center space-y-4">
                  <p className="text-gray-400">Follow kami untuk konten terbaru</p>
                  <div className="flex justify-center gap-4">
                    {[
                      { icon: TiktokLogo, color: "hover:text-[#15D4C5]", href: "https://www.tiktok.com/@executorroom" },
                      { icon: InstagramLogo, color: "hover:text-[#15D4C5]", href: "https://www.instagram.com/executorroom" },
                      { icon: YoutubeLogo, color: "hover:text-[#15D4C5]", href: "https://www.youtube.com/@executor-s" },
                    ].map((social, i) => (
                      <a
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center text-gray-400 ${social.color} transition-all hover:scale-110 hover:bg-gray-700 border border-gray-700 hover:border-[#15D4C5]/50`}
                      >
                        <social.icon size={24} weight="duotone" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center space-y-8 py-12">
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-[#15D4C5] via-[#15D4C5]/50 to-[#15D4C5]">
            <div className="bg-[#262729] rounded-xl px-8 py-6">
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                Siap Bergabung?
              </h2>
              <p className="text-gray-400 mb-6 max-w-lg mx-auto">
                Jadilah bagian dari komunitas gaming yang terstruktur dan konsisten. Bangun tim solid bersama Executor.
              </p>
              <a
                href="https://discord.gg/Ugs8ckJS2x"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#15D4C5] text-[#262729] font-bold rounded-xl hover:shadow-[0_0_30px_rgba(21,212,197,0.5)] transition-all hover:scale-105"
              >
                <DiscordLogo size={24} weight="fill" />
                Join Executor Now
              </a>
            </div>
          </div>
        </section>

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
                  className="text-gray-500 hover:text-[#15D4C5] transition-all hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={22} weight="duotone" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            © 2026 Executor. All rights reserved.
          </div>
        </footer>

      </div>
    </div>
  );
}