import { MetadataRoute } from "next";
import verticalConfig from "@/lib/vertical.config";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = `https://${verticalConfig.domain}`;
  // Phase 5.1 indexing gate — see verticalConfig.indexingGated.
  if (verticalConfig.indexingGated) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
    };
  }
  return {
    rules: [
      { userAgent: "*", allow: "/" },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
