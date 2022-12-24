import { fetchPageContentItemsBySlug, fetchPageCollectionPaths } from '@/api';
import { PageContent } from '@/ui/PageContent';

async function Page({ params }: { params: { slug: string } }) {
  console.log(JSON.stringify(params));
  const pageContentItems = await fetchPageContentItemsBySlug(
    params.slug ?? 'home'
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

export async function generateStaticParams() {
  const data = await fetchPageCollectionPaths();
  const { pageCollection } = data;

  if (pageCollection) {
    const params = pageCollection.items.map(({ slug }) => ({
      slug,
    }));

    return params;
  }
}
