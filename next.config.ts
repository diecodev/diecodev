import createMdx from "@next/mdx";
import type { NextConfig } from "next";

const withMDX = createMdx({});

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "placehold.co",
				port: "",
				pathname: "/**",
			},
		],
	},
	/* config options here */
	pageExtensions: ["ts", "tsx", "mdx"],
	experimental: {
		reactCompiler: true,
		mdxRs: {
			mdxType: "gfm",
		},
	},
	turbopack: {
		rules: {
			"*.svg": {
				loaders: [
					{
						loader: "@svgr/webpack",
						options: {
							dimensions: false,
						},
					},
				],
				as: "*.js",
			},
		},
	},
};

export default withMDX(nextConfig);
