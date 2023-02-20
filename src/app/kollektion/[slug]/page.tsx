import { fetchRugCollectionPaths, getRugBySlug } from '@/api';
import { DetailHeader } from '@/ui/DetailHeader';
import { LeadText } from '@/ui/LeadText';
import { RichText } from '@/ui/rich-text/RichText';
import { Container } from '@/ui/Container';
import { DefList } from '@/ui/DefList';
import { SliderWithModal } from '@/ui/SliderWithModal';

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
    origin,
    size,
    age,
    featuredImage,
    galleryCollection: { items: galleryItems },
  } = rug;

  return (
    <>
      <DetailHeader title={title} image={featuredImage} />
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
            <h2 className='sm:col-start-3 sm:col-end-13 pb-12'>{subtitle}</h2>
            <div className='sm:col-start-3 sm:col-end-9'>
              <RichText content={description} />
              <SliderWithModal galleryItems={galleryItems} />
            </div>
            <div className='sm:col-start-10 sm:col-end-13 mt-16 sm:mt-0'>
              <div className='bg-primary text-white px-16 py-8'>
                <DefList
                  items={{ name, origin, size, age }}
                  sorting={['name', 'origin', 'size', 'age']}
                />
              </div>
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
