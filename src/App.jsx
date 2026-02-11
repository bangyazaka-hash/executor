import {
  Globe,
  DiscordLogo,
  TiktokLogo,
  InstagramLogo,
  YoutubeLogo,
} from "phosphor-react";

export default function App() {
  const links = [
    {
      icon: <Globe size={20} />,
      label: "Our Website",
      url: "https://executorroom.vercel.app",
    },
    {
      icon: <DiscordLogo size={20} />,
      label: "Executor Community",
      url: "https://discord.gg/Ugs8ckJS2x",
    },
    {
      icon: <TiktokLogo size={20} />,
      label: "TikTok",
      url: "https://www.tiktok.com/@executorroom?is_from_webapp=1&sender_device=pc",
    },
    {
      icon: <InstagramLogo size={20} />,
      label: "Instagram",
      url: "https://www.instagram.com/executorroom/",
    },
    {
      icon: <YoutubeLogo size={20} />,
      label: "YouTube Channel",
      url: "https://www.youtube.com/@executorroom",
    },
  ];


  return (
    <div className="min-h-screen bg-neutral-950 text-white flex justify-center">
      <div className="w-full max-w-sm px-4 py-10">

        <div className="text-center mb-10">
          <h1 className="text-lg font-semibold tracking-wide">
            executor
          </h1>
          <p className="text-sm text-neutral-400 mt-1">
            para pencari nafkah
          </p>
        </div>

        <div className="bg-neutral-900 rounded-3xl p-6 space-y-4">
          {links.map((item, i) => (
            <button
              key={i}
              className="w-full flex items-center justify-center gap-3 py-4 rounded-full bg-white text-black font-medium
                         hover:bg-neutral-200 active:scale-95 transition"
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        <div className="flex justify-center gap-6 mt-10">
          <a
            href="https://executorroom.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition transform hover:scale-110"
          >
            <Globe size={22} />
          </a>

          <a
            href="https://discord.gg/Ugs8ckJS2x"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-indigo-400 transition transform hover:scale-110"
          >
            <DiscordLogo size={22} />
          </a>

          <a
            href="https://www.tiktok.com/@executorroom?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-pink-400 transition transform hover:scale-110"
          >
            <TiktokLogo size={22} />
          </a>

          <a
            href="https://www.instagram.com/executorroom/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-rose-400 transition transform hover:scale-110"
          >
            <InstagramLogo size={22} />
          </a>

          <a
            href="https://www.youtube.com/@executorroom"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-red-500 transition transform hover:scale-110"
          >
            <YoutubeLogo size={22} />
          </a>
        </div>


        <p className="text-center text-xs text-neutral-500 mt-10">
          Join executor on Discord now!
        </p>
      </div>
    </div>
  );
}
