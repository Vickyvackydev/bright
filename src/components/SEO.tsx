import { useEffect } from "react";

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
}: SEOProps) => {
  useEffect(() => {
    // Update title
    if (title) {
      document.title = title;
    }

    // Update Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && description) {
      metaDescription.setAttribute("content", description);
    }

    // Update Meta Keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords && keywords) {
      metaKeywords.setAttribute("content", keywords);
    }

    // Update Canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      if (!linkCanonical) {
        linkCanonical = document.createElement("link");
        linkCanonical.setAttribute("rel", "canonical");
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute("href", canonical);
    }

    // Update OG Title
    const metaOgTitle = document.querySelector('meta[property="og:title"]');
    if (metaOgTitle && (ogTitle || title)) {
      metaOgTitle.setAttribute("content", ogTitle || title || "");
    }

    // Update OG Description
    const metaOgDescription = document.querySelector(
      'meta[property="og:description"]',
    );
    if (metaOgDescription && (ogDescription || description)) {
      metaOgDescription.setAttribute(
        "content",
        ogDescription || description || "",
      );
    }

    // Update OG Image
    const metaOgImage = document.querySelector('meta[property="og:image"]');
    if (metaOgImage && ogImage) {
      metaOgImage.setAttribute("content", ogImage);
    }

    // Update OG URL
    const metaOgUrl = document.querySelector('meta[property="og:url"]');
    if (metaOgUrl && (ogUrl || canonical)) {
      metaOgUrl.setAttribute("content", ogUrl || canonical || "");
    }

    // Update Twitter Title
    const metaTwitterTitle = document.querySelector(
      'meta[name="twitter:title"]',
    );
    if (metaTwitterTitle && (twitterTitle || title)) {
      metaTwitterTitle.setAttribute("content", twitterTitle || title || "");
    }

    // Update Twitter Description
    const metaTwitterDescription = document.querySelector(
      'meta[name="twitter:description"]',
    );
    if (metaTwitterDescription && (twitterDescription || description)) {
      metaTwitterDescription.setAttribute(
        "content",
        twitterDescription || description || "",
      );
    }

    // Update Twitter Image
    const metaTwitterImage = document.querySelector(
      'meta[name="twitter:image"]',
    );
    if (metaTwitterImage && (twitterImage || ogImage)) {
      metaTwitterImage.setAttribute("content", twitterImage || ogImage || "");
    }
  }, [
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
  ]);

  return null;
};

export default SEO;
