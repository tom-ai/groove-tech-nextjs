import { NextRequest, NextResponse } from 'next/server';
import performancePackagesData from '@/data/performancePackages.json';

export async function GET(request: NextRequest) {
  return NextResponse.json(performancePackagesData);
}
