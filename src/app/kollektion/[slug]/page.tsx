import { fetchRugCollectionPaths, getRugBySlug } from '@/api';
import { DetailHeader } from '@/ui/detail-header/DetailHeader';
import { LeadText } from '@/ui/LeadText';
import { RichText } from '@/ui/rich-text/RichText';
import { Container } from '@/ui/Container';
import { ContainerVertical } from '@/ui/ContainerVertical';
import { DefList } from '@/ui/DefList';
import { SliderWithModal } from '@/ui/SliderWithModal';
import { Palette } from '@/ui/palette/Palette';
import { Colors } from '@/ui/colors/Colors';
import { RugCategorizations } from '@/ui/rug-categorizations/RugCategorizations';
import clsxm from '@/lib/clsxm';
import { Metadata } from 'next';
import {createMetadata} from "@/lib/helpers";

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
    featuredImage,
    palette,
    colors,
    galleryCollection: { items: galleryItems },
  } = rug;
  const size = `${length} x ${width} cm`;

  return (
    <ContainerVertical className=''>
      <DetailHeader title={title} subtitle={subtitle} image={featuredImage} />
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
                  <h2>Über diesen Teppichs</h2>
                  <RichText content={description} />
                </ContainerVertical>
              </ContainerVertical>
            </div>
            <div className='lg:col-start-9 lg:col-end-13'>
              <ContainerVertical>
                <aside className='bg-primary text-white px-8 py-8'>
                  <h3 className='sr-only'>Zusammenfassung</h3>
                  <DefList
                    items={{ name, origin, size, dating }}
                    sorting={['name', 'origin', 'size', 'dating']}
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
      <div className='w-full bg-gray'>
        <Container className='py-8 sm:py-16'>
          <ContainerVertical tag='aside' className='gap-4 md:gap-8'>
            <h3>Kategorien</h3>
            <div className='flex flex-col gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-16'>
              <Colors colors={colors} />
              <Palette palette={palette} />
              <RugCategorizations
                categorizations={{
                  type,
                  age: age.name,
                  country: country.name,
                }}
              />
            </div>
          </ContainerVertical>
        </Container>
      </div>
    </ContainerVertical>
  );
}

export default RugPage;

export async function generateMetadata({ params }: {params: {slug: string}}): Promise<Metadata> {
  const rug = await getRugBySlug(params.slug);

  return createMetadata(
    `${rug?.title} | ${process.env.SITE_NAME}`,
    rug?.description,
    params.slug,
    rug?.ogImage?.url
  );
}

export async function generateStaticParams() {
  const { rugCollection } = await fetchRugCollectionPaths();

  return rugCollection.items
    .filter(({ slug }) => !!slug)
    .map(({ slug }) => ({
      slug,
    }));
}