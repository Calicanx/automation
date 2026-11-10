import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import SiteNav from '../components/SiteNav';
import Footer from '../components/Footer';
import { WhatsAppIcon, PhoneIcon, ArrowRightIcon } from '../components/icons';
import { CONTACT, useLocale } from '../i18n/config';
import { posts, readMinutes } from '../data/posts';
import usePageMeta from '../components/usePageMeta';

export default function BlogPostPage() {
  const { slug } = useParams();
  const { formatPrice } = useLocale();
  const sprint = formatPrice('sprint');
  const post = posts.find((p) => p.slug === slug);
  const [progress, setProgress] = useState(0);
  usePageMeta(post ? post.title : 'Article not found', post?.excerpt);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      setProgress(total > 0 ? Math.min(100, (window.scrollY / total) * 100) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [slug]);

  if (!post) {
    return (
      <main>
        <div className="subnav" data-section="post-nav">
          <SiteNav />
        </div>
        <section className="post" data-section="post">
          <div className="post__inner">
            <span className="eyebrow">Not found</span>
            <h1>That article does not exist.</h1>
            <p style={{ marginTop: '1rem' }}>
              <Link to="/blog" className="link-arrow">
                Back to blog
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </p>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <div className="post-progress" aria-hidden="true">
        <div
          className="post-progress__bar"
          data-testid="post-progress"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="subnav" data-section="post-nav">
        <SiteNav />
      </div>

      <article className="post" data-section="post" data-post={post.slug}>
        <div className="post__inner">
          <Link to="/blog" className="legal__back">
            <span style={{ display: 'inline-flex', transform: 'rotate(180deg)' }}>
              <ArrowRightIcon className="w-4 h-4" />
            </span>
            All articles
          </Link>
          <span className="eyebrow">{post.tags.join(' · ')}</span>
          <h1>{post.title}</h1>
          <div className="post__meta">
            <span>{post.date}</span>
            <span className="dot-sep">·</span>
            <span className="post__readtime" data-testid="post-readtime">
              {readMinutes(post)} min read
            </span>
          </div>

          <div className="post__cover">
            <img src={post.cover} alt={post.coverAlt} />
          </div>

          <div className="post__body">
            <p>
              <strong>{post.intro}</strong>
            </p>
            {post.sections.map((section, si) => (
              <div key={section.heading}>
                {section.heading && <h2>{section.heading}</h2>}
                {section.paragraphs.map((paragraph, i) => (
                  <p key={i} style={i > 0 ? { marginTop: '1.2rem' } : undefined}>
                    {paragraph}
                  </p>
                ))}
                {si === 1 && (
                  <div className="post__cta post__cta--mid">
                    <h3>Want this working in your business?</h3>
                    <p>
                      {sprint}, live in 2 weeks, pay only after it runs on your
                      data.
                    </p>
                    <div className="hero__ctas">
                      <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="cta__btn-white">
                        <span className="btn-icon">
                          <WhatsAppIcon className="w-5 h-5" />
                        </span>
                        Talk On WhatsApp
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="post__cta">
            <h3>Want this working in your business?</h3>
            <p>
              {sprint}, live in 2 weeks, pay only after it runs on your data.
              Send us the process that eats the most time and we will show you
              what we would build.
            </p>
            <div className="hero__ctas">
              <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="cta__btn-white">
                <span className="btn-icon">
                  <WhatsAppIcon className="w-5 h-5" />
                </span>
                Talk On WhatsApp
              </a>
              <a href={CONTACT.bookingUrl} target="_blank" rel="noopener noreferrer" className="cta__btn-outline">
                <span className="btn-icon">
                  <PhoneIcon className="w-5 h-5" />
                </span>
                Book A Process Audit
              </a>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
