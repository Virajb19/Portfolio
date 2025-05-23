/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */

/** @type {import("next").NextConfig} */
const config = {
    images: {
        remotePatterns: [
        {
            hostname: "avatars.githubusercontent.com"
        }, 
        {
            hostname: "lh3.googleusercontent.com"
        },
        {
            hostname: 'external-content.duckduckgo.com'
        },
        { hostname: 'images.seeklogo.com'}
    ]
    },
    typescript: {
        ignoreBuildErrors: true
    },
    eslint: {
        ignoreDuringBuilds: true
    }
};

export default config;