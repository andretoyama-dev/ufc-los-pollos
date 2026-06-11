import { Search } from "lucide-react";

const Header = () => {
  const leftNavItems = [
    { label: "EVENTOS", href: "#", active: false },
    { label: "RANKINGS", href: "#", active: true },
    { label: "ATLETAS", href: "#", active: false },
    { label: "NOTÍCIAS", href: "#", active: false },
  ];

  const rightNavItems = [
    { label: "CONECTE-SE", href: "#" },
    { label: "ONDE ASSISTIR", href: "#" },
    { label: "LOJA", href: "#" },
  ];

  return (
    <header className="bg-ufc-black text-white">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Left Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {leftNavItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`nav-link ${item.active ? "nav-link-active" : ""}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Logo */}
        <div className="flex-shrink-0">
          <span className="font-heading text-3xl md:text-4xl tracking-tighter italic font-black">
            UFC
          </span>
        </div>

        {/* Right Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {rightNavItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="nav-link">
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <button className="nav-link p-1">
              <Search className="w-5 h-5" />
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2">
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
      </nav>
    </header>
  );
};

export default Header;
