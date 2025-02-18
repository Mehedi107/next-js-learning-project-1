'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
  const pathname = usePathname();

  if (pathname.includes('dashboard')) {
    return null;
  }

  return (
    <nav className="bg-purple-700 text-purple-100 p-5 flex justify-between items-center">
      <a href="#">Logo</a>

      <ul className="flex items-center gap-5">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          <Link href="/meals">Meals</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
