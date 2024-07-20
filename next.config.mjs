/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    
    const fileLoaderRule = config.module.rules.find((rule) =>                 // Encuentra la regla existente que maneja las importaciones de SVG
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(                                                 
                                                                              // Vuelve a aplicar la regla existente, pero solo para importaciones de SVG que terminan en ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
                                                                              // Convierte todas las demás importaciones de *.svg en componentes React
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      }
    );

    fileLoaderRule.exclude = /\.svg$/i;                                       // Modifica la regla del cargador de archivos para ignorar *.svg, ya que ahora lo manejamos de otra manera.

    return config;
  },

  // Esta configuración permite importar SVG de dos maneras: como URLs (si terminan en ?url) y como componentes React (para todas las demás importaciones de SVG).
};

export default nextConfig;
