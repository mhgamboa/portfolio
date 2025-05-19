import { Github, Mail, Twitter, Youtube } from "lucide-react";
import React from "react";
import Link from "next/link";

const socialLinks = [
  { href: "https://github.com/mhgamboa", icon: Github },
  { href: "https://x.com/Marky__Mark__", icon: Twitter },
  { href: "mailto:marcus@marcusgamboa.com", icon: Mail },
  // { href: "https://youtube.com/@marcusgamboa", icon: Youtube },
];

export default function Profile() {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <img
          src="/tech-entrepreneur-portrait.png"
          alt="Marcus Gamboa"
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h1 className="text-2xl font-black">Marcus Gamboa</h1>
        <p className="font-bold">Solopreneur & Next.js Fanatic</p>
      </div>
      <div className="ml-auto flex gap-3">
        {socialLinks.map((social, index) => (
          <Link
            key={index}
            href={social.href}
            target="_blank"
            className="bg-white dark:bg-[#2a2a2a] p-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-0.5 hover:translate-x-0.5 transition-transform"
          >
            <social.icon size={20} className="text-black dark:text-white" />
          </Link>
        ))}
      </div>
    </div>
  );
}
