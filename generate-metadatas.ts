// scripts/generate-metadatas.js
import fs from "node:fs";
import path from "node:path";

const blogDir = path.join(process.cwd(), "app", "n"); // Directory containing your MDX blog posts
const outputFile = path.join(process.cwd(), "app", "n", "index.ts"); // The output TypeScript file

/**
 * Recursively finds all files ending with .mdx in a directory.
 */
function getAllMdxFiles(dirPath: string) {
	let filesFound: string[] = [];
	// Read all entries (files and directories) in the current directory
	const entries = fs.readdirSync(dirPath);

	for (const entry of entries) {
		// Get the full path of the entry
		const fullPath = path.join(dirPath, entry);

		try {
			// Get the stats of the entry to check if it's a directory
			const stat = fs.statSync(fullPath);

			if (stat.isDirectory()) {
				// If it's a directory, recurse into it and concatenate the results
				filesFound = filesFound.concat(getAllMdxFiles(fullPath));
			} else {
				// If it's a file, check if it's an .mdx file
				if (entry.endsWith(".mdx")) {
					filesFound.push(fullPath);
				}
			}
		} catch (error) {
			// Handle potential errors like permission issues or broken symlinks
			if (error instanceof Error) {
				console.error(`Error accessing ${fullPath}: ${error.message}`);
			} else {
				console.error(`Unknown error accessing ${fullPath}`);
			}
		}
	}

	return filesFound;
}

async function generateMetadatas() {
	// Find all .mdx files using the recursive fs function
	const files = getAllMdxFiles(blogDir);

	console.log(
		`✨ Generating metadata from ${files.length} files in "${blogDir}"...`,
	);

	let content =
		"// this file is auto-generated, do not edit it directly. Go to `generate-metadatas.ts` to edit the script.\n";
	let counter = 0;

	for (const filePath of files) {
		// Get the relative path from the blog directory to use as the slug
		// e.g., 'post1.mdx' or 'category/post2.mdx' -> 'post1' or 'category/post2'
		const relativePath = path.relative(blogDir, filePath);
		content += `import { metadata as m${counter} } from './${relativePath}';\n`;
		counter++;
	}

	content += "\nconst rawMetadatas = [\n";
	for (let i = 0; i < counter; i++) {
		content += `\tm${i},\n`;
	}
	content += "];\n";

	// sorting metadatas by date
	content += `\nexport const metadatas = rawMetadatas.sort((a, b) => {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;
    return 0;
});\n`;

	// Write the content to the output file
	fs.writeFileSync(outputFile, content, "utf-8");

	console.log(
		`✨ Metadata successfully generated and written to "${outputFile}".`,
	);
}

// Execute the script
generateMetadatas().catch(console.error);
