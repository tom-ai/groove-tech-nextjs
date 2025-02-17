import Link from 'next/link';
import { type SanityDocument } from 'next-sanity';
import { client } from '@/sanity/client';
import imageUrlBuilder from '@sanity/image-url';

import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

const PACKAGES_QUERY = `*[
    _type == 'package'
]|order(from_price asc){_id, slug, title, description, image, from_price, features}`;

// configure the image
const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function Packages() {
  const packages = await client.fetch<SanityDocument[]>(
    PACKAGES_QUERY,
    {},
    options
  );

  return (
    <main className="container">
      <header className="text-center">
        <h1>Performance Packages ({packages.length})</h1>
        <p className="secondary">
          Saxophone entertainment for unforgettable events
        </p>
      </header>

      <div>
        {packages.map((pkg) => (
          <article key={pkg._id}>
            <div className="grid">
              <img
                src={urlFor(pkg.image)?.width(550).height(310).url()}
                alt={pkg.name}
                className=""
                style={{ height: '240px', objectFit: 'cover' }}
              />
              <div>
                <h2>{pkg.title}</h2>
                <p className="lead">{pkg.description}</p>
                <div>
                  <h3>
                    From{' '}
                    {new Intl.NumberFormat('en-GB', {
                      style: 'currency',
                      currency: 'GBP',
                    }).format(pkg.from_price)}
                  </h3>
                  <small>Including VAT & travel*</small>
                  <br />
                  <Link
                    href={`/quote/${pkg.slug.current}`}
                    className="button primary"
                    role="button"
                  >
                    Request Quote
                  </Link>
                </div>
                <h4>Features</h4>
                <ul>
                  {pkg.features.map((feature: string, id: string) => (
                    <li key={id}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
