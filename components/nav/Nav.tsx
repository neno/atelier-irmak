import Link from 'next/link';

export const Nav = () => {
  return (
    <nav className='invisible md:visible'>
      <ul className='text-irmak-blue list-none flex font-title text-2xl'>
        <li>
          <Link href='/inspiration'>
            <a className='p-4'>Inspiration</a>
          </Link>
        </li>
        <li>
          <Link href='/referenzen'>
            <a className='p-4'>Referenzen</a>
          </Link>
        </li>
        <li>
          <Link href='/der-fliegende-teppich'>
            <a className='p-4'>Der fliegende Teppich</a>
          </Link>
        </li>
        <li>
          <Link href='/partner'>
            <a className='p-4'>Partner</a>
          </Link>
        </li>
        <li>
          <Link href='/ueber-uns'>
            <a className='p-4'>Über uns</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
