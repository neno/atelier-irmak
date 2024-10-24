import { fetchRugCollectionPaths, getRugBySlug } from 'src/api';
import { DetailHeader } from '@/ui/detail-header/DetailHeader';
import { LeadText } from '@/ui/LeadText';
import { RichText } from '@/ui/rich-text/RichText';
import { Container } from '@/ui/Container';
import { ContainerVertical } from '@/ui/ContainerVertical';
import { DefList } from '@/ui/DefList';
import { SliderWithModal } from '@/ui/SliderWithModal';
import clsxm from '@/lib/clsxm';
import { Metadata } from 'next';
import {
  createMetadata,
  exhibitLocation,
  generateProductStructuredData,
} from '@/lib/helpers';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import { Button } from '@/ui/Button';
import { Icon } from '@/ui/icon';
import { IconType } from '@/ui/icon/Icon.types';

async function RugPage({ params }: { params: { slug: string } }) {
  if (!params.slug) {
    return null;
  }

  const rug = await getRugBySlug(params.slug, draftMode().isEnabled);
  if (!rug) {
    notFound();
  }

  const {
    title,
    subtitle,
    excerpt,
    description,
    name,
    type,
    origin,
    country,
    length,
    width,
    dating,
    location,
    room,
    placing,
    featuredImage,
    palette,
    colors,
    galleryCollection: { items: galleryItems },
  } = rug;
  const size = `${length} x ${width} cm`;
  const exhibitedIn = exhibitLocation(location, room, placing);

  const jsonLd = generateProductStructuredData(
    title,
    featuredImage.url,
    name,
    origin,
    size,
    dating
  );

  return (
    <>
      <ContainerVertical className='pb-16'>
        <DetailHeader
          title={title}
          subtitle={subtitle}
          image={featuredImage}
          exhibitedIn={exhibitedIn}
        />
        <Container className='lg:my-16'>
          <LeadText leadText={excerpt} />
        </Container>
        <div className='w-full bg-white'>
          <Container className=''>
            <div
              className={clsxm(
                'flex flex-col gap-12 md:gap-16 lg:grid lg:grid-cols-12',
                'lg:grid lg:grid-cols-12 lg:gap-0'
              )}
            >
              <div className='lg:col-start-1 lg:col-end-8'>
                <ContainerVertical>
                  <ContainerVertical>
                    <h2>Über diesen {type}</h2>
                    <RichText content={description} />
                  </ContainerVertical>
                </ContainerVertical>
              </div>
              <div className='lg:col-start-9 lg:col-end-13'>
                <ContainerVertical>
                  <aside className='bg-primary text-white px-8 py-8'>
                    <h3 className='sr-only'>Zusammenfassung</h3>
                    <DefList
                      items={{
                        name,
                        origin: origin.name,
                        size,
                        dating,
                        location: exhibitedIn,
                      }}
                      sorting={['name', 'origin', 'size', 'dating', 'location']}
                    />
                  </aside>
                  <aside className='bg-gray p-8 text-primary'>
                    <h3 className='sr-only'>Kontaktieren Sie uns</h3>
                    <p>
                      Möchten Sie erfahren, wie so ein {type} in Ihrem Zuhause
                      wirkt?
                    </p>
                    <p>
                      Dann zögern Sie nicht, uns zu kontaktieren. Wir stehen Ihnen gerne für eine Beratung zur Verfügung.
                    </p>
                    <p className='flex gap-4'>
                      <Button
                        path='mailto:atelier-irmak.ch'
                        className='mt-8 flex items-center gap-2 hover:bg-primary-light'
                      >
                        <Icon
                          iconName={IconType.At}
                          width={36}
                          height={36}
                          className='md:h-12 md:w-12'
                        />
                        <span>Email</span>
                      </Button>
                      <Button
                        path='tel:+41313120604'
                        className='mt-8 flex items-center gap-2 hover:bg-primary-light'
                      >
                        <Icon
                          iconName={IconType.Telephone}
                          width={36}
                          height={36}
                          className='md:h-12 md:w-12'
                        />
                        <span>Telefon</span>
                      </Button>
                    </p>
                  </aside>
                </ContainerVertical>
              </div>
            </div>
          </Container>
        </div>
        <Container>
          <SliderWithModal galleryItems={galleryItems} />
        </Container>
      </ContainerVertical>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const rug = await getRugBySlug(params.slug, draftMode().isEnabled);

  return createMetadata({
    ...rug,
    description: `${rug?.name}, ${rug?.dating}`,
    slug: params.slug,
  });
}

export default RugPage;

export async function generateStaticParams() {
  const { rugCollection } = await fetchRugCollectionPaths();

  return rugCollection.items
    .filter(({ slug }) => !!slug)
    .map(({ slug }) => ({
      slug,
    }));
}
