/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		API: process.env.API,
		API_KEY: process.env.API_KEY,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**',
				pathname: '/**',
			},
		],
	},
};

module.exports = nextConfig;
