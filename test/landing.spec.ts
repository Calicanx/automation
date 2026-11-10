import { test, expect } from '@playwright/test';

const WHATSAPP_URL = 'https://wa.me/254796305577';
const BOOKING_URL = 'https://calendar.notion.com/meet/beesrani/book';
const SIBLING_URL = 'https://website.advior.top';

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem('advior-automation-region', 'KE');
    localStorage.setItem('advior-automation-lang', 'en');
  });
  await page.goto('/', { waitUntil: 'domcontentloaded' });
});

test.describe('Hero', () => {
  test('shows nav, badge, headline, subtext and CTAs', async ({ page }) => {
    const hero = page.locator('[data-section="hero"]');
    await expect(hero.getByText('Advior').first()).toBeVisible();
    for (const link of ['Work', 'Services', 'Pricing', 'FAQ']) {
      await expect(hero.getByRole('link', { name: link, exact: true })).toBeVisible();
    }
    await expect(hero.getByText('AI Agents & Workflow Automation')).toBeVisible();
    await expect(hero.getByRole('heading', { level: 1 })).toContainText("Your team's repetitive work,");
    await expect(hero.getByRole('heading', { level: 1 })).toContainText('runs itself');
    await expect(hero.getByText('Custom AI agents and workflows that run inside the tools you already use.')).toBeVisible();
    await expect(hero.getByText(/Sprint Plan, Scope Fixed/)).toBeVisible();
    await expect(hero.getByText(/195,000/)).toBeVisible();
    await expect(hero.getByRole('link', { name: /Talk On WhatsApp/ }).first()).toHaveAttribute('href', WHATSAPP_URL);
    await expect(hero.getByRole('link', { name: /Book A Process Audit/ }).first()).toHaveAttribute('href', BOOKING_URL);
  });

  test('no horizontal overflow on the landing page', async ({ page }) => {
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(1);
  });
});

test.describe('About', () => {
  test('shows the positioning and three feature cards', async ({ page }) => {
    const about = page.locator('[data-section="about"]');
    await expect(about.getByText('ABOUT OUR COMPANY')).toBeVisible();
    await expect(about.getByRole('heading', { level: 2 })).toContainText('We build the systems that do the work');
    await expect(about.getByRole('heading', { level: 2 })).toContainText('not just track it');
    await expect(about.getByText('Fixed Scope')).toBeVisible();
    await expect(about.getByText('Built On Your Stack')).toBeVisible();
    await expect(about.getByText('2-Week')).toBeVisible();
    await expect(about.getByText('Automation Sprint')).toBeVisible();
    await expect(about.getByText('Audit. Build. Test. Live.')).toBeVisible();
    await expect(about.getByRole('link', { name: /See What We Build/ })).toHaveAttribute('href', '#what-you-get');
  });
});

test.describe('Problem', () => {
  test('shows the handoff tax story and manual steps', async ({ page }) => {
    const problem = page.locator('[data-section="problem"]');
    await expect(problem.getByText('THE PROBLEM')).toBeVisible();
    await expect(problem.getByRole('heading', { level: 2 })).toContainText('Your team is already doing the work twice.');
    await expect(problem.getByRole('heading', { level: 2 })).toContainText('the tax.');
    await expect(problem.getByText('The Handoff Tax')).toBeVisible();
    await expect(problem.getByText('New lead from the website')).toBeVisible();
    await expect(problem.getByText('Quote request in email')).toBeVisible();
    await expect(problem.getByText('Supplier invoice PDF')).toBeVisible();
    await expect(problem.getByText('+18 hrs')).toBeVisible();
    await expect(problem.getByText('0 re-keys')).toBeVisible();
    await expect(problem.locator('.problem__result')).toHaveCount(3);
    await expect(problem.locator('.problem__thumb svg')).toHaveCount(3);
  });
});

test.describe('What you get', () => {
  test('shows six numbered deliverables and the no-new-platform card', async ({ page }) => {
    const section = page.locator('[data-section="what-you-get"]');
    await expect(section.getByText('WHAT YOU GET')).toBeVisible();
    await expect(section.getByRole('heading', { level: 2 })).toContainText('A working system, not a demo');
    const items = [
      'A process map that shows every step, owner, and handoff',
      'One working automation, not a slide deck',
      'Your existing tools connected — CRM, inbox, sheets, docs',
      'AI where it earns its place: reading, drafting, classifying',
      'Human approval checks before anything irreversible',
      'A written runbook your team can actually follow',
    ];
    for (const item of items) {
      await expect(section.getByText(item)).toBeVisible();
    }
    await expect(section.getByText(/No new platform to learn/)).toBeVisible();
  });
});

test.describe('Pricing', () => {
  test('shows two fixed-scope plans with localised Kenya prices', async ({ page }) => {
    const pricing = page.locator('[data-section="pricing"]');
    await expect(pricing.getByRole('heading', { level: 2 })).toContainText('Fixed scope. Fixed price.');
    await expect(pricing.getByText('Sprint', { exact: true })).toBeVisible();
    await expect(pricing.getByText('System', { exact: true })).toBeVisible();
    await expect(pricing.locator('.price-split')).toHaveCount(2);
    await expect(pricing.getByText(/195,000/)).toBeVisible();
    await expect(pricing.getByText(/585,000/)).toBeVisible();
    await expect(pricing.getByText('One automation, end to end')).toBeVisible();
    await expect(pricing.getByText('Everything in Sprint')).toBeVisible();
    await expect(pricing.getByText('90 days of support after launch')).toBeVisible();
    await expect(pricing.getByText(/pay only after the workflow runs/)).toBeVisible();
  });

  test('each plan has a white WhatsApp button with icon', async ({ page }) => {
    const pricing = page.locator('[data-section="pricing"]');
    const buttons = pricing.getByRole('link', { name: /Talk on WhatsApp/ });
    await expect(buttons).toHaveCount(2);
    await expect(pricing.locator('.price-side__btn svg')).toHaveCount(2);
    const firstBg = await buttons.first().evaluate((el) => getComputedStyle(el).backgroundColor);
    expect(firstBg).toMatch(/255, 255, 255/);
  });

  test('region switcher localises to USD and GBP', async ({ page }) => {
    const footer = page.locator('[data-section="footer"]');
    await footer.locator('[data-testid="region-select"]').selectOption('US');
    const pricing = page.locator('[data-section="pricing"]');
    await expect(pricing.getByText('$1,500', { exact: true })).toBeVisible();
    await expect(pricing.getByText('$4,500', { exact: true })).toBeVisible();

    await footer.locator('[data-testid="region-select"]').selectOption('GB');
    await expect(pricing.getByText('£1,200', { exact: true })).toBeVisible();
    await expect(pricing.getByText('£3,600', { exact: true })).toBeVisible();
  });

  test('pricing causes no horizontal overflow', async ({ page }) => {
    await page.locator('[data-section="pricing"]').scrollIntoViewIfNeeded();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(1);
  });
});

test.describe('Featured work', () => {
  test('shows the featured build with metrics and image', async ({ page }) => {
    const work = page.locator('[data-section="work"]');
    await expect(work.getByText('Our Work')).toBeVisible();
    await expect(work.getByRole('heading', { level: 2 })).toContainText('Selected Builds');
    await expect(work.getByText('Northline Logistics', { exact: true }).first()).toBeVisible();
    await expect(work.getByText('18 hrs')).toBeVisible();
    await expect(work.getByText('4.2×')).toBeVisible();
    await expect(work.locator('.work-feature__rule')).toHaveCount(4);
    await expect(work.locator('img.work-photo')).toHaveCount(1);
    const metricsBox = await work.locator('.work-feature__metrics').boundingBox();
    const imgBox = await work.locator('.work-feature__img').boundingBox();
    expect(metricsBox).not.toBeNull();
    expect(imgBox).not.toBeNull();
    if (imgBox!.width > 500) {
      expect(metricsBox!.x).toBeLessThan(imgBox!.x);
    }
  });
});

test.describe('How it works', () => {
  test('shows four steps and the test-before-you-pay promise', async ({ page }) => {
    const how = page.locator('[data-section="how-it-works"]');
    await expect(how.getByText('HOW IT WORKS')).toBeVisible();
    await expect(how.getByRole('heading', { level: 2 })).toContainText('You see it running before you pay');
    for (const step of ['A 45 Minute Audit', 'Build & Connect', 'Test On Real Data', 'Go Live & Train']) {
      await expect(how.getByText(step)).toBeVisible();
    }
  });
});

test.describe('Integration part', () => {
  test('shows integration checklist', async ({ page }) => {
    const section = page.locator('[data-section="integration"]');
    await expect(section.getByText('THE INTEGRATION PART')).toBeVisible();
    await expect(section.getByRole('heading', { level: 2 })).toContainText('Most automations fail at the handoff');
    const items = [
      'Authentication and permissions',
      'Duplicate and retry handling',
      'Data mapping between tools',
      'Human approval checkpoints',
      'Error alerts to the right person',
      'Logging and an audit trail',
    ];
    for (const item of items) {
      await expect(section.getByText(item)).toBeVisible();
    }
    await expect(section.getByText('Included in both plans. No extra charge.')).toBeVisible();
  });
});

test.describe('Who this is for', () => {
  test('shows all twelve team types', async ({ page }) => {
    const who = page.locator('[data-section="who-for"]');
    await expect(who.getByRole('heading', { level: 2 })).toContainText('Built for teams like yours');
    const types = [
      'Sales & Lead Generation',
      'Ecommerce Operations',
      'Customer Support',
      'Finance & Accounting',
      'Recruiting Agencies',
      'Logistics & Dispatch',
      'Professional Services',
      'Healthcare Clinics',
      'Real Estate Teams',
      'SaaS Startups',
      'Manufacturing Ops',
      'Education & Training',
    ];
    for (const t of types) {
      await expect(who.getByText(t)).toBeVisible();
    }
  });
});

test.describe('Testimonials', () => {
  test('shows three team quotes', async ({ page }) => {
    const section = page.locator('[data-section="testimonials"]');
    await expect(section.getByRole('heading', { level: 2 })).toContainText('What Teams Say About Working With Us');
    await expect(section.getByText('Amara Okafor')).toBeVisible();
    await expect(section.getByText('COO, logistics company')).toBeVisible();
    await expect(section.getByText('Daniel Reyes')).toBeVisible();
    await expect(section.getByText('Priya Nair')).toBeVisible();
    await expect(section.getByText('Our ops lead got her Fridays back.')).toBeVisible();
  });
});

test.describe('FAQ', () => {
  test('shows the questions and expands an answer', async ({ page }) => {
    const faq = page.locator('[data-section="faq"]');
    await expect(faq.getByRole('heading', { level: 2 })).toContainText('Straight Answers to Common Questions');
    await expect(faq.getByText('Will this replace my team?')).toBeVisible();
    await expect(faq.getByText('Which tools do you work with?')).toBeVisible();
    await expect(faq.getByText('Do I need a technical team to run it?')).toBeVisible();
    await expect(faq.getByText('What happens if a workflow breaks?')).toBeVisible();
    await faq.getByText('Which tools do you work with?').click();
    await expect(faq.getByText(/n8n, Make, Zapier/)).toBeVisible();
  });
});

test.describe('CTA', () => {
  test('shows the blue card with both buttons and capacity note', async ({ page }) => {
    const cta = page.locator('[data-section="cta"]');
    await expect(cta.getByRole('heading', { level: 2 })).toContainText('Find the hours your team loses every week');
    await expect(cta.getByRole('link', { name: /Talk on WhatsApp/i })).toHaveAttribute('href', WHATSAPP_URL);
    await expect(cta.getByRole('link', { name: /Book A Process Audit/ })).toHaveAttribute('href', BOOKING_URL);
    await expect(cta.getByText('We take on 4 new automation builds each month')).toBeVisible();
  });
});

test.describe('Footer', () => {
  test('shows automation contact details, socials and cross-link', async ({ page }) => {
    const footer = page.locator('[data-section="footer"]');
    await expect(footer.getByText('Advior').first()).toBeVisible();
    await expect(footer.getByText('A small team in Nairobi building AI agents and workflow automation for growing companies.')).toBeVisible();
    await expect(footer.getByText('+254 796 305577').first()).toBeVisible();
    await expect(footer.getByText('https://wa.me/254796305577')).toBeVisible();
    await expect(footer.getByText('hello@advior.top')).toBeVisible();
    await expect(footer.getByText('© 2026 Advior. All rights reserved.')).toBeVisible();
    await expect(footer.locator('a[aria-label]')).toHaveCount(3);
    await expect(footer.getByRole('link', { name: 'Websites' })).toHaveAttribute('href', SIBLING_URL);
    await expect(footer.getByRole('link', { name: /Visit website.advior.top/ })).toHaveAttribute('href', SIBLING_URL);
  });

  test('sitemap links point to the right routes', async ({ page }) => {
    const sitemap = page.locator('[data-section="footer"] .footer__sitemap');
    await expect(sitemap.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '/work');
    await expect(sitemap.getByRole('link', { name: 'Blog' })).toHaveAttribute('href', '/blog');
    await expect(sitemap.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/contact');
    await expect(sitemap.getByRole('link', { name: 'Privacy Policy' })).toHaveAttribute('href', '/privacy');
    await expect(sitemap.getByRole('link', { name: 'Terms of Service' })).toHaveAttribute('href', '/terms');
  });

  test('locale switcher localises prices and language', async ({ page }) => {
    const footer = page.locator('[data-section="footer"]');
    await expect(footer.locator('[data-testid="locale-hint"]')).toContainText(/Sprint.*195,000.*System.*585,000/);
    await footer.locator('[data-testid="language-select"]').selectOption('sw');
    const nav = page.locator('[data-section="hero"] nav');
    await expect(nav.getByRole('link', { name: 'Bei', exact: true })).toBeVisible();
    await expect(page.locator('[data-section="hero"]').getByText('Mawakala wa AI na Uendeshaji wa Kazi')).toBeVisible();
  });
});

test.describe('Projects page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/work', { waitUntil: 'domcontentloaded' });
  });

  test('shows all three case studies with metrics and images', async ({ page }) => {
    const section = page.locator('[data-section="projects"]');
    await expect(section.getByRole('heading', { level: 1 })).toContainText('Systems that give hours back.');
    for (const name of ['Northline Logistics', 'Meridian Finance', 'Clarity Dental Group']) {
      await expect(section.getByText(name, { exact: true }).first()).toBeVisible();
    }
    await expect(section.getByText('18 hrs')).toBeVisible();
    await expect(section.getByText('92%')).toBeVisible();
    await expect(section.getByText('24/7')).toBeVisible();
    await expect(section.locator('img')).toHaveCount(3);
    await expect(section.locator('.proj-row')).toHaveCount(3);
    await expect(section.locator('.proj-row').nth(1)).toHaveClass(/proj-row--flip/);
  });

  test('CTA books a process audit', async ({ page }) => {
    await expect(page.locator('[data-section="cta"]').getByRole('link', { name: /Book A Process Audit/ })).toHaveAttribute('href', BOOKING_URL);
  });
});

test.describe('Blog', () => {
  test('lists three automation articles', async ({ page }) => {
    await page.goto('/blog', { waitUntil: 'domcontentloaded' });
    const section = page.locator('[data-section="blog"]');
    await expect(section.getByRole('heading', { level: 1 })).toContainText('Notes on working with less busywork.');
    await expect(section.getByText('The First Process You Should Automate (It Is Not the Biggest One)')).toBeVisible();
    await expect(section.getByText('AI Agent or Workflow? Pick the Boring One First')).toBeVisible();
    await expect(section.getByText('n8n, Make, or Zapier: What We Actually Choose')).toBeVisible();
    expect(await section.getByText(/min read/).count()).toBeGreaterThanOrEqual(3);
  });

  test('article shows read time, progress bar and CTA', async ({ page }) => {
    await page.goto('/blog/ai-agent-or-workflow', { waitUntil: 'domcontentloaded' });
    const post = page.locator('[data-section="post"]');
    await expect(post.getByRole('heading', { level: 1 })).toContainText('AI Agent or Workflow?');
    await expect(post.locator('[data-testid="post-readtime"]')).toContainText(/min read/);
    await expect(page.locator('[data-testid="post-progress"]')).toBeAttached();
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(400);
    const width = await page.locator('[data-testid="post-progress"]').evaluate((el) => parseFloat(el.style.width));
    expect(width).toBeGreaterThan(0);
    const cta = page.locator('.post__cta').last();
    await expect(cta.getByRole('link', { name: /Book A Process Audit/ })).toHaveAttribute('href', BOOKING_URL);
  });
});

test.describe('Contact page', () => {
  test('shows contact methods and submits with an AUT reference', async ({ page }) => {
    await page.goto('/contact', { waitUntil: 'domcontentloaded' });
    const section = page.locator('[data-section="contact"]');
    await expect(section.getByRole('heading', { level: 1 })).toContainText('Talk to a human.');
    await expect(section.locator('[data-contact="whatsapp"]')).toBeVisible();
    await expect(section.locator('[data-contact="call"]')).toBeVisible();
    await expect(section.locator('[data-contact="email"]')).toBeVisible();

    const form = page.locator('[data-testid="contact-form"]');
    await form.getByPlaceholder('e.g. Wanjiru').fill('Test Owner');
    await form.getByPlaceholder('e.g. Northline Logistics').fill('Test Logistics');
    await form.getByRole('button', { name: /Send enquiry/ }).click();
    const success = page.locator('[data-testid="contact-success"]');
    await expect(success).toBeVisible();
    await expect(success.getByText(/AUT-\d{4}-\d{4}/)).toBeVisible();
    await expect(success.getByText('Test Owner')).toBeVisible();
  });

  test('contact CTA shows a valid 10-working-day estimate', async ({ page }) => {
    await page.goto('/contact', { waitUntil: 'domcontentloaded' });
    const cta = page.locator('[data-section="contact-cta"]');
    const heading = await cta.getByRole('heading', { level: 3 }).textContent();
    const match = heading!.match(/live on (\w+) (\d{1,2}) (\w+)\.?/);
    expect(match).not.toBeNull();
    const [, weekday] = match!;
    expect(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']).toContain(weekday);
    const expected = (() => {
      const d = new Date();
      let added = 0;
      while (added < 10) {
        d.setDate(d.getDate() + 1);
        const dow = d.getDay();
        if (dow !== 0 && dow !== 6) added += 1;
      }
      return new Intl.DateTimeFormat('en-GB', { weekday: 'long', day: 'numeric', month: 'long' }).format(d);
    })();
    expect(heading).toContain(expected);
  });
});

test.describe('SEO files and metadata', () => {
  test('serves robots.txt and an automation sitemap', async ({ page }) => {
    const robots = await page.request.get('/robots.txt');
    expect(robots.ok()).toBeTruthy();
    expect(await robots.text()).toContain('Sitemap: https://automation.advior.top/sitemap.xml');

    const sitemap = await page.request.get('/sitemap.xml');
    expect(sitemap.ok()).toBeTruthy();
    const body = await sitemap.text();
    for (const path of [
      'https://automation.advior.top/',
      'https://automation.advior.top/work',
      'https://automation.advior.top/blog',
      'https://automation.advior.top/blog/first-process-to-automate',
      'https://automation.advior.top/blog/ai-agent-or-workflow',
      'https://automation.advior.top/blog/n8n-make-zapier',
      'https://automation.advior.top/contact',
      'https://automation.advior.top/privacy',
      'https://automation.advior.top/terms',
    ]) {
      expect(body).toContain(path);
    }
    expect(body).not.toContain('>https://advior.top/');
  });

  test('landing has canonical automation URL, description and JSON-LD', async ({ page }) => {
    const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
    expect(canonical).toBe('https://automation.advior.top/');
    const description = await page.locator('meta[name="description"]').getAttribute('content');
    expect(description).toContain('$1,500');
    const jsonLd = (await page.locator('script[type="application/ld+json"]').allTextContents()).join(' ');
    expect(jsonLd).toContain('ProfessionalService');
    expect(jsonLd).toContain('FAQPage');
    expect(jsonLd).toContain('"price": "1500"');
    expect(jsonLd).toContain('Advior Automation');
  });

  test('page titles use the Advior Automation suffix', async ({ page }) => {
    await page.goto('/work', { waitUntil: 'domcontentloaded' });
    await expect(page).toHaveTitle(/Selected Projects — Advior Automation/);
    await page.goto('/privacy', { waitUntil: 'domcontentloaded' });
    await expect(page).toHaveTitle(/Privacy Policy — Advior Automation/);
  });
});

test.describe('Legal pages', () => {
  test('privacy covers credentials and AI processing', async ({ page }) => {
    await page.goto('/privacy', { waitUntil: 'domcontentloaded' });
    const section = page.locator('[data-section="privacy"]');
    await expect(section.getByRole('heading', { level: 1 })).toContainText('Your data stays yours.');
    await expect(section.getByText('Client data, AI providers, and models')).toBeVisible();
    await expect(section.getByText(/managed secret store/).first()).toBeVisible();
  });

  test('terms cover fixed scope and the test-before-pay promise', async ({ page }) => {
    await page.goto('/terms', { waitUntil: 'domcontentloaded' });
    const section = page.locator('[data-section="terms"]');
    await expect(section.getByRole('heading', { level: 1 })).toContainText('Simple terms, on the page.');
    await expect(section.getByText('Fixed scope and payment')).toBeVisible();
    await expect(section.getByText(/Sprint \(from \$1,500 USD/)).toBeVisible();
  });
});

test.describe('Design parity with website.advior.top', () => {
  test('uses Silkscreen eyebrows and Inter headings', async ({ page }) => {
    const eyebrow = page.locator('[data-section="about"] .eyebrow').first();
    const family = await eyebrow.evaluate((el) => getComputedStyle(el).fontFamily);
    expect(family).toMatch(/Silkscreen/i);

    const h1 = page.locator('[data-section="hero"] h1');
    expect(await h1.evaluate((el) => getComputedStyle(el).fontFamily)).toMatch(/Inter/i);

    const badge = page.locator('[data-section="hero"] .hero__badge');
    expect(await badge.evaluate((el) => getComputedStyle(el).fontFamily)).toMatch(/Silkscreen/i);
  });

  test('uses photographic imagery in the expected sections', async ({ page }) => {
    await expect(page.locator('[data-section="hero"] .hero__avatar img').first()).toBeVisible();
    await expect(page.locator('[data-section="about"] .about-card img.card-bg').first()).toBeVisible();
    await expect(page.locator('[data-section="what-you-get"] .wyg__card img.card-bg')).toBeVisible();
    await expect(page.locator('[data-section="testimonials"] img.tcard__photo').first()).toBeVisible();
  });
});
