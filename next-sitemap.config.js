module.exports = {
  siteUrl: "https://conf2026.sciwork.dev",
  ...(process.env.OUTPUTDIR && { outDir: process.env.OUTPUTDIR }),
  generateRobotsTxt: true,
};
