import { WebPage, WithContext } from 'schema-dts';

const SchemaOrg: React.FC = () => {
  const structuredData: WithContext<WebPage> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    headline: 'Accessibility - Riley Hoffman - Web Developer',
    description:
      "As a dedicated web developer, I am committed to creating an accessible and inclusive website experience for all users.",
    image: '/static/media/riley.d8092b303038937a099e.jpg',
    datePublished: '2024-07-04T09:25:01.340Z',
    author: {
      '@type': 'Person',
      name: 'Riley Hoffman',
      url: 'https://rileyhoffman.com/',
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
