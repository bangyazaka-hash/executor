import {
  Globe,
  DiscordLogo,
  TiktokLogo,
  InstagramLogo,
  YoutubeLogo,
} from "phosphor-react";

export default function App() {
  const links = [
    { icon: <Globe size={22} />, label: "Our Website" },
    { icon: <DiscordLogo size={22} />, label: "Executor Community" },
    { icon: <TiktokLogo size={22} />, label: "TikTok" },
    { icon: <InstagramLogo size={22} />, label: "Instagram" },
    { icon: <YoutubeLogo size={22} />, label: "YouTube Channel" },
  ];

  return (
    <div className="min-h-screen bg-neutralDark text-white">
      {/* MAIN COLUMN */}
      <div className="w-full max-w-sm mx-auto px-4 py-10">

        {/* PROFILE */}
        <div className="text-center mb-8">
          <div
            className="
              w-20 h-20 mx-auto
              rounded-full
              bg-primary text-neutralDark
              flex items-center justify-center
              font-semibold text-xl
            "
          >
            E
          </div>

          <h1 className="mt-4 text-primary font-semibold text-lg tracking-wide">
            executor
          </h1>

          <p className="text-sm text-gray-400 mt-1">
            para encari nafkah
          </p>
        </div>

        {/* BUTTON LIST */}
        <div className="flex flex-col gap-4">
          {links.map((item, i) => (
            <button
              key={i}
              className="
                mx-auto
                w-[340px]
                flex items-center justify-center gap-3
                px-4 py-4 rounded-xl
                bg-neutralDark/90
                border border-primary/40
                text-primary font-medium
                shadow-md
                hover:bg-primary hover:text-neutralDark
                hover:shadow-[0_0_20px_#4DFFBE55]
                transition-all duration-200
              "
            >
              <div className="flex items-center justify-center gap-2">
                {item.icon}
                <span className="text-center">{item.label}</span>
              </div>
            </button>
          ))}
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-5 mt-8 text-primary">
          <Globe size={22} />
          <DiscordLogo size={22} />
          <TiktokLogo size={22} />
          <InstagramLogo size={22} />
          <YoutubeLogo size={22} />
        </div>

        {/* FOOTER */}
        <p className="text-center text-xs text-gray-500 mt-10">
          Join executor on Linktree today
        </p>
      </div>
    </div>
  );
}
