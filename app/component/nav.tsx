import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex items-center gap-8 p-4 border-b border-line-strong">
      <Link href="/" className="text-2xl font-bold ">
        SUMI
      </Link>

      <ul className="flex gap-6">
        <li>
          <Link
            href="/quotes"
            className="text-muted hover:text-ink hover:border-b-2  border-line-strong transition-colors duration-200"
          >
            Quotes
          </Link>
        </li>
        <li>
          <Link
            href="/filaments"
            className="text-muted hover:text-ink hover:border-b-2  border-line-strong transition-colors duration-200"
          >
            Filaments
          </Link>
        </li>
        <li>
          <Link
            href="/settings"
            className="text-muted hover:text-ink hover:border-b-2  border-line-strong transition-colors duration-200"
          >
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
}
