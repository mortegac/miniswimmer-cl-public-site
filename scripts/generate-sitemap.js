const fs = require('fs');
const path = require('path');

console.log('🔍 Generando sitemap automáticamente...');

// Función para escanear directorios y encontrar páginas
function scanPages(dir, basePath = '') {
  const routes = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        const routePath = path.join(basePath, item);
        routes.push(routePath);
        routes.push(...scanPages(fullPath, routePath));
      } else if (item === 'page.tsx' && basePath) {
        routes.push(basePath);
      }
    }
  } catch (error) {
    console.warn(`⚠️ Error escaneando directorio ${dir}:`, error);
  }
  
  return routes;
}

// Función para limpiar y formatear rutas
function cleanRoutes(routes) {
  return routes
    .map(route => route.replace(/\\/g, '/'))
    .filter(route => route && route !== '.')
    .map(route => route.startsWith('/') ? route : `/${route}`)
    .filter((route, index, arr) => arr.indexOf(route) === index);
}

// Generar sitemap
function generateSitemap() {
  const baseUrl = 'https://miniswimmer.cl';
  const pagesDir = path.join(process.cwd(), 'src/app/(site)');
  
  console.log(`📁 Escaneando directorio: ${pagesDir}`);
  
  const scannedRoutes = scanPages(pagesDir);
  const cleanedRoutes = cleanRoutes(scannedRoutes);
  
  const staticRoutes = [
    '',
    '/about',
    '/program',
    '/pricing',
    '/contact',
    '/privacy-policy',
    '/terms-and-conditions',
  ];
  
  const allRoutes = [...staticRoutes, ...cleanedRoutes].filter((route, index, arr) => arr.indexOf(route) === index);
  
  const sitemapEntries = allRoutes.map((route) => {
    let priority = 0.8;
    let changeFrequency = 'monthly';
    
    if (route === '' || route === '/') {
      priority = 1.0;
      changeFrequency = 'weekly';
    } else if (route.includes('servicios') || route.includes('pricing') || route.includes('precios')) {
      priority = 0.9;
      changeFrequency = 'weekly';
    } else if (route.includes('contact') || route.includes('contacto')) {
      priority = 0.7;
      changeFrequency = 'monthly';
    } else if (route.includes('privacy') || route.includes('terms') || route.includes('politica') || route.includes('terminos')) {
      priority = 0.5;
      changeFrequency = 'yearly';
    }
    
    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency,
      priority,
    };
  });
  
  sitemapEntries.sort((a, b) => (b.priority || 0) - (a.priority || 0));
  
  // Generar XML del sitemap
  const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.map(entry => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastModified}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
  
  // Guardar sitemap.xml en public/
  const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemapXML, 'utf8');
  
  console.log(`✅ Sitemap generado exitosamente con ${sitemapEntries.length} rutas`);
  console.log(`📄 Guardado en: ${sitemapPath}`);
  
  // Mostrar rutas encontradas
  console.log('\n Rutas incluidas en el sitemap:');
  allRoutes.forEach(route => {
    console.log(`   ${route}`);
  });
}

// Ejecutar generación
generateSitemap();
