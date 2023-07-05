import { IconProps } from "../Icon/Icon";
import { FC, ForwardRefExoticComponent, SVGProps } from "react";

export interface ContactSection {
  headerText?: string;
  description: string;
  items: ContactItem[];
}

export const ContactType = {
  Email: "Email",
  Phone: "Phone",
  Location: "Location",
  Github: "Github",
  LinkedIn: "LinkedIn",
  Facebook: "Facebook",
  Twitter: "Twitter",
  Instagram: "Instagram",
} as const;

export type ContactType = (typeof ContactType)[keyof typeof ContactType];

export interface ContactItem {
  type: ContactType;
  text: string;
  href?: string;
}

export interface ContactValue {
  Icon: FC<IconProps> | ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref">>;
  srLabel: string;
}

export const contact: ContactSection = {
  headerText: "Get in touch.",
  description: "Send me a message, and be on the lookout for a confirmation email.",
  items: [
    {
      type: ContactType.Email,
      text: "marcus@marcusgamboa.com",
      href: "mailto:marcus@marcusgamboa.com",
    },
    {
      type: ContactType.Location,
      text: "Utah, USA",
      href: "https://www.google.com/maps/place/Utah",
    },
    {
      type: ContactType.Instagram,
      text: "@marky__mark___",
      href: "https://www.instagram.com/marky__mark___/",
    },
    {
      type: ContactType.Github,
      text: "mhgamboa",
      href: "https://github.com/mhgamboa",
    },
  ],
};
