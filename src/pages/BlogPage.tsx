import { Link } from 'react-router-dom';
import SiteNav from '../components/SiteNav';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import { posts, readMinutes } from '../data/posts';
import usePageMeta from '../components/usePageMeta';

export default function BlogPage() {
  usePageMeta(
    'Blog',
    'Plain guides on AI agents, integrations, and the processes worth automating first.',
  );
  return (
    <main>
      <div className="subnav" data-section="blog-nav">
        <SiteNav />
      </div>

      <section className="blog-page" data-section="blog">
        <div className="container">
          <div className="blog-page__head">
            <span className="eyebrow">Blog</span>
            <h1>
              Notes on working with <span className="accent">less busywork.</span>
            </h1>
            <p>
              Plain guides on AI agents, integrations, and the processes worth
              automating first.
            </p>
          </div>

          <div className="blog-grid">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="blog-card"
                data-post={post.slug}
              >
                <div className="blog-card__cover">
                  <img src={post.cover} alt={post.coverAlt} loading="lazy" />
                </div>
                <div className="blog-card__body">
                  <div className="blog-card__tags">
                    {post.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="blog-meta">
                    <span>{post.date}</span>
                    <span className="dot-sep">·</span>
                    <span>{readMinutes(post)} min read</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
