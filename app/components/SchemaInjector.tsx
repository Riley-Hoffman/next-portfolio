import { Thing, WithContext } from "schema-dts";

interface SchemaInjectorProps<T extends Thing> {
  structuredData: WithContext<T>;
}

const SchemaInjector = <T extends Thing>({ structuredData }: SchemaInjectorProps<T>) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default SchemaInjector;
