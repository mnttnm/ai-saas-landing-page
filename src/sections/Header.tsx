
import LogoIcon from "../assets/logo.svg";
import MenuIcon from "../assets/icon-menu.svg";
import { Button } from "@/components/Button";


const NavigationMenu = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-8 text-sm">
        <li className="text-white/70 hover:text-white transition">
          <a href="#">Features</a>
        </li>
        <li className="text-white/70 hover:text-white transition">
          <a href="#">Pricing</a>
        </li>
        <li className="text-white/70 hover:text-white transition">
          <a href="#">About Us</a>
        </li>
        <li className="text-white/70 hover:text-white transition">
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export const Header = () => {
  return (
    <header className="container backdrop-blur z-10 sticky top-0 py-4 flex justify-between items-center sm:border-b border-white/15 md:border md:rounded-lg md:border-white/15 md:mt-4 mx-auto">
      <div className="border  border-white/15 rounded-lg h-10 w-10 inline-flex justify-center items-center">
        <LogoIcon className="h-8 w-8" />
      </div>
      <NavigationMenu />
      <div className="flex gap-4 items-center">
        <Button label="Join waitlist" />
        <MenuIcon className="md:hidden" />
      </div>
    </header>
  );
};
