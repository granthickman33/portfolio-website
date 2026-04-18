import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

const contentDir = path.join(process.cwd(), 'content', 'case-studies');

export async function generateStaticParams() {
  const files = fs.readdirSync(contentDir);
  return files.map((file) => ({
    slug: file.replace(/\.mdx$/, ''),
  }));
}

async function getCaseStudy(slug: string) {
  const filePath = path.join(contentDir, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const source = fs.readFileSync(filePath, 'utf8');
  const { content, frontmatter } = await compileMDX<{ title: string; summary: string; tags: string[] }>({
    source,
    options: { parseFrontmatter: true },
  });

  return { content, frontmatter, slug };
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getCaseStudy(params.slug);
  if (!post) {
    return {
      title: 'Not Found',
    };
  }
  return {
    title: `${post.frontmatter.title} | Grant Hickman`,
  };
}

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const post = await getCaseStudy(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-4">{post.frontmatter.title}</h1>
      <p className="text-xl text-gray-400 mb-8">{post.frontmatter.summary}</p>
      <div className="flex flex-wrap gap-2 mb-8">
        {post.frontmatter.tags.map((tag) => (
          <span key={tag} className="inline-block bg-indigo-500 text-white text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
            {tag}
          </span>
        ))}
      </div>
      {post.content}
    </article>
  );
}
