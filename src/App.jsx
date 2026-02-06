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
    <div className="min-h-screen grid-bg text-white">
      <div className="w-full max-w-sm mx-auto px-4 py-10">

        {/* HEADER */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 mx-auto rounded-full bg-primary text-neutralDark flex items-center justify-center font-semibold text-xl">
            E
          </div>
          <h1 className="mt-4 text-primary font-semibold text-lg tracking-wide">
            executor
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            para pencari nafkah
          </p>
        </div>

        {/* LINKS (TANPA GRID) */}
        <div className="bg-neutralDark rounded-3xl py-8">
          <div className="flex flex-col space-y-8">
            {links.map((item, i) => (
              <div
                key={i}
                className="mx-auto w-[340px] bg-white rounded-full shadow-lg"
              >
                <button className="w-full px-6 py-5 flex items-center justify-center gap-3 rounded-full text-black font-medium">
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* SOCIALS */}
        <div className="flex justify-center gap-6 mt-12 text-primary">
          <Globe size={22} />
          <DiscordLogo size={22} />
          <TiktokLogo size={22} />
          <InstagramLogo size={22} />
          <YoutubeLogo size={22} />
        </div>

        <p className="text-center text-xs text-gray-500 mt-12">
          Join executor on Linktree today
        </p>
      </div>
    </div>
  );
}
