'use client';

import { useState } from 'react';

import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi';

import { ExternalLink } from '@/components/ExternalLink';
import { Link } from '@/components/Link';

const NAV_LINKS = [
  {
    label: 'Home',
    url: '/',
  },
  {
    label: 'API',
    url: '/api',
  },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex flex-col bg-green-500">
      <div className="flex justify-between border-b-8 border-b-[#008938] bg-black px-4 py-3">
        <div className="flex items-center gap-4">
          <Image
            alt="Gov UK Logo"
            height={36}
            src={`${process.env.deployPath}/crown-logo.svg`}
            style={{ width: 'auto' }}
            width={36}
          />

          <ExternalLink url="https://environment.data.gov.uk/">
            <div className="text-xl text-white">
              <span className="font-bold">DEFRA</span>
              <span className="font-normal"> | Data Services Platform</span>
            </div>
          </ExternalLink>
        </div>

        <button className="sm:hidden" onClick={() => setIsOpen((prev) => !prev)}>
          <GiHamburgerMenu className="h-8 w-8 rounded border-2 p-1 text-white" />
        </button>
      </div>

      {/* Navigation used for non-small devices. */}
      <nav className="hidden gap-2 bg-white px-4 sm:flex">
        {NAV_LINKS.map((link) => (
          <span key={link.label} className="">
            <Link url={link.url}>{link.label}</Link>
          </span>
        ))}
      </nav>

      {/* Shown only on small devices and isOpen state is true. */}
      {isOpen ? (
        <nav className="bg-black transition-all duration-500 ease-in sm:hidden">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.label} className="border-b-1 p-2">
                <Link url={link.url}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
};
