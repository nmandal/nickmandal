import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <p className="text-center text-base text-gray-400">
          <Link href="https://twitter.com/nick_mandal">
            <a>@nick_mandal</a>
          </Link>
        </p>
      </div>
    </footer>
  );
};
