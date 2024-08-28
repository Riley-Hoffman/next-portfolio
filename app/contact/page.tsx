import { Metadata } from 'next';
import SchemaOrg from './components/SchemaOrg';
import { Form } from './components/Form';

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Contact Web Developer Riley Hoffman with the form on this page.',
    metadataBase: new URL('https://rileyhoffman.com/contact'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
      images: '/thumbnail.jpg',
        title: 'Contact',
        url: 'https://rileyhoffman.com/contact'
      },
}

export default function Contact() {
    return (
        <>   
            <SchemaOrg />
            <h1 className="text-center text-3xl leading-normal bg-[#eee2f3] border-b-2 mb-7 mt-0 py-10 px-5 gradient-border inverted md:text-5xl md:leading-normal contrast-more:bg-white" aria-live="polite">Contact Me</h1>
            <div className="max-w-screen-md p-[1.875rem_0_13vh]"> 
                <Form/>
            </div>
        </>
    )
}