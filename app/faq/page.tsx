import { Metadata } from 'next';
import Link from 'next/link';
import SchemaOrg from '../../components/SchemaOrg';
import { Accordion } from './components/Accordion';

export const metadata: Metadata = {
    title: 'FAQ',
    description: 'Find the answers to my most frequently asked questions.',
    metadataBase: new URL('https://rileyhoffman.com/faq'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
      images: '/thumbnail.jpg',
        title: 'FAQ',
        url: 'https://rileyhoffman.com/faq'
      },
};

interface AccordionItem {
    question: string;
    answer: React.ReactElement;
}

const accordionItems: AccordionItem[] = [
    {
        question: "Are you available for freelance work?",
        answer: (
            <div><p>Absolutely! Feel free to <Link href="/contact">get in touch</Link> to discuss your project needs and pricing structure.</p></div>
        ),
    },
    {
        question: "What services do you offer?",
        answer: (
            <div><p>I offer a range of web services, including designing and building new websites, enhancing existing sites with new features or content, resolving errors, and performing accessibility remediations to ensure compliance with WCAG 2.2 standards.</p></div>
        ),
    },
    {
        question: "What technologies and tools do you use?",
        answer: (
            <div><p>Depending on your project&apos;s needs, I can work with various technologies including HTML, <span translate="no">React</span>, <span translate="no">Next.js</span>, Typescript, <span translate="no">Vue.js</span>, PHP, and custom WordPress themes. I adapt quickly to new systems and structures, ensuring seamless integration and efficiency.</p></div>
        ),
    },
    {
        question: "Do you offer ongoing support and maintenance?",
        answer: (
            <div><p>While the initial project cost does not cover support and maintenance, I am available for hire to provide these services as needed.</p></div>
        ),
    },
];

export default function Faq() {
    return (
        <>
            <SchemaOrg headline="FAQ - Riley Hoffman - Web Developer" description="Find the answers to my most frequently asked questions." image="/static/media/riley.d8092b303038937a099e.jpg" datePublished="2024-07-04T09:25:01.340Z" />
            <h1 className="text-center text-3xl leading-normal bg-[#eee2f3] border-b-2 mb-7 mt-0 py-10 px-5 gradient-border inverted md:text-5xl md:leading-normal contrast-more:bg-white" aria-live="polite">Frequently Asked Questions</h1>
            <div className="max-w-screen-md p-[1.875rem_0_13vh]">
                <Accordion items={accordionItems} label="Frequently Asked Questions" />
            </div>
        </>
    );
}
