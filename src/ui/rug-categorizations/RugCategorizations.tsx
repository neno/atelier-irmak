import { rugTranslations, RugTranslationsType } from 'public/locales/de/rug';
import { FC, Fragment } from 'react';

interface RugCategorizationsProps {
  categorizations: Record<string, string>;
}

export const RugCategorizations: FC<RugCategorizationsProps> = ({
  categorizations,
}) => {
  const translatedCategorizations = Object.keys(categorizations).map((key) => ({
    label: rugTranslations[key as keyof RugTranslationsType],
    value: categorizations[key],
  }));

  return (
    <aside>
      <h4 className=''>Tags</h4>
      <dl className='flex gap-2 flex-wrap items-center'>
        {translatedCategorizations.map(({ label, value }) => (
          <Fragment key={value}>
            <dt className='sr-only'>{label}</dt>
            <dd
              title={`${label}: ${value}`}
              className='py-1 px-2 text-primary rounded border border-primary'
            >
              {value}
            </dd>
          </Fragment>
        ))}
      </dl>
    </aside>
  );
};
