import { Github, Mail, Twitter, Linkedin } from "lucide-react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import profile from "@/assets/images/profile.png";
import { AnimatedText } from "@/components/animation/animated-text";
import MotionDiv from "@/components/animation/wrappers/motion-div";

const socialLinks = [
  { href: "https://www.linkedin.com/in/marcus-gamboa/", icon: Linkedin },
  { href: "https://github.com/mhgamboa", icon: Github },
  { href: "https://x.com/Marky__Mark__", icon: Twitter },
  { href: "mailto:marcus@marcusgamboa.com", icon: Mail },
];

export default function Profile() {
  return (
    <MotionDiv
      className="flex flex-col sm:flex-row items-center gap-4 mb-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
    >
      <MotionDiv
        className="w-24 h-24 rounded-full overflow-hidden border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
      >
        <Image
          src={profile}
          alt="Marcus Gamboa"
          className="w-full h-full object-cover"
          width={100}
          height={100}
        />
      </MotionDiv>
      <div className="text-center sm:text-left flex flex-col gap-2 sm:block">
        <AnimatedText className="text-2xl font-black">Marcus Gamboa</AnimatedText>
        <AnimatedText className="font-bold">Solopreneur &amp; Next.js Fanatic</AnimatedText>
        <div>
          <AnimatedText className="text-gray-800 dark:text-muted-foreground">
            Orem, Utah
          </AnimatedText>
        </div>
      </div>
      <MotionDiv
        className="flex justify-center sm:justify-end gap-3 w-full sm:w-auto mt-4 sm:mt-0"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        initial="hidden"
        animate="show"
      >
        {socialLinks.map((social, index) => (
          <MotionDiv
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <Link
              href={social.href}
              target="_blank"
              className="bg-white dark:bg-[#2a2a2a] p-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-0.5 hover:translate-x-0.5 transition-transform block"
            >
              <social.icon size={20} className="text-black dark:text-white" />
            </Link>
          </MotionDiv>
        ))}
      </MotionDiv>
    </MotionDiv>
  );
}
