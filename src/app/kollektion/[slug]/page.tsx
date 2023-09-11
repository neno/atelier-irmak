import { fetchRugCollectionPaths, getRugBySlug } from '@/api';
import { DetailHeader } from '@/ui/detail-header/DetailHeader';
import { LeadText } from '@/ui/LeadText';
import { RichText } from '@/ui/rich-text/RichText';
import { Container } from '@/ui/Container';
import { ContainerVertical } from '@/ui/ContainerVertical';
import { DefList } from '@/ui/DefList';
import { SliderWithModal } from '@/ui/SliderWithModal';
import clsxm from '@/lib/clsxm';
import { Metadata } from 'next';
import { createMetadata, exhibitLocation, generateProductStructuredData } from '@/lib/helpers';

async function RugPage({ params }: { params: { slug: string } }) {
  if (!params.slug) {
    return null;
  }

  const rug = await getRugBySlug(params.slug);
  if (!rug) {
    return null;
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
    age,
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
  )

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
                        origin,
                        size,
                        dating,
                        location: exhibitedIn,
                      }}
                      sorting={['name', 'origin', 'size', 'dating', 'location']}
                    />
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
        type="application/ld+json"
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
  const rug = await getRugBySlug(params.slug);

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
