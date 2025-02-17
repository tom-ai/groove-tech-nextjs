import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: 'v6bmfrpk',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});
