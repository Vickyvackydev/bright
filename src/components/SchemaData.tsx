import { useEffect } from "react";

interface SchemaDataProps {
  type?: "Person" | "WebSite" | "Organization";
  data: any;
}

const SchemaData = ({ type = "Person", data }: SchemaDataProps) => {
  useEffect(() => {
    const existingScript = document.getElementById("structured-data");
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.id = "structured-data";
    script.type = "application/ld+json";

    const schema = {
      "@context": "https://schema.org",
      "@type": type,
      ...data,
    };

    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById("structured-data");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [type, data]);

  return null;
};

export default SchemaData;
