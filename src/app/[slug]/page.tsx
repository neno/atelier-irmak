import { fetchPageContentItemsBySlug } from '@/api';
import { PageContent } from '@/ui/PageContent';

async function Page({ params }: { params: { slug: string } }) {
  const pageContentItems = await fetchPageContentItemsBySlug(
    params.slug ?? '/'
  );

  // return <pre>{JSON.stringify(pageContentItems, null, 2)}</pre>;

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
