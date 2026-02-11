import {
  Globe,
  DiscordLogo,
  TiktokLogo,
  InstagramLogo,
  YoutubeLogo,
} from "phosphor-react";

export default function App() {
  const links = [
    { icon: <Globe size={20} />, label: "Our Website" },
    { icon: <DiscordLogo size={20} />, label: "Executor Community" },
    { icon: <TiktokLogo size={20} />, label: "TikTok" },
    { icon: <InstagramLogo size={20} />, label: "Instagram" },
    { icon: <YoutubeLogo size={20} />, label: "YouTube Channel" },
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

        <div className="flex justify-center gap-6 mt-10 text-neutral-300">
          <Globe size={22} />
          <DiscordLogo size={22} />
          <TiktokLogo size={22} />
          <InstagramLogo size={22} />
          <YoutubeLogo size={22} />
        </div>

        <p className="text-center text-xs text-neutral-500 mt-10">
          Join executor on Linktree today
        </p>
      </div>
    </div>
  );
}
