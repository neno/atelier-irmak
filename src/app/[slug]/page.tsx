import { fetchPageContentItemsBySlug, fetchPageCollectionPaths } from '@/api';
import { PageContent } from '@/ui/PageContent';

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

// export async function generateStaticParams() {
//   const { pageCollection } = await fetchPageCollectionPaths();

//   return pageCollection.items.map(({ slug }) => ({
//     slug,
//   }));
// }
