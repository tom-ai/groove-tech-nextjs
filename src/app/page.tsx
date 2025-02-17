import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main>
        <header>
          <h1>Explosive entertainment for your event</h1>
          <p>Let Groove Machine create your perfect night!</p>
          <Link href={'/packages'} className="btn">
            <button className="secondary outline contrast">Packages</button>
          </Link>
        </header>
        <section>
          <h2></h2>
        </section>
      </main>
    </>
  );
}
