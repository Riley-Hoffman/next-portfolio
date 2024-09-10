import React from 'react';
import { WebPage, WithContext } from 'schema-dts';

interface SchemaOrgProps {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
}

const SchemaOrg: React.FC<SchemaOrgProps> = ({ headline, description, image, datePublished }) => {
  const structuredData: WithContext<WebPage> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    headline: headline,
    description: description,
    image: image,
    datePublished: datePublished,
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
