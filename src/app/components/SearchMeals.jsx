'use client';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const SearchMeals = () => {
  const [search, setSearch] = useState('');
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    const searchQuery = { search };
    const urlQuery = new URLSearchParams(searchQuery);
    const url = `${pathName}?${urlQuery}`;

    router.push(url);
  }, [search]);

  return (
    <div>
      <input
        type="text"
        className="text-black"
        onChange={e => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchMeals;
