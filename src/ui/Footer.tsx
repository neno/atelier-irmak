import { NextImage } from "./NextImage";
import { Map } from "@/ui/map/Map";

export const Footer = () => {
  return (
    <div className="w-full relative bg-primary-dark text-white">
      <div className="mx-auto container lg:grid lg:grid-cols-2">
        <article className="footer-address px-4 py-12">
          <h3 className="my-8 text-3xl text-light">Adresse</h3>
          <a
            href="https://maps.app.goo.gl/xQi25HPjdyEMqgXZA"
            target="_blank"
            className="text-white hover:text-light"
            rel="noopener noreferrer"
            title="Auf Google Maps anzeigen"
          >
            <p
              className="my-8 leading-relaxed"
              itemScope
              itemProp="address"
              itemType="http://schema.org/PostalAddress"
            >
              <span itemProp="name">Atelier Irmak</span>
              <br />
              <span itemProp="streetAddress">Kramgasse 10</span>
              <br />
              <span itemProp="postalCode">3011</span>{" "}
              <span itemProp="addressLocality">Bern</span>
              <br />
              <span itemProp="addressCountry">Schweiz</span>
            </p>
          </a>

          <ul className="my-8 leading-relaxed">
            <li itemProp="email">
              <a
                href="mailto:info@atelier-irmak.ch"
                className="text-white hover:text-light underline underline-offset-4"
              >
                info@atelier-irmak.ch
              </a>
            </li>
            <li itemProp="phone">
              <a
                href="tel:+41313120604"
                className="text-white hover:text-light underline underline-offset-4"
              >
                Tel: +41 31 312 06 04
              </a>
            </li>
          </ul>
        </article>

        <article className="footer-address px-4 py-12">
          <h3 className="my-8 text-3xl text-light">Öffnungszeiten</h3>
          <ul>
            <li>
              <time itemProp="openingHours" dateTime="Mo 14:00-18:30">
                Montag 14:00 - 18:30
              </time>
            </li>
            <li>
              <time
                itemProp="openingHours"
                dateTime="Mo,Fr, 10:00-12:00,13:30-18:30"
              >
                Dienstag - Freitag: 10:00 - 12:00 und 13:30 - 18:30
              </time>
            </li>
            <li>
              <time itemProp="openingHours" dateTime="Sa 09:00-16:00">
                Samstag 10:00 - 16:00
              </time>
            </li>
          </ul>
        </article>
        {/* </div> */}
      </div>
    </div>
  );
};
