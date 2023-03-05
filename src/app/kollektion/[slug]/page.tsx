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
    <ContainerVertical>
      <DetailHeader title={title} subtitle={subtitle} image={featuredImage} />
      <Container className='lg:my-16'>
        <LeadText leadText={excerpt} />
      </Container>
      <div className='w-full bg-gray'>
        <Container className='py-16'>
          <div
            className={clsxm(
              'flex flex-col gap-12 md:gap-16 lg:grid lg:grid-cols-12',
              'lg:grid lg:grid-cols-12 lg:gap-0'
            )}
          >
            <div className='lg:col-start-1 lg:col-end-8'>
              <ContainerVertical>
                <ContainerVertical className='max-w-xl mx-auto lg:max-w-full lg:mx-0 gap-12'>
                  <h2>Über diesen Teppichs</h2>
                  <div className='xl:max-w-2xl'>
                    <RichText content={description} />
                  </div>
                </ContainerVertical>
                <Container>
                  <SliderWithModal galleryItems={galleryItems} />
                </Container>
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
                <ContainerVertical
                  tag='aside'
                  className='flex flex-col gap-4 lg:gap-4'
                >
                  <h3>Kategorien</h3>
                  <ContainerVertical className='sm:grid sm:grid-cols-2 gap-8 lg:flex lg:gap-8'>
                    <Palette palette={palette} />
                    <Colors colors={colors} />
                    <RugCategorizations
                      categorizations={{
                        type,
                        age: age.name,
                        country: country.name,
                      }}
                    />
                  </ContainerVertical>
                </ContainerVertical>
              </ContainerVertical>
            </div>
          </div>
        </Container>
      </div>
    </ContainerVertical>
  );
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
