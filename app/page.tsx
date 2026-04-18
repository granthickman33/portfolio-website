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
  // Sort by most recently modified (or you can add a date field in frontmatter)
  return caseStudies;
}

export default async function Home() {
  const caseStudies = await getCaseStudies();
  const featuredCaseStudies = caseStudies.slice(0, 2);

  return (
    <div>
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Grant Hickman: Staff Product Manager
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Building impactful products and leading high-performing teams.
          Specializing in enterprise software, platform strategy, and bridging the gap between complex technical problems and user needs.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/case-studies" className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">
            View Case Studies
          </Link>
          <Link href="/about" className="text-sm font-semibold leading-6 text-white">
            Learn more <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredCaseStudies.map((study) => (
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
        <div className="text-center mt-8">
          <Link href="/case-studies" className="text-indigo-400 hover:text-indigo-300">
            View All Case Studies &rarr;
          </Link>
        </div>
      </section>

      {/* Featured Side Projects */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Side Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Placeholder for Side Project 1 */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold">Side Project 1 Title</h3>
            <p className="mt-2 text-gray-400">A brief description of the side project.</p>
          </div>
          {/* Placeholder for Side Project 2 */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold">Side Project 2 Title</h3>
            <p className="mt-2 text-gray-400">A brief description of the side project.</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link href="/side-projects" className="text-indigo-400 hover:text-indigo-300">
            View All Side Projects &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}