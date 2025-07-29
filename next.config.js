const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  images: {
    domains: ["localhost", "127.0.0.1", "sawaai.lon1.digitaloceanspaces.com", "sawaai.cdn.lon1.digitaloceanspaces.com"],
  },
};

module.exports = withMDX(nextConfig);
