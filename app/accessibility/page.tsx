import type { Metadata } from 'next';
import Link from 'next/link';
import SchemaOrg from '../components/SchemaOrg';

export const metadata: Metadata = {
    title: 'Accessibility',
    description: 'As a dedicated web developer, I am committed to creating an accessible and inclusive website experience for all users.',
    metadataBase: new URL('https://rileyhoffman.com/accessibility'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
      images: '/thumbnail.jpg',
        title: 'Accessibility',
        url: 'https://rileyhoffman.com/accessibility'
      },
}

export default function Accessibility() {
    return (
        <>     
            <SchemaOrg headline="Accessibility - Riley Hoffman - Web Developer" description="As a dedicated web developer, I am committed to creating an accessible and inclusive website experience for all users." image="/static/media/riley.d8092b303038937a099e.jpg" datePublished="2024-07-04T09:25:01.340Z" />     
            <h1 className="text-center text-3xl leading-normal bg-[#eee2f3] border-b-2 mb-7 mt-0 py-10 px-5 gradient-border inverted md:text-5xl md:leading-normal contrast-more:bg-white" aria-live="polite">Accessibility</h1>
            <div className="max-w-screen-md p-[1.875rem_0_13vh]"> 
                <h2>My Commitment</h2>
                <p>As a dedicated web developer, I am committed to creating an accessible and inclusive website experience for all users. I continuously strive to improve the user experience by adhering to and exceeding the accessibility standards outlined by the Web Content Accessibility Guidelines (WCAG).</p>
                <h2>Third-Party Content</h2>
                <p>While I prioritize accessibility when selecting tools and content, I may link to content from third-party developers. Please note that I do not control or assume responsibility for the content, features, or applications provided by these third parties.</p>
                <h2>Contact Me</h2>
                <p>Your feedback is invaluable in helping me enhance the accessibility of my website. If you encounter any difficulties accessing any part of the site, please feel free to <Link href="/contact">reach out to me</Link>.</p>
            </div>
        </>
    )
}