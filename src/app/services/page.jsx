import Link from 'next/link';
import React from 'react';

const ServicesPage = () => {
  return (
    <div>
      <h1>Services page</h1>
      <ul>
        <Link className="block" href="/services/1">
          Dynamic route: 1
        </Link>
        <Link className="block" href="/services/2">
          Dynamic route: 2
        </Link>
        <Link className="block" href="/services/3">
          Dynamic route: 3
        </Link>
      </ul>
    </div>
  );
};

export default ServicesPage;
