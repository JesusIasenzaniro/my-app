/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    reactStrictMode: true,
    images: {
        domains: ['v5.airtableusercontent.com'],
    },
};

module.exports = nextConfig;
