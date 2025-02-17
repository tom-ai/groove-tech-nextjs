import { PerformancePackage } from '@/app/types/Package';
import { client } from '@/sanity/client';
import { SanityDocument } from 'next-sanity';

const PACKAGE_QUERY = `*[_type == 'package' && slug.current == $slug][0]`;

const options = { next: { revalidate: 30 } };

export default async function Quote({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const pkg = await client.fetch<SanityDocument>(
    PACKAGE_QUERY,
    await params,
    options
  );

  console.log(pkg);

  return (
    <>
      <h1>{pkg.title}</h1>
      <p>{pkg.description}</p>
    </>
  );
}
