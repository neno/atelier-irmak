import { fetchRugCollectionPaths, getRugBySlug } from '@/api';
import { DetailHeader } from '@/ui/DetailHeader';
import { LeadText } from '@/ui/LeadText';
import { RichText } from '@/ui/rich-text/RichText';
import { Container } from '@/ui/Container';
import { DefList } from '@/ui/DefList';
import { SliderWithModal } from '@/ui/SliderWithModal';
import { Palette } from '@/ui/palette/Palette';
import { Colors } from '@/ui/colors/Colors';
import { RugCategorizations } from '@/ui/rug-categorizations/RugCategorizations';

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
    <>
      <DetailHeader title={title} subtitle={subtitle} image={featuredImage} />
      <Container className='sm:py-16'>
        <div className='grid sm:grid-cols-12'>
          <div className='col-start-3 col-end-11 pb-16'>
            <LeadText leadText={excerpt} />
          </div>
        </div>
      </Container>
      <div className='w-full bg-gray'>
        <Container className='py-16'>
          <div className='grid sm:grid-cols-12'>
            <div className='sm:col-start-3 sm:col-end-9'>
              <h2 className='pb-12'>Beschreibung des Teppichs</h2>
              <div>
                <RichText content={description} />
                <SliderWithModal galleryItems={galleryItems} />
              </div>
            </div>

            <div className='sm:col-start-10 sm:col-end-13 mt-16 sm:mt-0 flex flex-col gap-8'>
              <aside className='bg-primary text-white px-8 py-8'>
                <h3 className='sr-only'>Steckbrief</h3>
                <DefList
                  items={{ name, origin, size, dating }}
                  sorting={['name', 'origin', 'size', 'dating']}
                />
              </aside>
              <aside className='flex flex-col gap-4'>
                <h3>Kategorien</h3>
                <div className='flex flex-col gap-4 '>
                  <Palette palette={palette} />
                  <Colors colors={colors} />
                  <RugCategorizations
                    categorizations={{
                      type,
                      age: age.name,
                      country: country.name,
                    }}
                  />
                </div>
              </aside>
            </div>
          </div>
        </Container>
      </div>
    </>
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
