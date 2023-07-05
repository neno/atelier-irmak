import { fetchPageContentItemsBySlug, fetchPageMetadataBySlug } from '@/api';
import { PageContent } from '@/ui/PageContent';
import { Metadata } from 'next'

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

  return {
    title: `${process.env.SITE_NAME} | ${page?.title}`,
    description: page?.description,
    openGraph: {
      title: page?.title,
      description: page?.description,
      url: params.slug,
      images: [
        {
          url: page?.ogImage?.url ?? `${process.env.SITE_URL}/images/og-image.png`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}
