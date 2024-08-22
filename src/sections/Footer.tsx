import LogoIcon from "../assets/logo.svg";
import XIcon from "../assets/social-x.svg";
import InstagramIcon from "../assets/social-instagram.svg";
import YoutubeIcon from "../assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container flex flex-col gap-8 lg:flex-row lg:justify-between lg:items-center px-5">
        <div className="flex gap-4 items-center lg:flex-1">
          <LogoIcon className="h-8 w-8" />
          <h2>AI Startup Landing Page</h2>
        </div>
        <nav className="lg:flex-1 lg:justify-center">
          <ul className="flex flex-col lg:flex-row gap-5 lg:gap-7 text-xs">
            <li className="text-white/70 hover:text-white transition">
              <a href="#">Developers</a>
            </li>
            <li className="text-white/70 hover:text-white transition">
              <a href="#">Company</a>
            </li>
            <li className="text-white/70 hover:text-white transition">
              <a href="#">Blog</a>
            </li>
            <li className="text-white/70 hover:text-white transition">
              <a href="#">Changelog</a>
            </li>
          </ul>
        </nav>
        <div className="flex justify-between items-center lg:flex-1 lg:justify-end">
          <div className="flex gap-4">
            <XIcon className="h-6 w-6 text-white/70  hover:text-white transition" />
            <YoutubeIcon className="h-6 w-6 text-white/70  hover:text-white transition" />
            <InstagramIcon className="h-6 w-6 text-white/70  hover:text-white transition" />
          </div>
          <p className="text-white/70 text-xs md:text-sm transition hidden">
            © 2024, All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
