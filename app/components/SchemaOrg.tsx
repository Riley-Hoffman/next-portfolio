import { Thing, WithContext } from "schema-dts";

interface SchemaOrgProps<T extends Thing> {
  structuredData: WithContext<T>;
}

const SchemaOrg = <T extends Thing,>({ structuredData }: SchemaOrgProps<T>) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default SchemaOrg;