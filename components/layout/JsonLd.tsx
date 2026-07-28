interface JsonLdProps {
  data: Record<string, unknown>;
}

/**
 * Renders a single JSON-LD <script> tag. Pass any schema.org object shape.
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
