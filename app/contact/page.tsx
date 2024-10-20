import { Metadata } from 'next';
import SchemaOrg from '../components/SchemaOrg';
import { Form } from './components/Form';

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Contact Web Developer Riley Hoffman with the form on this page.',
    metadataBase: new URL('https://rileyhoffman.com/contact'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
      images: 'https://storage.googleapis.com/rileyhoffmandotcom.appspot.com/thumbnail.jpg',
        title: 'Contact',
        url: 'https://rileyhoffman.com/contact/'
      },
};

export default function Contact() {
    return (
        <>   
            <SchemaOrg headline="Contact - Riley Hoffman - Web Developer" description="Contact Web Developer Riley Hoffman with the form on this page." image="https://storage.googleapis.com/rileyhoffmandotcom.appspot.com/thumbnail.jpg" datePublished="2024-07-04T09:25:01.340Z" />
            <h1 className="text-center text-3xl leading-normal bg-[#eee2f3] border-b-2 mb-7 mt-0 py-10 px-5 gradient-border inverted md:text-5xl md:leading-normal contrast-more:bg-white">Contact Me</h1>
            <div className="max-w-screen-md p-[1.875rem_0_13vh]"> 
                <Form/>
            </div>
        </>
    )
}