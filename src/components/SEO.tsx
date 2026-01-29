import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonical?: string;
  type?: string;
  name?: string;
  noindex?: boolean;
}

const SEO = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  twitterTitle,
  twitterDescription,
  twitterImage,
  canonical,
  noindex,
  type = "website",
  name = "Bright Emmanuel Afia",
}: SEOProps) => {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Opengraph tags */}
      {ogTitle || title ? (
        <meta property="og:title" content={ogTitle || title} />
      ) : null}
      {ogDescription || description ? (
        <meta
          property="og:description"
          content={ogDescription || description}
        />
      ) : null}
      {ogImage ? <meta property="og:image" content={ogImage} /> : null}
      {ogUrl || canonical ? (
        <meta property="og:url" content={ogUrl || canonical} />
      ) : null}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={name} />

      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={name} />
      {twitterTitle || title ? (
        <meta name="twitter:title" content={twitterTitle || title} />
      ) : null}
      {twitterDescription || description ? (
        <meta
          name="twitter:description"
          content={twitterDescription || description}
        />
      ) : null}
      {twitterImage || ogImage ? (
        <meta name="twitter:image" content={twitterImage || ogImage} />
      ) : null}
    </Helmet>
  );
};

export default SEO;
