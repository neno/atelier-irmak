import { fetchPageContentItemsBySlug, fetchPageMetadataBySlug } from '@/api';
import { PageContent } from '@/ui/PageContent';
import {createMetadata} from "@/lib/helpers";
import {IMetadata} from "@/schema/types";

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

export async function generateMetadata({ params }: {params: {slug: string}}): Promise<IMetadata> {
  const metadata = await fetchPageMetadataBySlug(
    params.slug ?? '/'
  );

  return createMetadata(
    {...metadata, slug : params.slug}
  );
}
