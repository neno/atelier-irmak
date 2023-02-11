import Image from 'next/image';
import { NextImage } from './NextImage';
import clsxm from '@/lib/clsxm';

export const Footer = () => {
  return (
    <div
      className={clsxm(
        'w-full relative bg-primary-dark text-white min-h-[300px]'
      )}
    >
      <div
        className={clsxm(
          'lg:absolute lg:top-0 lg:right-0 lg:w-[50%] lg:h-[100%]'
        )}
      >
        <NextImage
          src='/images/map-irmak-blue.jpg'
          alt='Karte'
          width={2598}
          height={1748}
          className='w-full h-full object-cover object-center'
          sizes='50vw'
        />
      </div>
      <div className={clsxm('mx-auto container lg:grid lg:grid-cols-2')}>
        <div
          className={clsxm('footer-address px-4 py-12')}
          itemScope
          itemType='https://schema.org/LocalBusiness'
          data-pos='46.9480637,7.4517377'
          data-street-view
        >
          <article>
            <h3 className={clsxm('my-8 text-3xl text-light')}>Adresse</h3>
            <p
              className={clsxm('my-8 leading-relaxed')}
              itemScope
              itemProp='address'
              itemType='http://schema.org/PostalAddress'
            >
              <span itemProp='name'>Atelier Irmak</span>
              <br />
              <span itemProp='streetAddress'>Kramgasse 10</span>
              <br />
              <span itemProp='postalCode'>3011</span>{' '}
              <span itemProp='addressLocality'>Bern</span>
              <br />
              <span itemProp='addressCountry'>Schweiz</span>
            </p>

            <ul className={clsxm('my-8 leading-relaxed')}>
              <li itemProp='email'>
                <a
                  href='mailto:info@atelier-irmak.ch'
                  className='text-white hover:text-light underline'
                >
                  info@atelier-irmak.ch
                </a>
              </li>
              <li itemProp='phone'>
                <a
                  href='tel:+41313120604'
                  className='text-white hover:text-light underline'
                >
                  Tel: +41 31 312 06 04
                </a>
              </li>
            </ul>
          </article>

          <article>
            <h3 className={clsxm('my-8 text-3xl text-light')}>
              Öffnungszeiten
            </h3>
            <ul>
              <li>
                <time itemProp='openingHours' dateTime='Mo 14:00-18:30'>
                  Montag 14:00 - 18:30
                </time>
              </li>
              <li>
                <time
                  itemProp='openingHours'
                  dateTime='Mo,Fr, 10:00-12:00,13:30-18:30'
                >
                  Dienstag - Freitag: 10:00 - 12:00 und 13:30 - 18:30
                </time>
              </li>
              <li>
                <time itemProp='openingHours' dateTime='Sa 09:00-16:00'>
                  Samstag 09:00 - 16:00
                </time>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  );
};
