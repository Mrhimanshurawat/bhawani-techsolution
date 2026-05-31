// components/Navbar.tsx
"use client";
import Link from "next/link";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-[#080C10] border-b border-yellow-800/30">
      <div className="font-serif text-xl font-bold text-white tracking-widest">
        BHAWANT <span className="text-yellow-400">ENTERPRISE</span>
      </div>
      <ul className="flex gap-8">
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-white/50 hover:text-yellow-400 transition-colors tracking-wide"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}