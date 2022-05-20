import Link from 'next/link';

export const Nav = () => {
  return (
    <nav>
      <ul className='list-none flex'>
        <li>
          <Link href='/inspiration'>
            <a className='p-8'>Inspiration</a>
          </Link>
        </li>
        <li>
          <Link href='/referenzen'>
            <a className='p-8'>Referenzen</a>
          </Link>
        </li>
        <li>
          <Link href='/der-fliegende-teppich'>
            <a className='p-8'>Der fliegende Teppich</a>
          </Link>
        </li>
        <li>
          <Link href='/partner'>
            <a className='p-8'>Partner</a>
          </Link>
        </li>
        <li>
          <Link href='/ueber-uns'>
            <a className='p-8'>Über uns</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
