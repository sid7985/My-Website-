/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable static export for GitHub Pages
    output: 'export',

    // Images configuration
    images: {
        // Required for static export
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },

    // Trailing slash for GitHub Pages compatibility
    trailingSlash: true,
};

export default nextConfig;
