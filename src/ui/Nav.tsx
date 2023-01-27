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
  return (
    <nav>
      <button type="button" className={clsxm("inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white sm:hidden")}>
        <span className="sr-only">Open main menu</span>
        {open ? (
          <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
        ) : (
          <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
        )}
      </button>
      <ul className={clsxm('list-none font-medium hidden sm:flex')}>
        {items.map(({ title, page, externalUrl }) => (
          <li key={title}>
            <Link href={`${page?.slug ?? externalUrl}`} className='py-4 pl-8'>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
