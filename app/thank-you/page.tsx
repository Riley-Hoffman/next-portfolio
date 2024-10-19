import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Thank You',
    description: 'Thank you for contacting Riley Hoffman - Web Developer.',
    robots: 'noindex',
    metadataBase: new URL('https://rileyhoffman.com/thank-you'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
      images: 'https://firebasestorage.googleapis.com/v0/b/rileyhoffmandotcom.appspot.com/o/thumbnail.jpg',
        title: 'Thank You',
        url: 'https://rileyhoffman.com/thank-you/'
      },
}

export default function ThankYou()  {

  return (
    <>
      <section className="pb-16">
        <h1 className="text-center text-3xl leading-normal bg-[#eee2f3] border-b-2 mb-7 mt-0 py-10 px-5 gradient-border inverted md:text-5xl md:leading-normal contrast-more:bg-white">Thank You</h1>
        <div className="max-w-screen-xl p-[15vh_0_20vh] text-center">
            <p className="text-5xl">Thank you for contacting me. <span className="block text-4xl mt-10">I will get back to you as soon as possible.</span></p>
        </div>
      </section>
    </>
  );
};