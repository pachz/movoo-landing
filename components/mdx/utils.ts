import fs from "fs";
import path from "path";

type Metadata = {
  title: string;
  publishedAt: string;
  updatedAt?: string;
  summary?: string;
  author?: string;
  authorImg?: string;
  kind?: string;
  parent?: string;
  rank?: string;
  section?: string;
  next?: string;
  prev?: string;
  slug?: string;
};

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  const frontMatterBlock = match![1];
  const content = fileContent.replace(frontmatterRegex, "").trim();
  const frontMatterLines = frontMatterBlock.trim().split("\n");
  const metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    metadata[key.trim() as keyof Metadata] = value;
  });

  return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = metadata.slug || path.basename(file, path.extname(file));
    const next = metadata.next;
    const prev = metadata.prev;
    return {
      metadata,
      slug,
      content,
      parent: metadata.parent,
      rank: metadata.rank || "99",
      section: metadata.section || "General",
      next,
      prev,
    };
  });
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), "content/blog"));
}

export function getDocPages() {
  return getMDXData(path.join(process.cwd(), "content/docs"));
}
