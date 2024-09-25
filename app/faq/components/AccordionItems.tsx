import Link from 'next/link';

interface AccordionItem {
    question: string;
    answer: React.ReactElement;
}

const accordionItems: AccordionItem[] = [
    {
        question: "Are you available for freelance work?",
        answer: (
            <p>Absolutely! Feel free to <Link href="/contact">get in touch</Link> to discuss your project needs and pricing structure.</p>
        ),
    },
    {
        question: "What services do you offer?",
        answer: (
            <p>I offer a range of web services, including designing and building new websites, enhancing existing sites with new features or content, resolving errors, and performing accessibility remediations to ensure compliance with WCAG 2.2 standards.</p>
        ),
    },
    {
        question: "What technologies and tools do you use?",
        answer: (
            <p>Depending on your project&apos;s needs, I can work with various technologies including HTML, <span translate="no">React</span>, <span translate="no">Next.js</span>, Typescript, <span translate="no">Vue.js</span>, PHP, and custom WordPress themes. I adapt quickly to new systems and structures, ensuring seamless integration and efficiency.</p>
        ),
    },
    {
        question: "Do you offer ongoing support and maintenance?",
        answer: (
            <p>While the initial project cost does not cover support and maintenance, I am available for hire to provide these services as needed.</p>
        ),
    },
];

export const questions = accordionItems.map(item => item.question);
export const answers = accordionItems.map(item => item.answer);