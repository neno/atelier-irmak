import { fetchReferenceCollectionPaths, getReferenceBySlug } from '@/api';
import { DetailHeader } from '@/ui/DetailHeader';
import { LeadText } from '@/ui/LeadText';
import { RichText } from '@/ui/rich-text/RichText';
import { Container } from '@/ui/Container';
import { DefList } from '@/ui/DefList';
import { Slider } from '@/ui/slider/Slider';
import { Modal } from "@/ui/modal";
import {ReferenceGallery} from "@/ui/ReferenceGallery";


async function ReferencePage({ params }: { params: { slug: string } }) {
  if (!params.slug) {
    return null;
  }

  const reference = await getReferenceBySlug(params.slug);
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
              <ReferenceGallery galleryItems={galleryItems} />
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

export default ReferencePage;

export async function generateStaticParams() {
  const { referenceCollection } = await fetchReferenceCollectionPaths();

  return referenceCollection.items
    .filter(({ slug }) => !!slug)
    .map(({ slug }) => ({
      slug,
    }));
}
