import withMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	pageExtensions: ["ts", "tsx", "mdx"],
	experimental: {
		reactCompiler: true,
		mdxRs: true,
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

export default withMDX()(nextConfig);
