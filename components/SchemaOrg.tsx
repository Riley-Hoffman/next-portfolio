import { WebPage, WithContext } from 'schema-dts';

interface SchemaOrgProps {
  structuredData: WithContext<WebPage>;
}

const SchemaOrg: React.FC<SchemaOrgProps> = ({ structuredData }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default SchemaOrg;
