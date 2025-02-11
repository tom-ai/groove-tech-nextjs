import { PerformancePackage } from '@/app/types/Package';

async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) throw new Error('Failed to fetch data');

  return response.json();
}

export default async function Quote({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const performanceData = await fetchData<PerformancePackage>(
    `http://localhost:3000/api/packages/${slug}`
  );

  return (
    <>
      <h1>Package: {performanceData.name}</h1>
    </>
  );
}
