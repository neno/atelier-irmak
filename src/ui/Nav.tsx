"use client"

import { ILink } from '@/schema/types';
import Link from 'next/link';
import {FC, useState} from 'react';
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import clsxm from "@/lib/clsxm";

interface NavProps {
  items: ILink[];
}

export const Nav: FC<NavProps> = ({ items }) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav>
      <button onClick={toggleMenu} type="button" className={clsxm("inline-flex items-center justify-center rounded-md -mr-[0.5rem] p-2 text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white sm:hidden")}>
        <span className="sr-only">Open main menu</span>
        {open ? (
          <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
        ) : (
          <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
        )}
      </button>
      <ul className={clsxm('fixed inset-0 top-[60px] z-10 overflow-y-auto bg-white list-none font-medium sm:flex sm:static', {'hidden' : !open})}>
        {items.map(({ title, page, externalUrl }) => (
          <li key={title} className={clsxm('mt-4 px-4 sm:mt-0')}>
            <Link onClick={closeMenu} href={`${page?.slug ?? externalUrl}`} className='text-xl block sm:text-base py-2 border-b-2 border-transparent sm:hover:text-primary-dark sm:hover:border-primary-dark'>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
