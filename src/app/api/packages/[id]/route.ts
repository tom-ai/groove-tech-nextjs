import { NextRequest, NextResponse } from 'next/server';
import performancePackagesData from '@/data/performancePackages.json';
import { SearchParams } from 'next/dist/server/request/search-params';

// Helpful how to https://stackoverflow.com/questions/77399683/what-is-the-right-way-to-do-get-all-items-or-by-a-specific-id-in-nextjs-13-4

export async function GET(
  request: NextRequest,
  { params }: { params: SearchParams }
) {
  console.log(params);
  const id = params.id;

  const packageData = performancePackagesData.find((x) => x.id === id);

  if (!packageData) {
    return NextResponse.json({ error: 'Package not found' }, { status: 404 });
  }

  return NextResponse.json(packageData);
}
