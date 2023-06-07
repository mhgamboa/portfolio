import { FC, memo } from "react";

import GithubIcon from "../components/Icon/GithubIcon";
import InstagramIcon from "../components/Icon/InstagramIcon";
import LinkedInIcon from "../components/Icon/LinkedInIcon";
import StackOverflowIcon from "../components/Icon/StackOverflowIcon";
import TwitterIcon from "../components/Icon/TwitterIcon";
import { IconProps } from "../components/Icon/Icon";

interface Social {
  label: string;
  Icon: FC<IconProps>;
  href: string;
}

const socialLinks: Social[] = [
  { label: "Github", Icon: GithubIcon, href: "https://github.com/mhgamboa" },
  {
    label: "Stack Overflow",
    Icon: StackOverflowIcon,
    href: "https://stackoverflow.com/users/12718916/mgamboa",
  },
  { label: "LinkedIn", Icon: LinkedInIcon, href: "https://www.linkedin.com/in/marcus-gamboa/" },
  { label: "Instagram", Icon: InstagramIcon, href: "https://www.instagram.com/marky__mark___/" },
  { label: "Twitter", Icon: TwitterIcon, href: "https://twitter.com/Marky__Mark__" },
];

const Socials = memo(() => {
  return (
    <>
      {socialLinks.map(({ label, Icon, href }) => (
        <a
          aria-label={label}
          className="-m-1.5 rounded-md p-1.5 transition-all duration-300 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500  sm:-m-3 sm:p-3"
          href={href}
          key={label}
          target="_blank"
        >
          <Icon className="h-5 w-5 align-baseline sm:h-6 sm:w-6" />
        </a>
      ))}
    </>
  );
});

Socials.displayName = "Socials";
export default Socials;
