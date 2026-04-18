import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { compileMDX } from 'next-mdx-remote/rsc';

const contentDir = path.join(process.cwd(), 'content', 'case-studies');

async function getCaseStudies() {
  const files = fs.readdirSync(contentDir);
  const caseStudies = await Promise.all(
    files.map(async (file) => {
      const source = fs.readFileSync(path.join(contentDir, file), 'utf8');
      const { frontmatter } = await compileMDX<{ title: string; summary: string; tags: string[] }>({
        source,
        options: { parseFrontmatter: true },
      });
      return {
        slug: file.replace(/\.mdx$/, ''),
        ...frontmatter,
      };
    })
  );
  return caseStudies;
}

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies();

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Case Studies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {caseStudies.map((study) => (
          <Link href={`/case-studies/${study.slug}`} key={study.slug}>
            <div className="bg-gray-800 p-6 rounded-lg h-full flex flex-col">
              <h3 className="text-xl font-bold">{study.title}</h3>
              <p className="mt-2 text-gray-400 flex-grow">{study.summary}</p>
              <div className="mt-4">
                {study.tags.map((tag) => (
                  <span key={tag} className="inline-block bg-indigo-500 text-white text-xs px-2 rounded-full uppercase font-semibold tracking-wide mr-2">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
