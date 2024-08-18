import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";

export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none">
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto">
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
            <button className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-amber-500 to-pink-500 shadow-[0px_0px_12px_orange]">
              <div className="absolute inset ">
                <div className="border border-white/20 absolute inset [mask-image:linear-gradient(to_bottom,black,transparent)] "></div>
                <div className="border border-white/40 absolute inset [mask-image:linear-gradient(to_top,black,transparent)] "></div>
                <div className="absolute inset-0 shadow-[l0_0_10px_rgb(140,69,255,.7)_inset] "></div>
              </div>
              <span>Get in Touch</span>
            </button>
            <MenuIcon className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};

// border [mask-image:linear-gradient(to_bottom,pink-500,transparent)]
