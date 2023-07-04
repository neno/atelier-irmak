import { Icon } from '../icon';
import { IconType } from '../icon/Icon.types';

export const CtaLinks = () => (
  <>
    <a
      aria-label='Rufen Sie uns an'
      className='hover:text-primary-light'
      href='tel:+41313120604'
    >
      <Icon
        iconName={IconType.Phone}
        width={36}
        height={36}
        className='md:h-12 md:w-12'
      />
    </a>
    <a
      aria-label='Kontaktieren Sie uns via E-Mail'
      className='hover:text-primary-light'
      href='mailto:info@atelier-irmak.ch'
    >
      <Icon
        iconName={IconType.Email}
        width={36}
        height={36}
        className='md:h-12 md:w-12'
      />
    </a>
  </>
);
