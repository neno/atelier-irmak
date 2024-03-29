import {
  fetchPageCollectionPaths,
  fetchPageContentItemsBySlug,
  fetchPageMetadataBySlug,
} from '@/api';
import { PageContent } from '@/ui/PageContent';
import {createMetadata} from "@/lib/helpers";
import {IMetadata} from "@/schema/types";
import {notFound} from "next/navigation";

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

  notFound();
}

export async function generateMetadata({ params }: {params: {slug: string}}): Promise<IMetadata | undefined> {
  const metadata = await fetchPageMetadataBySlug(
    params.slug ?? '/'
  );

  if (metadata) {
    return createMetadata(
      {...metadata, slug : params.slug}
    );
  }

  return undefined;
}

export default Page;

export async function generateStaticParams() {
  const { pageCollection } = await fetchPageCollectionPaths();

  return pageCollection.items
    .filter(({ slug }) => !!slug)
    .map(({ slug }) => ({
      slug,
    }));
}
