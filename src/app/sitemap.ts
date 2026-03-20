import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://miniswimmer.cl';

  return [
    { url: `${baseUrl}`, lastModified: new Date('2026-03-20'), changeFrequency: 'weekly', priority: 1.0 },
    // Chilean location pages — high commercial intent
    { url: `${baseUrl}/clases-natacion-penalolen`, lastModified: new Date('2026-03-20'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/clases-natacion-maintencillo`, lastModified: new Date('2026-03-20'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/clases-natacion-vina-del-mar`, lastModified: new Date('2026-03-20'), changeFrequency: 'monthly', priority: 0.9 },
    // US location pages — high commercial intent
    { url: `${baseUrl}/swimming-lessons-in-miami-dade`, lastModified: new Date('2026-03-20'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/swimming-lessons-in-broward`, lastModified: new Date('2026-03-20'), changeFrequency: 'monthly', priority: 0.9 },
    // Core pages
    { url: `${baseUrl}/servicios`, lastModified: new Date('2026-03-20'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/precios-y-valores-de-nuestros-servicios`, lastModified: new Date('2026-03-20'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/pricing`, lastModified: new Date('2026-03-20'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/metodo`, lastModified: new Date('2026-03-20'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/program`, lastModified: new Date('2026-03-20'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/nosotros`, lastModified: new Date('2026-03-20'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: new Date('2026-03-20'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/alianzas`, lastModified: new Date('2026-03-20'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/conoce-nuestras-sedes`, lastModified: new Date('2026-03-20'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/valores`, lastModified: new Date('2026-03-20'), changeFrequency: 'monthly', priority: 0.7 },
    // Competitor comparison pages
    { url: `${baseUrl}/miniswimmer-vs-aqualuz`, lastModified: new Date('2026-03-20'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/miniswimmer-vs-salmon-swim`, lastModified: new Date('2026-03-20'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/miniswimmer-vs-color-splash`, lastModified: new Date('2026-03-20'), changeFrequency: 'monthly', priority: 0.8 },
    // Contact pages
    { url: `${baseUrl}/contacto`, lastModified: new Date('2026-03-20'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date('2026-03-20'), changeFrequency: 'monthly', priority: 0.7 },
    // Legal pages
    { url: `${baseUrl}/politica-de-privacidad`, lastModified: new Date('2026-03-01'), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date('2026-03-01'), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terminos-y-condiciones-del-servicio`, lastModified: new Date('2026-03-01'), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms-and-conditions`, lastModified: new Date('2026-03-01'), changeFrequency: 'yearly', priority: 0.3 },
    // registration and reagendamiento are noindex — excluded from sitemap
  ];
}
