
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import ProjectGallery from "../../../components/project-gallery";
import { projects } from "../../../lib/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  return {
    title: project ? `${project.title} | Portfolio` : "Project not found",
    description: project?.summary,
  };
}

async function ProjectDetailsContent({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const images = project.images?.length
    ? project.images
    : [project.image];

  return (
    <main className="project-page">
      <div className="detail-shell">
        <header className="detail-nav">
          <Link className="brand" href="/#home">
            <span className="brand-mark">F.</span>
            <span>
              portfolio<span className="brand-dot">.</span>
            </span>
          </Link>

          <Link className="detail-back-link" href="/#projects">
            <span>←</span> All projects
          </Link>
        </header>

        <section className={`detail-hero detail-hero-${project.gradient}`}>
          <div className="detail-hero-copy">
            <p className="eyebrow">
              PROJECT {project.number} / {project.year}
            </p>

            <p className="detail-category">{project.category}</p>

            <h1>
              {project.title}
              <span className="gradient-text">.</span>
            </h1>

            <p className="detail-summary">{project.summary}</p>

            <div className="project-actions">
              {project.liveUrl && (
                <a
                  className="button button-primary"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View live project ↗
                </a>
              )}

              {project.githubUrl && (
                <a
                  className="button button-secondary"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View source ↗
                </a>
              )}

              {project.behanceUrl && (
                <a
                  className="button button-secondary"
                  href={project.behanceUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Behance ↗
                </a>
              )}
            </div>
          </div>

          <div className="detail-hero-decoration" aria-hidden="true">
            <span>{project.number}</span>
            <span>CREATIVE WORK</span>
          </div>
        </section>

        <section className="detail-gallery-section">
          <div className="detail-section-heading">
            <div>
              <p className="eyebrow">INSIDE THE PROJECT</p>
              <h2>
                A closer <span className="gradient-text">look.</span>
              </h2>
            </div>

            <p>
              Explore the interface, screens, and details of this project.
            </p>
          </div>

          <ProjectGallery images={images} title={project.title} />
        </section>

        <section className="detail-information">
          <article className="detail-card">
            <p className="eyebrow">OVERVIEW</p>
            <h2>What I focused on</h2>
            <p className="detail-description">{project.description}</p>

            <ul className="highlight-list">
              {project.highlights.map((item) => (
                <li key={item}>
                  <span>↗</span>
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="detail-card">
            <p className="eyebrow">BUILT WITH</p>
            <h2>Tools &amp; skills</h2>
            <p className="detail-description">
              Technologies and skills used in this project.
            </p>

            <div className="tag-list detail-tags">
              {project.stack.map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>

            <div className="detail-mini-meta">
              <span>PROJECT YEAR</span>
              <strong>{project.year}</strong>
            </div>
          </article>
        </section>

        <section className="detail-next-project">
          <div>
            <p className="eyebrow">KEEP EXPLORING</p>
            <h2>
              More things I’ve built
              <span className="gradient-text">.</span>
            </h2>
            <p>Take a look at my other projects and experiments.</p>
          </div>

          <Link className="button button-primary" href="/#projects">
            Back to all projects ↗
          </Link>
        </section>

        <footer className="footer detail-footer">
          <Link className="brand" href="/#home">
            <span className="brand-mark">F.</span>
            <span>
              portfolio<span className="brand-dot">.</span>
            </span>
          </Link>

          <span>Designed with intention. Built with curiosity.</span>

          <Link href="/#home">Back to top ↑</Link>
        </footer>
      </div>
    </main>
  );
}

export default function ProjectDetailsPage({ params }: Props) {
  return (
    <Suspense
      fallback={
        <main className="project-page">
          <div className="detail-shell">
            <p className="detail-description">Loading project...</p>
          </div>
        </main>
      }
    >
      <ProjectDetailsContent params={params} />
    </Suspense>
  );
}
