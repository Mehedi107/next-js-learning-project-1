'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const ContactPage = () => {
  const isLoggedIn = true;
  const router = useRouter();
  const handleNavigation = () => {
    if (isLoggedIn) {
      router.push('/contact/address');
    } else {
      router.push('/');
    }
  };
  return (
    <div>
      <p>Contact page</p>
      <p>
        <Link href="/contact/address">Address link</Link>
      </p>

      <button type="button" onClick={handleNavigation}>
        Address logic link
      </button>
    </div>
  );
};

export default ContactPage;
