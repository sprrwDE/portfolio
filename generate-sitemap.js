const fs = require('fs');
const urls = [
  '/'
];
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map(url => `
    <url>
      <loc>https://kai-schulz.dev${url}</loc>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>`).join('')}
</urlset>`;
fs.writeFileSync('sitemap.xml', sitemapContent);
console.log('Sitemap erfolgreich erstellt.');
