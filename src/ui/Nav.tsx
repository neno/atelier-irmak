"use client"

import { ILink } from '@/schema/types';
import Link from 'next/link';
import {FC, useState} from 'react';
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import clsxm from "@/lib/clsxm";
import {usePathname, useRouter} from 'next/navigation';

interface NavProps {
  items: ILink[];
}

export const Nav: FC<NavProps> = ({ items }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleMenu = () => {
    setOpen(!open);
  };

  const onLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string | undefined) => {
    e.preventDefault();
    setOpen(false);
    if (url) {
      router.push(url)
      window.scroll(0, 0)
    }
  };

  return (
    <nav>
      <button onClick={toggleMenu} type="button" className={clsxm("inline-flex items-center justify-center rounded-md -mr-[0.5rem] p-2 text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white lg:hidden")}>
        <span className="sr-only">Open main menu</span>
        {open ? (
          <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
        ) : (
          <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
        )}
      </button>
      <ul className={clsxm('fixed inset-0 top-[5.4375rem] md:top-[6.5625rem] lg:top-[8.5625rem] overflow-y-auto bg-white list-none font-medium lg:flex lg:static', {'hidden' : !open})}>
        {items.map(({ title, page, externalUrl }) => (
          <li key={title} className={clsxm('mt-4 lg:px-4 lg:mt-0')}>
            <a onClick={(e) => onLinkClick(e, page?.slug ?? externalUrl)} href={`${page?.slug ?? externalUrl}`} className={clsxm('text-xl block lg:text-base p-4 lg:px-0 lg:py-2 border-b-2 border-transparent lg:hover:text-primary-light ', pathname?.includes(page?.slug as string) && 'bg-primary text-white lg:bg-transparent lg:!text-primary-dark lg:border-primary-dark')}>
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
