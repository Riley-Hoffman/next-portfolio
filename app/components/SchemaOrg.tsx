import { WebPage, WithContext } from 'schema-dts';

const SchemaOrg: React.FC = () => {
  const structuredData: WithContext<WebPage> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    headline: 'Riley Hoffman - Web Developer',
    description:
      "I'm a front-end developer with a passion for building accessible and responsive web applications. I quickly learn new concepts and love adding to my growing skill set. I am a proactive problem solver who enjoys writing future-proof, understandable code that fosters collaboration with other developers.",
    image: '/static/media/riley.d8092b303038937a099e.jpg',
    datePublished: '2024-07-04T09:25:01.340Z',
    author: {
      '@type': 'Person',
      name: 'Riley Hoffman',
      url: 'https://rileyhoffman.com',
    },
  };

  return (
    <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
  />
  );
};

export default SchemaOrg;
