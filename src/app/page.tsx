import Page from '@/app/[slug]/page';
import {IMetadata} from "@/schema/types";
import {fetchPageMetadataBySlug} from "@/api";
import {createMetadata} from "@/lib/helpers";

export default Page;

export async function generateMetadata({ params }: {params: {slug: string}}): Promise<IMetadata> {
  const metadata = await fetchPageMetadataBySlug(
    '/'
  );

  return createMetadata(
    {...metadata, slug : params.slug}
  );
}
