import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import { Button } from "@/components/Button";

export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto backdrop-blur">
          <div>
            <div className="border size-10 rounded-lg inline-flex justify-center items-center border-white/15">
              <LogoIcon className="size-8" />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8">
              <a
                href="#"
                className="text-sm font-medium text-gray-400 hover:text-white "
              >
                About
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:text-white text-gray-400"
              >
                Services
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:text-white text-gray-400"
              >
                Developers
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:text-white text-gray-400"
              >
                Projects
              </a>
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <Button>Get in Touch</Button>
            <MenuIcon className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};

// border [mask-image:linear-gradient(to_bottom,pink-500,transparent)]
