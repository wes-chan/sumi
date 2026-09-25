import Link from "next/link";

const navLinks = [
  { href: "/quotes", label: "Quotes" },
  { href: "/filaments", label: "Filaments" },
  { href: "/settings", label: "Settings" },
];

export default function Nav() {
  return (
    <nav className="flex items-center gap-8 p-4 border-b border-line-strong">
      <Link href="/" className="text-2xl font-bold ">
        SUMI
      </Link>

      <ul className="flex gap-6">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-muted hover:text-ink hover:border-b-2  border-line-strong transition-colors duration-200"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
