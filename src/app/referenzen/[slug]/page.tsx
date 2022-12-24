import { fetchReferenceCollectionPaths, getReferenceBySlug } from '@/api';
import { DetailHeader } from '@/ui/DetailHeader';
import { LeadText } from '@/ui/LeadText';
import { RichText } from '@/ui/rich-text/RichText';
import { Container } from '@/ui/Container';
import { DefList } from '@/ui/DefList';
import { NextImage } from '@/ui/NextImage';

async function Page({ params }: { params: { slug: string } }) {
  const reference = await getReferenceBySlug(params.slug ?? '/');
  if (!reference) {
    return null;
  }

  const {
    description,
    definition,
    detailImage,
    excerpt,
    galleryItems,
    subtitle,
    title,
  } = reference;

  return (
    <>
      <DetailHeader title={title} image={galleryItems[0]} />
      <Container className='py-16'>
        <div className='grid grid-cols-12'>
          <div className='col-start-3 col-end-11 pb-16'>
            <LeadText leadText={excerpt} />
          </div>
        </div>
      </Container>
      <div className='w-full bg-gray'>
        <Container className='py-16'>
          <div className='grid grid-cols-12'>
            <h2 className='col-start-3 col-end-13 pb-12'>{subtitle}</h2>
            <div className='col-start-3 col-end-9'>
              <RichText content={description} />
              <ul className='py-16 grid grid-cols-4 gap-4 lg:gap-8'>
                {galleryItems.map(({ url, description, width, height }) => (
                  <li className='relative aspect-square' key={url}>
                    <NextImage
                      src={url}
                      alt={description}
                      width={width}
                      height={height}
                      className='w-full h-full object-cover object-bottom'
                      sizes='200px'
                      // sizes='(min-width: 640px) 30vw, (min-width: 1280px) 500px, 100vw'
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div className='col-start-10 col-end-13'>
              <div className='bg-primary text-white px-16 py-8'>
                <DefList
                  items={definition}
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

export default Page;

// export async function generateStaticParams() {
//   const { referenceCollection } = await fetchReferenceCollectionPaths();

//   return referenceCollection.items.map(({ slug }) => ({
//     slug,
//   }));
// }
