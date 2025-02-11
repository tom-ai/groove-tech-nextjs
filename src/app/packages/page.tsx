import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import Link from 'next/link';
import { PerformancePackage } from '../types/Package';

async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) throw new Error('Failed to fetch data');

  return response.json();
}

export default async function Packages() {
  const performancePackages = await fetchData<PerformancePackage[]>(
    'http://localhost:3000/api/packages'
  );

  return (
    <main className="container">
      <header className="text-center">
        <h1>Performance Packages ({performancePackages.length})</h1>
        <p className="secondary">
          Saxophone entertainment for unforgettable events
        </p>
      </header>

      <div>
        {performancePackages.map((pkg) => (
          <article key={pkg.id}>
            <div className="grid">
              <img
                src={pkg.image_url}
                alt={pkg.name}
                className=""
                style={{ height: '240px', objectFit: 'cover' }}
              />
              <div>
                <h2>{pkg.name}</h2>
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
                    href={`/quote/${pkg.id}`}
                    className="button primary"
                    role="button"
                  >
                    Request Quote
                  </Link>
                </div>
                <h4>Features</h4>
                <ul>
                  {pkg.standout_features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <p>
                  Have a question?{' '}
                  <Link href={'mailto:contact@titoentertainment.co.uk'}>
                    Drop us a message!
                  </Link>
                </p>
              </div>
            </div>
            {/* <div> */}
            {/* <h4>Locations</h4>
              <div>
                {pkg.locations_served.map((location) => (
                  <span key={location} className="chip">
                    {location + ' '}
                  </span>
                ))}
              </div> */}
            {/* </div> */}
          </article>
        ))}
      </div>
    </main>
  );
}
