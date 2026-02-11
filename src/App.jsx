import {
  Globe,
  DiscordLogo,
  TiktokLogo,
  InstagramLogo,
  YoutubeLogo,
} from "phosphor-react";

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">

      <div className="w-full h-56 md:h-72 overflow-hidden">
        <img
          src="/banner.png"
          alt="Executor Banner"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-20">

        <section className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
            Executor
          </h1>
          <h2 className="text-xl text-neutral-300">
            Gaming community yang aktif dan berkembang.
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Executor adalah komunitas kecil yang sedang merintis dan membangun tim yang solid. Komunitas ini menjadi ruang bagi pemain yang ingin bermain bersama secara konsisten dan terarah.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">
            Tentang Executor
          </h2>
          <p className="text-neutral-400">
            Executor berisi pemain dari berbagai latar belakang game kompetitif dan casual. Komunitas ini menekankan kerja sama tim, komunikasi yang baik, dan perkembangan skill secara bertahap. Setiap member memiliki peran dan kontribusi dalam membangun lingkungan yang aktif.
          </p>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">
            Game yang Dimainkan
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-neutral-400">

            <div>
              <h3 className="text-white font-medium">PUBG Mobile</h3>
              <p>Battle royale berbasis squad dengan fokus pada strategi rotasi dan koordinasi tim.</p>
            </div>

            <div>
              <h3 className="text-white font-medium">Mobile Legends</h3>
              <p>MOBA 5v5 dengan pembagian role dan fokus pada peningkatan rank.</p>
            </div>

            <div>
              <h3 className="text-white font-medium">Valorant</h3>
              <p>FPS taktis yang menekankan strategi, kontrol area, dan kerja sama tim.</p>
            </div>

            <div>
              <h3 className="text-white font-medium">Free Fire</h3>
              <p>Battle royale dengan tempo cepat dan permainan agresif.</p>
            </div>

            <div>
              <h3 className="text-white font-medium">Minecraft</h3>
              <p>Sandbox survival dengan proyek pembangunan bersama dalam satu server komunitas.</p>
            </div>

            <div>
              <h3 className="text-white font-medium">Clash of Clans</h3>
              <p>Game strategi berbasis clan war dengan partisipasi aktif dalam setiap perang.</p>
            </div>

          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">
            Aktivitas Komunitas
          </h2>
          <ul className="list-disc list-inside text-neutral-400 space-y-2">
            <li>Mabar rutin setiap minggu.</li>
            <li>Event internal komunitas.</li>
            <li>Diskusi strategi dan meta game.</li>
            <li>Dokumentasi gameplay melalui media sosial.</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">
            Perkembangan Komunitas
          </h2>
          <ul className="list-disc list-inside text-neutral-400 space-y-2">
            <li>Member aktif yang terus bertambah.</li>
            <li>Beberapa game aktif dimainkan setiap minggu.</li>
            <li>Event internal yang berjalan secara berkala.</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">
            Konten dan Media
          </h2>
          <ul className="list-disc list-inside text-neutral-400 space-y-2">
            <li>Highlight pertandingan.</li>
            <li>Cuplikan momen permainan.</li>
            <li>Dokumentasi event komunitas.</li>
            <li>Update aktivitas melalui TikTok, Instagram, dan YouTube.</li>
          </ul>
        </section>

        <section className="space-y-6 text-center">
          <h2 className="text-2xl font-semibold">
            Identitas Executor
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Executor berkembang sebagai komunitas gaming yang terstruktur dan konsisten. Fokus utama adalah membangun tim yang solid serta menciptakan lingkungan bermain yang aktif dan suportif.
          </p>
        </section>
        
        <section className="space-y-6 text-center">
          <h2 className="text-2xl font-semibold">
            Join Executor on  Discord now!
          </h2>
        </section>

        <div className="flex justify-center gap-6 pt-10">

          <a
            href="https://executorroom.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition transform hover:scale-110"
          >
            <Globe size={22} />
          </a>

          <a
            href="https://discord.gg/Ugs8ckJS2x"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-indigo-400 transition transform hover:scale-110"
          >
            <DiscordLogo size={22} />
          </a>

          <a
            href="https://www.tiktok.com/@executorroom?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-pink-400 transition transform hover:scale-110"
          >
            <TiktokLogo size={22} />
          </a>

          <a
            href="https://www.instagram.com/executorroom/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-rose-400 transition transform hover:scale-110"
          >
            <InstagramLogo size={22} />
          </a>

          <a
            href="https://www.youtube.com/@executor-s"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-red-500 transition transform hover:scale-110"
          >
            <YoutubeLogo size={22} />
          </a>

        </div>


      </div>
    </div>
  );
}
