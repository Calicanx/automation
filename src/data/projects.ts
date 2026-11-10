export type ProjectMetric = {
  value: string;
  label: string;
};

export type Project = {
  slug: string;
  name: string;
  business: string;
  location: string;
  date: string;
  image: string;
  imageAlt: string;
  tagline: string;
  description: string;
  metrics: ProjectMetric[];
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: 'northline-logistics',
    name: 'Northline Logistics',
    business: 'Logistics & Dispatch',
    location: 'Nairobi',
    date: 'Feb, 2026',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Warehouse and delivery trucks for a logistics automation project',
    tagline: 'From forty manual check calls a day to one live board.',
    description:
      'Every quote request landed in a shared inbox, was copied into a spreadsheet, then chased by phone. We built a lead-to-quote workflow that reads each request, checks availability, drafts the quote, and routes anything unusual to a dispatcher. The team approved the result after a full week of live testing.',
    metrics: [
      { value: '18 hrs', label: 'given back to the team every week' },
      { value: '4.2×', label: 'faster quote turnaround' },
      { value: '0', label: 'missed follow-ups since launch' },
      { value: '2 wks', label: 'from audit to live workflow' },
    ],
    tags: ['n8n', 'CRM', 'AI Extraction'],
  },
  {
    slug: 'meridian-finance',
    name: 'Meridian Finance',
    business: 'Finance & Accounting',
    location: 'London',
    date: 'Jan, 2026',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Invoices and financial documents on a desk',
    tagline: 'Invoice month went from four days to one afternoon.',
    description:
      'Supplier invoices arrived as PDFs in three different inboxes. Someone opened each one, retyped the totals, and filed it. The new workflow extracts the line items, checks them against the purchase order, flags mismatches, and waits for a human approval before posting to the ledger.',
    metrics: [
      { value: '92%', label: 'less manual data entry' },
      { value: '6 min', label: 'saved on every invoice' },
      { value: '99.2%', label: 'extraction accuracy in testing' },
      { value: '3 wks', label: 'from audit to live workflow' },
    ],
    tags: ['Document AI', 'Approvals', 'Accounting'],
  },
  {
    slug: 'clarity-dental',
    name: 'Clarity Dental Group',
    business: 'Healthcare Clinics',
    location: 'Dubai',
    date: 'Jan, 2026',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Clinician using a tablet for patient intake automation',
    tagline: 'Every patient gets an answer, even at 2am.',
    description:
      'New patient enquiries came through WhatsApp, Instagram, and a website form. The front desk answered what it could and lost the rest. We connected all three channels to one AI assistant that answers common questions, books appointments, and hands urgent cases to a human with the full context attached.',
    metrics: [
      { value: '24/7', label: 'enquiry coverage without extra staff' },
      { value: '31%', label: 'fewer missed appointments' },
      { value: '3 min', label: 'average first response time' },
      { value: '2 wks', label: 'from audit to live workflow' },
    ],
    tags: ['AI Agent', 'WhatsApp', 'Scheduling'],
  },
];

export const featuredProject = projects[0];
