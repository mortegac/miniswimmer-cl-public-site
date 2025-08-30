import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://miniswimmer.cl';
  
  const routes: MetadataRoute.Sitemap = [
    '',
    '/about',
    '/program',
    '/pricing',
    '/contact',
    '/privacy-policy',
    '/terms-and-conditions',
    '/servicios',
    '/alianzas',
    '/nosotros',
    '/valores',
    '/metodo',
    '/conoce-nuestras-sedes',
    '/swimming-lessons-in-broward',
    '/swimming-lessons-in-miami-dade',
    '/precios-y-valores-de-nuestros-servicios',
    '/politica-de-privacidad',
    '/terminos-y-condiciones-del-servicio',
    '/contacto',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
