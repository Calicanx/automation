export type PostSection = {
  heading?: string;
  paragraphs: string[];
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  cover: string;
  coverAlt: string;
  intro: string;
  sections: PostSection[];
};

export const posts: Post[] = [
  {
    slug: 'first-process-to-automate',
    title: 'The First Process You Should Automate (It Is Not the Biggest One)',
    excerpt:
      'Most teams pick the messiest process first. The better first automation is small, frequent, and easy to measure — here is the filter we use.',
    date: '12 Feb 2026',
    tags: ['Strategy', 'Operations'],
    cover:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    coverAlt: 'Operations dashboard with weekly process metrics',
    intro:
      'The biggest process is rarely the best first automation. It is usually the one with the most exceptions, the most politics, and the longest path to a working result. That is a recipe for a six-month project that ends in a slide deck.',
    sections: [
      {
        heading: 'Start with frequency, not pain',
        paragraphs: [
          'A task that takes two hours once a month is annoying. A task that takes four minutes forty times a day is a different problem: it is a tax on every customer conversation. Automate the frequent task first and the payback shows up in week one, not quarter three.',
          'This is why the first automation is often something unglamorous — routing a form submission, drafting a reply, copying an order into a spreadsheet, or sending the same status update. Nobody puts it on a strategy slide. Everybody feels it when it disappears.',
        ],
      },
      {
        heading: 'The filter we use',
        paragraphs: [
          'Before we build anything, we score a process on four things: frequency, rule clarity, data availability, and blast radius. High frequency and clear rules are good. Available data is non-negotiable. A small blast radius means a mistake costs a retry, not a customer.',
          'A lead intake process usually scores well. A pricing decision usually does not — too many judgement calls, too much context that lives in someone’s head. The point is not to avoid hard work. The point is to earn trust with a small win before asking the team to hand over something sensitive.',
        ],
      },
      {
        heading: 'Measure the before',
        paragraphs: [
          'You cannot prove a saving you never counted. For one week, ask the person doing the task to note how long it takes and how often it happens. A rough stopwatch number is enough. We also count the handoffs: how many times does the task change hands, and where does it wait?',
          'Those two numbers — minutes per run and handoffs per week — become the baseline. After launch, the same numbers tell you whether the automation is working or just moving the work somewhere less visible.',
        ],
      },
      {
        heading: 'Design the exception path first',
        paragraphs: [
          'Most automation demos show the happy path. Production is mostly exceptions. What happens when the email has two invoice numbers? When the customer is already in the CRM? When the API is down at 2am?',
          'A good first workflow has a clear owner for exceptions and a place for them to land: a Slack channel, a task in the CRM, a flagged row in a sheet. If the exception path is vague, the team will stop trusting the automation the first time it guesses wrong.',
        ],
      },
      {
        heading: 'A two-week first build',
        paragraphs: [
          'Our Sprint is deliberately scoped to one workflow and roughly two weeks. That is enough time to map the process, connect the tools, test on real records, and train the owner. It is not enough time to boil the ocean — which is the point.',
          'If the first workflow saves ten hours a week, the second one is easy to justify. If it does not, you have learned something valuable for a fixed price instead of discovering it after a year of consulting.',
        ],
      },
    ],
  },
  {
    slug: 'ai-agent-or-workflow',
    title: 'AI Agent or Workflow? Pick the Boring One First',
    excerpt:
      'An agent is a loop with judgement. A workflow is a path with rules. Most business processes need the path, with a small amount of judgement inside it.',
    date: '4 Feb 2026',
    tags: ['AI', 'Workflows'],
    cover:
      'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1200&q=80',
    coverAlt: 'Abstract representation of an AI agent and connected systems',
    intro:
      '“Agent” has become the word everyone wants on the proposal. But an agent is not automatically better than a workflow. It is a different tool with a different failure mode: it can decide to do something you did not ask for.',
    sections: [
      {
        heading: 'The difference in one sentence',
        paragraphs: [
          'A workflow follows a path you designed. An agent chooses its next step at runtime based on a goal. Workflows are predictable and cheap to test. Agents are flexible and harder to bound.',
          'For a process that already has clear rules — invoice approval, lead routing, order status updates — a workflow is usually the right answer. The AI step belongs inside the workflow, not above it: read this document, classify this message, draft this reply.',
        ],
      },
      {
        heading: 'Where an agent earns its place',
        paragraphs: [
          'An agent is useful when the path genuinely changes based on what it finds. A support assistant that needs to look up an order, check a policy, and then decide whether to refund or escalate is a good candidate. The goal is stable; the steps are not.',
          'Even then, we bound it. The agent gets a small set of tools, a maximum number of steps, a budget, and a human approval before anything irreversible. “Autonomous” should mean “does not need a babysitter for the routine case”, not “cannot be stopped”.',
        ],
      },
      {
        heading: 'The hybrid pattern we ship most',
        paragraphs: [
          'The pattern that works best for growing teams is a deterministic workflow with two or three AI steps: extraction, classification, and drafting. The workflow owns the order of operations. The model handles the messy language part. A human owns the approval.',
          'For example: an email arrives, the workflow checks whether it is a quote request, the model extracts the line items, the workflow checks availability in the ERP, the model drafts the reply, and a human sends it. Every step is logged. Every failure has a fallback.',
        ],
      },
      {
        heading: 'Test the model like a new hire',
        paragraphs: [
          'You would not let a new hire approve invoices unsupervised on day one. Do not do that with a model either. Start with a shadow mode: the automation produces its answer, a human compares it to the current process, and you measure accuracy on real examples.',
          'Only after the accuracy is stable do you remove the review step — and even then, keep a sample audit. The goal is not zero human involvement. The goal is human involvement where it changes the outcome.',
        ],
      },
      {
        heading: 'The boring choice is usually the durable one',
        paragraphs: [
          'Agents are improving quickly, and some processes that need a workflow today will be a good fit for an agent next year. That is fine. Build the workflow now, keep the AI step modular, and swap in more autonomy when the evidence supports it.',
          'A system that runs every day beats a demo that impresses for ten minutes. Pick the boring path first, then earn the right to make it smarter.',
        ],
      },
    ],
  },
  {
    slug: 'n8n-make-zapier',
    title: 'n8n, Make, or Zapier: What We Actually Choose',
    excerpt:
      'Three automation platforms, three different trade-offs. A practical guide to picking one based on volume, data sensitivity, and who will maintain it.',
    date: '27 Jan 2026',
    tags: ['Tools', 'n8n'],
    cover:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    coverAlt: 'Server racks representing workflow automation infrastructure',
    intro:
      'The platform debate is usually shorter than it looks. All three tools can connect your apps. The real questions are where the data lives, how much volume you are pushing, and who is going to own the workflow after we leave.',
    sections: [
      {
        heading: 'Zapier: fastest to a first win',
        paragraphs: [
          'Zapier has the widest catalogue and the smoothest onboarding. If you need two apps connected this afternoon and the process is simple, it is hard to beat. The trade-off shows up at scale: task-based pricing gets expensive when a workflow runs thousands of times a month.',
          'We use Zapier for small, low-volume workflows where speed matters more than unit cost, or where the team already lives in it and wants to maintain the automation themselves.',
        ],
      },
      {
        heading: 'Make: visual control at a fair price',
        paragraphs: [
          'Make gives you more control over branching, data transformation, and error handling than Zapier, with pricing that holds up better at moderate volume. The visual builder is excellent for processes with several branches.',
          'It is a good middle ground for ops teams that want to see and edit the logic without managing infrastructure. The main cost is cognitive: a complex Make scenario can become a diagram only its author understands.',
        ],
      },
      {
        heading: 'n8n: ownership and no per-task tax',
        paragraphs: [
          'n8n is our default for custom builds. It can be self-hosted, so sensitive data stays in your infrastructure, and the pricing is not tied to every task. It handles code steps, custom APIs, and AI nodes without leaving the workflow.',
          'The trade-off is that someone has to run it. We handle that during the build and hand over a documented setup. For teams with a technical owner — or a support agreement — n8n is usually the most durable choice.',
        ],
      },
      {
        heading: 'The decision in practice',
        paragraphs: [
          'Low volume, simple, non-technical owner: Zapier. Moderate volume, branching, ops owner: Make. Higher volume, sensitive data, custom logic, long-term ownership: n8n. Those are heuristics, not rules.',
          'The more important point is that the platform is not the automation. The process map, the exception handling, and the runbook matter more than which logo is on the screen. A well-designed workflow on a modest tool beats a clever tool with no owner.',
        ],
      },
      {
        heading: 'What we hand over',
        paragraphs: [
          'Whichever platform we use, the handover includes the workflow itself, credentials stored in a managed secret store, a plain-English runbook, and a short training session. You should be able to explain the process to a new hire without calling us.',
          'That is also why we avoid locking a client into a platform they cannot afford or maintain. The right choice is the one your team can still run in twelve months.',
        ],
      },
    ],
  },
];

export function readMinutes(post: Post): number {
  const words = [post.intro, ...post.sections.flatMap((s) => [...(s.heading ? [s.heading] : []), ...s.paragraphs])]
    .join(' ')
    .split(/\s+/).length;
  return Math.max(2, Math.ceil(words / 200));
}
