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
				loaders: ["@svgr/webpack"],
				as: "*.js",
			},
		},
	},
	typescript: {
		ignoreBuildErrors: true,
	},
};

export default withMDX()(nextConfig);
