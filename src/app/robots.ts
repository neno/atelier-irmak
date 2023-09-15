import { MetadataRoute } from 'next'
import * as process from "process";

export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production';
  return {
    rules: {
      userAgent: '*',
      ...(isProduction
        ? { allow: '/' }
        : { disallow: '/' }),
    },
    sitemap: `${process.env.SITE_URL}/sitemap.xml`,
  }
}
