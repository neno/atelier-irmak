import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.NEXT_PUBLIC_VERCEL_URL && !process.env.NEXT_PUBLIC_VERCEL_URL.includes('vercel.app');
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
