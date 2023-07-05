import { fetchPageContentItemsBySlug, fetchPageMetadataBySlug } from '@/api';
import { PageContent } from '@/ui/PageContent';
import { Metadata } from 'next'
import {createMetadata} from "@/lib/helpers";

async function Page({ params }: { params: { slug: string } }) {
  const pageContentItems = await fetchPageContentItemsBySlug(
    params.slug ?? '/'
  );

  if (pageContentItems) {
    return (
      <>
        {pageContentItems.map((item) => (
          <PageContent key={item.sys.id} pageContent={item} />
        ))}
      </>
    );
  }

  return null;
}

export default Page;

export async function generateMetadata({ params }: {params: {slug: string}}): Promise<Metadata> {
  const page = await fetchPageMetadataBySlug(
    params.slug ?? '/'
  );

  return createMetadata(
    `${process.env.SITE_NAME} | ${page?.title}`,
    page?.description,
    params.slug,
    page?.ogImage?.url
  );
}
