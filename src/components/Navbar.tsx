"use client";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
];

export function Navbar() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="flex items-center gap-8">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={(e) => scrollToSection(e, item.href)}
          className="text-neutral-600 dark:text-gray-400 hover:text-neutral-900 dark:hover:text-white transition-colors font-medium"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
