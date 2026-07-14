import Link from 'next/link';

export default function Button({ children, className = '', asLink, href }: { children: React.ReactNode; className?: string; asLink?: boolean; href?: string }) {
  const base = 'inline-flex items-center px-4 py-2 rounded-md text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary/30';
  if (asLink && href) {
    return (
      <Link href={href} className={`${base} ${className}`}>
        {children}
      </Link>
    );
  }
  return <button className={`${base} ${className}`}>{children}</button>;
}
